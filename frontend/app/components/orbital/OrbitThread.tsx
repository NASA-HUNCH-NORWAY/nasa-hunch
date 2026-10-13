"use client";

import { useEffect, useRef, useState } from "react";

/*
 * STUDIE: én sammenhengende bane gjennom hele forsiden.
 *
 * Banen bygges av posisjonen til stoppene, så den følger innholdet når høyden
 * endrer seg. Planeten følger leselinjen midt i vinduet. Banen ligger i
 * margen og krysser bare mellom stoppene, så den aldri går over tekst.
 */
type Variant = "veving" | "skinne" | "av";
const variants: { id: Variant; label: string; note: string }[] = [
  { id: "veving", label: "Veving", note: "Banen bytter side der stoppene bytter side." },
  { id: "skinne", label: "Skinne", note: "En rolig bane i høyre marg, med et punkt for hvert stopp." },
  { id: "av", label: "Av", note: "Forsiden slik den er nå." },
];

type Geometry = { top: number; width: number; height: number; d: string; nodes: { id: string; label: string; x: number; y: number }[] };

function buildPath(story: HTMLElement, variant: Variant): Geometry | null {
  const stops = [...story.querySelectorAll<HTMLElement>("[data-stop]")];
  if (!stops.length) return null;
  const width = story.clientWidth, height = story.scrollHeight;
  const shell = Math.min(1180, width - 96);
  const gutter = Math.max(28, (width - shell) / 2);
  const right = width - gutter / 2, left = gutter / 2;
  const bow = Math.min(46, gutter * .45);
  const sides = variant === "veving" ? stops.map(stop => stop.classList.contains("stop-mirrored") ? "left" : "right") : stops.map(() => "right");
  const xOf = (side: string) => side === "left" ? left : right;
  const inward = (side: string) => side === "left" ? bow : -bow;
  const turn = 150;

  let d = "";
  const nodes: Geometry["nodes"] = [];
  stops.forEach((stop, index) => {
    const top = stop.offsetTop, bottom = top + stop.offsetHeight, side = sides[index], x = xOf(side);
    const enter = index === 0 ? 0 : top + turn / 2, leave = index === stops.length - 1 ? bottom : bottom - turn / 2;
    if (index === 0) d += `M ${x} ${enter}`;
    // Each stop bows gently inward, like a segment of an orbit.
    const third = (leave - enter) / 3;
    d += ` C ${x + inward(side) * (variant === "skinne" ? .35 : 1)} ${enter + third} ${x + inward(side) * (variant === "skinne" ? .35 : 1)} ${leave - third} ${x} ${leave}`;
    const next = stops[index + 1];
    if (next) {
      // Crossing between stops: vertical tangents, so the line stays in the gap between sections.
      const nextX = xOf(sides[index + 1]), nextEnter = next.offsetTop + turn / 2, mid = (leave + nextEnter) / 2;
      d += ` C ${x} ${mid} ${nextX} ${mid} ${nextX} ${nextEnter}`;
    }
    nodes.push({ id: stop.id, label: stop.querySelector("h1,h2")?.textContent?.trim() || stop.id, x, y: top + stop.offsetHeight / 2 });
  });
  return { top: story.offsetTop, width, height, d, nodes };
}

/** Finds the length along the path where it reaches a given height. The path never turns back upward. */
function lengthAtY(path: SVGPathElement, y: number) {
  const total = path.getTotalLength();
  let low = 0, high = total;
  for (let i = 0; i < 24; i++) {
    const mid = (low + high) / 2;
    if (path.getPointAtLength(mid).y < y) low = mid; else high = mid;
  }
  return Math.min(total, Math.max(0, low));
}

export function OrbitThread() {
  const [variant, setVariant] = useState<Variant>("veving");
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const path = useRef<SVGPathElement>(null);
  const trail = useRef<SVGPathElement>(null);
  const planet = useRef<SVGGElement>(null);

  useEffect(() => {
    document.querySelector(".site-page")?.setAttribute("data-thread", variant);
    const story = document.getElementById("scroll-story");
    if (!story || variant === "av") return;
    // ResizeObserver reports once as soon as it starts observing, which builds the first path.
    const observer = new ResizeObserver(() => setGeometry(buildPath(story, variant)));
    observer.observe(story);
    return () => observer.disconnect();
  }, [variant]);

  useEffect(() => {
    const line = path.current, done = trail.current, body = planet.current, story = document.getElementById("scroll-story");
    if (!geometry || variant === "av" || !line || !done || !body || !story) return;
    const total = line.getTotalLength();
    done.style.strokeDasharray = `${total} ${total}`;
    let frame = 0;
    const update = () => {
      frame = 0;
      const reading = window.scrollY + innerHeight * .5 - story.getBoundingClientRect().top - window.scrollY;
      const at = lengthAtY(line, reading);
      const point = line.getPointAtLength(at);
      body.setAttribute("transform", `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})`);
      done.style.strokeDashoffset = String(total - at);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [geometry, variant]);

  return <>
    {geometry && variant !== "av" && <svg className="orbit-thread" style={{ top: geometry.top }} width={geometry.width} height={geometry.height} viewBox={`0 0 ${geometry.width} ${geometry.height}`} aria-hidden="true">
      <path ref={path} className="orbit-thread-line" d={geometry.d} />
      <path ref={trail} className="orbit-thread-trail" d={geometry.d} />
      {variant === "skinne" && geometry.nodes.map(node => <circle key={node.id} className="orbit-thread-node" cx={node.x} cy={node.y} r="5" />)}
      <g ref={planet} className="orbit-thread-planet"><circle r="15" className="orbit-thread-halo" /><circle r="9" /></g>
    </svg>}
    <aside className="study-panel" aria-label="Studie av banen">
      <p className="study-panel-title">Studie: én bane gjennom forsiden</p>
      <div className="study-panel-options" role="radiogroup" aria-label="Variant">
        {variants.map(option => <button key={option.id} type="button" role="radio" aria-checked={variant === option.id} onClick={() => setVariant(option.id)}>{option.label}</button>)}
      </div>
      <p className="study-panel-note">{variants.find(option => option.id === variant)?.note}</p>
    </aside>
  </>;
}
