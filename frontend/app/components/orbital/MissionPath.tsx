"use client";
import { useEffect, useRef } from "react";

/*
 * Et skoleår som oppdrag: the free-return trajectory Artemis II flew, from Earth
 * around the Moon and home. While the section scrolls past, Orion flies the line,
 * the flown part draws in and each phase of the school year lights up as Orion
 * reaches it. With reduced motion the whole flight is shown at once.
 */
const PATH = "M 318 362 C 600 470 930 150 1192 262 C 1262 292 1272 344 1222 352 C 980 392 600 170 318 296";
const phases = [
 { at: .03, when: "Høst", title: "Oppstart", sub: "Elever, lærere og NASA HUNCH", x: 16, y: 22, anchor: "start" },
 { at: .27, when: "November", title: "Designgjennomgang", sub: "Første tilbakemelding", x: -10, y: -80, anchor: "middle" },
 { at: .56, when: "Februar", title: "Kritisk gjennomgang", sub: "Før produksjon", x: 30, y: 22, anchor: "start" },
 { at: .97, when: "Vår", title: "Levering", sub: "Ferdige produkter overleveres", x: 16, y: -70, anchor: "start" },
] as const;

export function MissionPath() {
 const section = useRef<HTMLDivElement>(null);
 const svg = useRef<SVGSVGElement>(null);

 useEffect(() => {
  const root = section.current, art = svg.current;
  if (!root || !art) return;
  const path = art.querySelector<SVGPathElement>("#mission-path")!, flown = art.querySelector<SVGPathElement>("#mission-flown")!;
  const orion = [...art.querySelectorAll<SVGCircleElement>(".orion, .orion-ring")];
  const marks = [...art.querySelectorAll<SVGGElement>(".mission-phase")];
  const items = [...root.querySelectorAll<HTMLLIElement>(".mission-phase-item")];
  const length = path.getTotalLength();
  marks.forEach(mark => { const p = path.getPointAtLength(Number(mark.dataset.at) * length); mark.setAttribute("transform", `translate(${p.x} ${p.y})`); });
  flown.style.strokeDasharray = `${length} ${length}`;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  const update = () => {
   frame = 0;
   const box = root.getBoundingClientRect(), span = root.offsetHeight - innerHeight;
   const t = reduced.matches ? 1 : Math.min(1, Math.max(0, -box.top / Math.max(1, span)));
   const p = path.getPointAtLength(t * length);
   orion.forEach(o => { o.setAttribute("cx", String(p.x)); o.setAttribute("cy", String(p.y)); });
   flown.style.strokeDashoffset = String(length * (1 - t));
   [...marks, ...items].forEach(mark => mark.classList.toggle("is-reached", Number(mark.dataset.at) <= t + .005));
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  reduced.addEventListener("change", schedule);
  update();
  return () => { removeEventListener("scroll", schedule); removeEventListener("resize", schedule); reduced.removeEventListener("change", schedule); cancelAnimationFrame(frame); };
 }, []);

 return <div className="mission-track" ref={section}>
  <div className="mission-stage">
   <div className="shell mission-head">
    <h2 id="oppdraget">{"Et skoleår er et oppdrag."}</h2>
    <p className="lead">{"Artemis II fløy rundt Månen og hjem igjen på én sammenhengende bane. Et skoleår i HUNCH følger samme logikk: fra oppstart til levering, med gjennomganger underveis."}</p>
   </div>
   <svg ref={svg} className="mission-art" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Returbanen fra Jorda rundt Månen og tilbake, med de fire fasene i et skoleår langs banen: oppstart om høsten, designgjennomgang i november, kritisk gjennomgang i februar og levering om våren.">
    <defs>
     <radialGradient id="mission-earth" cx="38%" cy="35%" r="70%"><stop offset="0" stopColor="#8fbaf0" /><stop offset=".55" stopColor="#3f6fb0" /><stop offset="1" stopColor="#0d1f3d" /></radialGradient>
     <radialGradient id="mission-moon" cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="#e2ddd4" /><stop offset=".6" stopColor="#8f8b84" /><stop offset="1" stopColor="#33312d" /></radialGradient>
    </defs>
    <circle cx="250" cy="330" r="74" fill="url(#mission-earth)" />
    <circle cx="1220" cy="300" r="34" fill="url(#mission-moon)" />
    <path id="mission-path" className="mission-line" d={PATH} />
    <path id="mission-flown" className="mission-flown" d={PATH} />
    {phases.map(p => <g key={p.title} className="mission-phase" data-at={p.at}>
     <circle r="7" />
     <text className="when" x={p.x} y={p.y} textAnchor={p.anchor}>{p.when}</text>
     <text className="title" x={p.x} y={p.y + 22} textAnchor={p.anchor}>{p.title}</text>
     <text className="sub" x={p.x} y={p.y + 44} textAnchor={p.anchor}>{p.sub}</text>
    </g>)}
    <circle className="orion-ring" r="14" cx="318" cy="362" />
    <circle className="orion" r="6" cx="318" cy="362" />
    <text className="note" x="250" y="450" textAnchor="middle">{"Jorda"}</text>
    <text className="note" x="1220" y="390" textAnchor="middle">{"Månen"}</text>
    <text className="note" x="1440" y="612" textAnchor="end">{"Banen er tegnet etter Artemis II, ikke i målestokk"}</text>
   </svg>
   <ol className="shell mission-list" role="list">
    {phases.map(p => <li key={p.title} data-at={p.at} className="mission-phase-item"><b>{p.title}</b><span>{`${p.when}: ${p.sub.charAt(0).toLowerCase()}${p.sub.slice(1)}`}</span></li>)}
   </ol>
  </div>
 </div>;
}
