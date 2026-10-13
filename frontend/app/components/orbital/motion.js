export function setupMotion() {
  const controller = new AbortController();
  const observers = [];
  const frames = new Set();
  const requestAnimationFrame = (callback) => {
    const id = window.requestAnimationFrame(time => { frames.delete(id); callback(time); });
    frames.add(id); return id;
  };
  const cancelAnimationFrame = id => { frames.delete(id); window.cancelAnimationFrame(id); };
  const listen = (target, type, callback, options = {}) => target.addEventListener(type, callback, { ...options, signal:controller.signal });
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-nav');
  const narrow = matchMedia('(max-width: 1100px)');
  menu.hidden = false;
  const closeMenu = () => {
    header.classList.remove('menu-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.querySelector('span').textContent = '+';
  };
  listen(menu, 'click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    header.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.querySelector('span').textContent = open ? '−' : '+';
  });
  listen(document, 'keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  listen(document, 'click', event => { if (!header.contains(event.target)) closeMenu(); });
  listen(header, 'focusout', () => {
    requestAnimationFrame(() => { if (!header.contains(document.activeElement)) closeMenu(); });
  });
  listen(navigation, 'click', event => { if (event.target.closest('a')) closeMenu(); });
  listen(narrow, 'change', closeMenu);

  // Front page: ordinary document scrolling. The stop dots follow the section in view.
  const story = document.getElementById('scroll-story');
  const stops = story ? [...story.querySelectorAll('[data-stop]')] : [];
  const links = [...document.querySelectorAll('[data-stop-link]')];
  function setActive(index) {
    document.querySelector('.site-page').dataset.tone = stops[index]?.classList.contains('paper') ? 'paper' : 'dark';
    links.forEach((link, i) => {
      if (i === index) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  if (stops.length) {
    // The current stop is the last one whose top has passed 40 % of the window height.
    const current = () => stops.reduce((found, stop, index) => stop.getBoundingClientRect().top <= innerHeight * .4 ? index : found, 0);
    let pending = false;
    const update = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => { pending = false; setActive(current()); });
    };
    listen(window, 'scroll', update, { passive: true });
    listen(window, 'resize', update);
    setActive(current());
  }

  // Place process markers and their labels from the same SVG path.
  function layoutProcesses() {
    document.querySelectorAll('[data-process-route]').forEach(path => {
      const svg = path.ownerSVGElement, art = svg.parentElement;
      const box = svg.viewBox.baseVal, length = path.getTotalLength();
      art.querySelectorAll('[data-process-node]').forEach(node => {
        const point = path.getPointAtLength(Number(node.dataset.processNode) * length);
        node.setAttribute('transform', 'translate(' + point.x + ' ' + point.y + ')');
      });
      if (!art.clientWidth || matchMedia('(max-width:720px)').matches) return;
      const scale = Math.min(art.clientWidth / box.width, art.clientHeight / box.height);
      const xOffset = (art.clientWidth - box.width * scale) / 2;
      const yOffset = (art.clientHeight - box.height * scale) / 2;
      art.querySelectorAll('[data-process-step]').forEach(step => {
        const point = path.getPointAtLength(Number(step.dataset.processStep) * length);
        step.style.left = (xOffset + point.x * scale) + 'px';
        step.style.top = (yOffset + point.y * scale + 44) + 'px';
      });
    });
  }
  layoutProcesses();
  let resizeFrame = 0;
  listen(window, 'resize', () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(layoutProcesses); });

  // The school year marks the current phase from today's date. Months count from August.
  const schoolMonth = month => (month + 5) % 12; // getMonth(): August (7) becomes 0
  const now = schoolMonth(new Date().getMonth());
  document.querySelectorAll('.year-cycle').forEach(list => {
    const phases = [...list.querySelectorAll('li[data-from]')];
    const current = phases.filter(li => schoolMonth(Number(li.dataset.from) - 1) <= now).pop();
    if (!current) return;
    current.classList.add('is-now');
    current.setAttribute('aria-current', 'step');
  });

  // Process journey: when the section comes into view, the planet travels from the
  // first node to the last, and each step appears as the planet reaches it.
  const journeys = new Map();
  if (!reduced.matches && !matchMedia('(max-width: 720px)').matches) {
    document.querySelectorAll('.process-orbit').forEach(art => {
      if (art.getBoundingClientRect().top < innerHeight * .8) return;
      art.dataset.journey = 'pending';
      journeys.set(art, { start: 0, nodes: [...art.querySelectorAll('[data-process-node]')], steps: [...art.querySelectorAll('[data-process-step]')] });
    });
    const journeyObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.journey !== 'pending') return;
      const art = entry.target, journey = journeys.get(art);
      art.dataset.journey = 'running';
      journey.start = performance.now();
      // If the frame loop is paused (background tab), never leave the steps hidden.
      setTimeout(() => {
        if (art.dataset.journey !== 'running') return;
        [...journey.nodes, ...journey.steps].forEach(item => item.classList.add('is-reached'));
        art.dataset.journey = 'done';
      }, journeyTime + 800);
      journeyObserver.unobserve(entry.target);
    }), { threshold: .45 });
    journeys.forEach((_, art) => journeyObserver.observe(art));
    observers.push(journeyObserver);
  }
  const journeyFrom = .03, journeyTo = .83, journeyTime = 2600;
  const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  function journeyProgress(art) {
    const journey = journeys.get(art);
    if (!journey || art.dataset.journey === 'done') return null;
    if (art.dataset.journey === 'pending') return journeyFrom;
    const t = Math.min(1, (performance.now() - journey.start) / journeyTime);
    const progress = journeyFrom + easeInOut(t) * (journeyTo - journeyFrom);
    const reached = item => Number(item.dataset.processNode ?? item.dataset.processStep) <= progress + .005;
    journey.nodes.forEach(node => node.classList.toggle('is-reached', reached(node)));
    journey.steps.forEach(step => step.classList.toggle('is-reached', reached(step)));
    if (t === 1) art.dataset.journey = 'done';
    return progress;
  }

  // SVG path and planet share one coordinate system. Only visible artwork is
  // animated; hidden tabs and reduced-motion preferences stop the frame loop.
  // The gap around a planet is cut out of the orbit line with a mask, so it shows
  // whatever lies behind it on both sides of the line: page, colour field or photo.
  // Without JavaScript the filled halo stays as a fallback.
  const svgNS = 'http://www.w3.org/2000/svg';
  const gapMasks = new Map();
  function cutGap(path, halo, index) {
    let mask = gapMasks.get(path);
    if (!mask) {
      const svg = path.ownerSVGElement;
      const defs = svg.querySelector('defs') || svg.insertBefore(document.createElementNS(svgNS, 'defs'), svg.firstChild);
      mask = document.createElementNS(svgNS, 'mask');
      mask.id = 'orbit-gap-' + index;
      mask.setAttribute('maskUnits', 'userSpaceOnUse');
      for (const [name, value] of [['x', -1e5], ['y', -1e5], ['width', 2e5], ['height', 2e5]]) mask.setAttribute(name, value);
      const keep = document.createElementNS(svgNS, 'rect');
      for (const [name, value] of [['x', -1e5], ['y', -1e5], ['width', 2e5], ['height', 2e5], ['fill', 'white']]) keep.setAttribute(name, value);
      mask.append(keep);
      defs.append(mask);
      path.setAttribute('mask', 'url(#' + mask.id + ')');
      gapMasks.set(path, mask);
    }
    const hole = document.createElementNS(svgNS, 'circle');
    hole.setAttribute('r', halo.getAttribute('r'));
    hole.setAttribute('fill', 'black');
    hole.setAttribute('cx', -1e5);
    mask.append(hole);
    halo.style.opacity = '0';
    return hole;
  }
  // Remove the masks on teardown, so a remount does not leave stale masks with the same id behind.
  controller.signal.addEventListener('abort', () => {
    gapMasks.forEach((mask, path) => { path.removeAttribute('mask'); mask.remove(); });
    document.querySelectorAll('.planet-halo,.crossing-halo').forEach(halo => { halo.style.opacity = ''; });
  });
  const bodies = [...document.querySelectorAll('[data-orbit-body]')].map((body, index) => {
    const path = document.getElementById(body.dataset.path);
    const halo = body.querySelector('.planet-halo,.crossing-halo');
    return { body, path, length: path.getTotalLength(), moon: body.querySelector('[data-moon]'), halo,
      hole: halo ? cutGap(path, halo, index) : null,
      art: body.closest('.orbit-art, .hero-photo-frame'), transit: body.hasAttribute('data-transit'), visible: false };
  });
  let animationFrame = 0, lastTime = 0, elapsed = 0;
  function paint() {
    const scroll = reduced.matches ? 0 : window.scrollY;
    // Read every layout box before writing any transform, so the browser lays out once per frame.
    const rects = bodies.map(item => item.visible && item.transit ? item.art.getBoundingClientRect() : null);
    bodies.forEach((item, index) => {
      if (!item.visible) return;
      const rect = rects[index] || {top: 0, height: 0};
      const passage = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight + rect.height)));
      const progress = item.transit
        ? (reduced.matches ? .5 : .02 + passage * .96)
        : ((item.art.classList.contains('hero-orbit') ? .3 : .14) + index * .18 + elapsed / 100000 + scroll / 30000) % 1;
      const journey = item.art.classList.contains('process-orbit') ? journeyProgress(item.art) : null;
      if (journey === null && item.art.dataset.journey === 'done' && !item.settled) { item.settled = true; item.body.dataset.orbitPosition = String(journeyTo); }
      const base = Number(item.body.dataset.orbitPosition);
      const boundedProgress = journey !== null ? journey : item.body.hasAttribute('data-orbit-position')
        ? base + (reduced.matches ? 0 : Math.sin(elapsed / 15000) * Number(item.body.dataset.orbitDrift || .025))
        : progress;
      const point = item.path.getPointAtLength(boundedProgress * item.length);
      item.body.setAttribute('transform', 'translate(' + point.x.toFixed(2) + ' ' + point.y.toFixed(2) + ')');
      if (item.hole) { item.hole.setAttribute('cx', point.x.toFixed(2)); item.hole.setAttribute('cy', point.y.toFixed(2)); }
      const angle = elapsed / 8500 + index;
      if (item.moon) {
        const radius = Number(item.halo?.getAttribute('r') || 17) + 22;
        item.moon.setAttribute('transform', 'translate(' + (Math.cos(angle)*radius).toFixed(2) + ' ' + (Math.sin(angle)*radius).toFixed(2) + ')');
      }
    });
  }
  function frame(now) {
    elapsed += Math.min(48, now - lastTime);
    lastTime = now;
    paint();
    animationFrame = requestAnimationFrame(frame);
  }
  function syncMotion() {
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    if (document.hidden || reduced.matches || !bodies.some(item => item.visible)) {
      paint();
      return;
    }
    lastTime = performance.now();
    animationFrame = requestAnimationFrame(frame);
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { bodies.filter(item => item.art === entry.target).forEach(item => { item.visible = entry.isIntersecting; }); });
    syncMotion();
  }, { threshold: 0 });
  bodies.forEach(item => observer.observe(item.art));
  observers.push(observer);
  listen(reduced, 'change', syncMotion);
  listen(document, 'visibilitychange', syncMotion);
  syncMotion();
})();

// Keep the local section navigation in sync with the visible chapter.
(() => {
  const links = [...document.querySelectorAll('.section-links a[href^="#"]')];
  const chapters = links.map(link => ({link, section:document.getElementById(link.hash.slice(1))})).filter(item => item.section);
  if (!chapters.length) return;
  let pending = false;
  function updateLocation() {
    pending = false;
    let current = chapters[0];
    chapters.forEach(item => { if (item.section.getBoundingClientRect().top <= 160) current = item; });
    chapters.forEach(item => {
      if (item === current) item.link.setAttribute('aria-current','location');
      else item.link.removeAttribute('aria-current');
    });
  }
  listen(window, 'scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(updateLocation); }
  }, {passive:true});
  listen(window, 'resize', updateLocation);
  updateLocation();
})();

return () => { controller.abort(); observers.forEach(observer => observer.disconnect()); frames.forEach(id => window.cancelAnimationFrame(id)); document.documentElement.classList.remove('js'); };
}
