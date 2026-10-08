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

  const story = document.getElementById('scroll-story');
  const stops = story ? [...story.querySelectorAll('[data-stop]')] : [];
  const links = [...document.querySelectorAll('[data-stop-link]')];
  const snapMode = matchMedia('(min-width: 961px) and (min-height: 681px)');
  let active = 0, scrollFrame = 0;
  const nearest = () => stops.reduce((best, stop, index) =>
    Math.abs(stop.getBoundingClientRect().top) < Math.abs(stops[best].getBoundingClientRect().top) ? index : best, 0);
  function setActive(index) {
    active = index;
    document.querySelector('.site-page').dataset.tone = stops[index]?.classList.contains('paper') ? 'paper' : 'dark';
    links.forEach((link, i) => {
      if (i === index) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function cancelScroll() {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = 0;
    if (story) story.style.scrollSnapType = '';
  }
  function goTo(index, instant = false) {
    if (!story) return;
    cancelScroll();
    index = Math.max(0, Math.min(stops.length - 1, index));
    if (!snapMode.matches) {
      setActive(index);
      stops[index].scrollIntoView({ behavior: instant || reduced.matches ? 'instant' : 'smooth', block: 'start' });
      return;
    }
    const from = story.scrollTop, to = stops[index].offsetTop;
    setActive(index);
    if (instant || reduced.matches || Math.abs(to - from) < 2) {
      story.scrollTop = to;
      return;
    }
    story.style.scrollSnapType = 'none';
    const start = performance.now();
    const duration = Math.min(850, 580 + Math.abs(to - from) * .08);
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = t * t * (3 - 2 * t);
      story.scrollTop = from + (to - from) * eased;
      if (t < 1) scrollFrame = requestAnimationFrame(step);
      else { cancelScroll(); setActive(index); }
    }
    scrollFrame = requestAnimationFrame(step);
  }
  if (story) {
    let scrollPending = false;
    const updateScroll = () => {
      if (scrollPending) return;
      scrollPending = true;
      requestAnimationFrame(() => { scrollPending = false; if (!scrollFrame) setActive(nearest()); });
    };
    listen(story, 'scroll', updateScroll, { passive: true });
    listen(window, 'scroll', updateScroll, { passive: true });
    // One section per swipe. Recognise a fresh acceleration even while the
    // previous swipe's momentum is still producing wheel events.
    function createWheelGesture() {
      let lastTime = -Infinity, direction = 0, total = 0, consumed = false, tail = Infinity;
      return (delta, now, animating) => {
        const magnitude = Math.abs(delta), nextDirection = Math.sign(delta);
        if (magnitude < 1) return 0;
        const freshSwipe = now - lastTime > 140 || nextDirection !== direction
          || (consumed && !animating && magnitude >= Math.max(12, tail * 2.5) && magnitude - tail >= 10);
        if (freshSwipe) { total = 0; consumed = false; tail = Infinity; }
        lastTime = now;
        direction = nextDirection;
        if (consumed) tail = Math.min(tail, magnitude);
        if (animating || consumed) return 0;
        total += delta;
        if (Math.abs(total) < 45) return 0;
        consumed = true;
        tail = magnitude;
        total = 0;
        return direction;
      };
    }
    const wheelGesture = createWheelGesture();
    listen(story, 'wheel', event => {
      if (!snapMode.matches || event.ctrlKey || event.defaultPrevented
        || Math.abs(event.deltaX) > Math.abs(event.deltaY)
        || menu.getAttribute('aria-expanded') === 'true') return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? story.clientHeight : 1);
      if (!delta) return;
      const index = scrollFrame ? active : nearest();
      const stop = stops[index];
      const top = stop.offsetTop, bottom = top + stop.offsetHeight - story.clientHeight;
      // Allow normal scrolling inside a section that has more content than
      // fits on screen; only advance once its edge has been reached.
      if (!scrollFrame && stop.offsetHeight > story.clientHeight + 2
        && (delta > 0 ? story.scrollTop < bottom - 2 : story.scrollTop > top + 2)) return;
      event.preventDefault();
      const move = wheelGesture(delta, performance.now(), Boolean(scrollFrame));
      if (move) goTo(index + move);
    }, { passive: false });
    listen(story, 'touchstart', cancelScroll, { passive: true });
    listen(document, 'keydown', event => {
      if (!snapMode.matches || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey
        || event.target.closest('a,button,input,textarea,select,summary,[contenteditable="true"]')
        || menu.getAttribute('aria-expanded') === 'true'
        || stops[nearest()]?.offsetHeight > story.clientHeight + 2) return;
      const moves = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1, ' ': event.shiftKey ? -1 : 1 };
      if (!(event.key in moves) && !['Home','End'].includes(event.key)) return;
      event.preventDefault();
      if (event.repeat || scrollFrame) return;
      goTo(event.key === 'Home' ? 0 : event.key === 'End' ? stops.length - 1 : nearest() + moves[event.key]);
    });
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      const index = stops.findIndex(stop => '#' + stop.id === link.getAttribute('href'));
      if (index < 0) return;
      listen(link, 'click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        history.pushState(null, '', '#' + stops[index].id);
        goTo(index);
      });
    });
    function restoreHash() {
      const index = stops.findIndex(stop => '#' + stop.id === location.hash);
      if (index < 0 && !snapMode.matches) return;
      goTo(index < 0 ? 0 : index, true);
    }
    listen(window, 'hashchange', restoreHash);
    listen(window, 'popstate', restoreHash);
    listen(window, 'pageshow', () => { if (location.hash) restoreHash(); else setActive(nearest()); });
    listen(window, 'resize', () => {
      cancelScroll();
      if (snapMode.matches) goTo(active, true);
    });
    restoreHash();
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
  listen(window, 'resize', layoutProcesses);

  // SVG path and planet share one coordinate system. Only visible artwork is
  // animated; hidden tabs and reduced-motion preferences stop the frame loop.
  const bodies = [...document.querySelectorAll('[data-orbit-body]')].map(body => {
    const path = document.getElementById(body.dataset.path);
    return { body, path, length: path.getTotalLength(), moon: body.querySelector('[data-moon]'),
      art: body.closest('.orbit-art, .hero-photo-frame'), transit: body.hasAttribute('data-transit'), visible: false };
  });
  let animationFrame = 0, lastTime = 0, elapsed = 0;
  function paint() {
    const scroll = reduced.matches ? 0 : (story && snapMode.matches ? story.scrollTop : window.scrollY);
    bodies.forEach((item, index) => {
      if (!item.visible) return;
      const rect = item.art.getBoundingClientRect();
      const passage = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight + rect.height)));
      const progress = item.transit
        ? (reduced.matches ? .5 : .02 + passage * .96)
        : ((item.art.classList.contains('hero-orbit') ? .3 : .14) + index * .18 + elapsed / 100000 + scroll / 30000) % 1;
      const base = Number(item.body.dataset.orbitPosition);
      const boundedProgress = item.body.hasAttribute('data-orbit-position')
        ? base + (reduced.matches ? 0 : Math.sin(elapsed / 15000) * Number(item.body.dataset.orbitDrift || .025))
        : progress;
      const point = item.path.getPointAtLength(boundedProgress * item.length);
      item.body.setAttribute('transform', 'translate(' + point.x.toFixed(2) + ' ' + point.y.toFixed(2) + ')');
      const angle = elapsed / 8500 + index;
      if (item.moon) {
        const halo = item.body.querySelector('.planet-halo,.crossing-halo');
        const radius = Number(halo?.getAttribute('r') || 17) + 22;
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
  listen(reduced, 'change', () => { cancelScroll(); syncMotion(); });
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
