import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Prosjektet"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#behov">{"Behovet"}</a>
<a href="#elevarbeid">{"Elevarbeidet"}</a>
<a href="#resultat">{"Resultatet"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="case-intro shell">
<a className="back-link" href="/#prosjekt">{"← Forsiden"}</a>
<p className="eyebrow">{"Prosjekthistorie / USA / 2023"}</p>
<h1>{"Et kamerafeste til romstasjonen."}</h1>
<p className="lead">{"Ball Clamp Monopod ble utviklet og produsert med bidrag fra amerikanske elever i HUNCH. I 2023 ble det testet på ISS."}</p>
</section>
<figure className="case-cover shell">
<div className="photo-orbit-frame orbit-art">
<Image src="/assets/ball-clamp-iss.jpg" width={2200} height={1466} priority alt="NASA astronaut Stephen Bowen med Ball Clamp Monopod på romstasjonen." />
<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<path className="photo-orbit-field" d="M -100 850 C 250 550 750 590 1300 780 L 1300 950 L -100 950 Z" />
<path id="case-cover-photo-route" className="hero-orbit-line" d="M -100 850 C 250 550 750 590 1300 780" />
<g data-orbit-body="" data-path="case-cover-photo-route" data-orbit-position=".62" data-orbit-drift=".025">
<circle className="planet-halo" r="27" />
<circle className="planet" r="18" />
</g>
</svg>
</div>
<figcaption>{"Stephen Bowen klargjør kamerafestet for testing på ISS, Foto: NASA"}</figcaption>
</figure>
<dl className="project-facts shell">
<div>
<dt>{"Prosjekt"}</dt>
<dd>{"Ball Clamp Monopod"}</dd>
</div>
<div>
<dt>{"Fagområder"}</dt>
<dd>{"Design, produksjon, testing"}</dd>
</div>
<div>
<dt>{"Dokumentert resultat"}</dt>
<dd>{"Testet på ISS i 2023"}</dd>
</div>
</dl>
<section className="section " id="behov">
<div className="shell editorial">
<div>
<h2>{"Stabilt når det trengs. Lett å flytte unna."}</h2>
</div>
<div className="prose">
<p>{"Kameraer på romstasjonen brukes både til opptak inne i modulene og til å følge mål på jorden. Festet skulle gi en stabil, midlertidig plattform og være enkelt å flytte når astronautene trengte plassen."}</p>
<p>{"Løsningen kombinerer en teleskopstang med en ballklemme som festes til en håndrekke."}</p>
</div>
</div>
</section>
<section className="section paper" id="elevarbeid">
<div className="shell editorial">
<div>
<h2>{"Små deler, mange valg."}</h2>
</div>
<div className="prose">
<p>{"Elevene Shane Johnson og Matthew Rubis arbeidet med tommelskruen som strammer ballklemmen. Formen måtte gi et godt grep, og skruen måtte passe i den eksisterende mekanismen."}</p>
<p>{"De justerte modeller i CAD, laget prøver med 3D printing og testet ulike former. Prosjektet omfattet også elevarbeid med kamerasko, ballklemme og produksjon av deler."}</p>
</div>
</div>
<div className="shell detail-gallery">
<figure>
<Image src="/assets/ball-clamp-iterations.png" width={320} height={180} loading="lazy" alt="varianter laget med 3D printing ved siden av den ferdige metalldelen." />
<figcaption>{"Utprøving av tommelskruen, NASA HUNCH"}</figcaption>
</figure>
<figure>
<Image src="/assets/ball-clamp-assembled.jpg" width={320} height={142} loading="lazy" alt="Ferdigmonterte Ball Clamp Monopod enheter." />
<figcaption>{"Ferdigmonterte enheter, NASA HUNCH"}</figcaption>
</figure>
</div>
</section>
<section className="section " id="resultat">
<div className="shell editorial">
<div>
<h2>{"Testet på ISS."}</h2>
</div>
<div className="prose">
<p>{"NASA omtalte testingen i sin oppsummering fra uken 8. mai 2023. Astronaut Stephen Bowen klargjorde festet, som skulle gjøre kameraarbeidet enklere og raskere for besetningen."}</p>
<p>{"Dette er et dokumentert eksempel fra USA, ikke et norsk elevprosjekt eller en garanti for utfallet av andre oppdrag i HUNCH."}</p>
<a className="text-link" href="https://www.nasa.gov/missions/station/iss-research/space-station-science-highlights-week-of-may-8-2023/">{"Les NASAs omtale av testen"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
<div className="project-closing shell">
<aside className="project-references" aria-label="Kilder og bilder">
<h3>{"Kilder og bilder"}</h3>
<p>{"Prosjekthistorien bygger på NASAs egne publikasjoner. Bildene er kreditert ved hvert motiv."}</p>
<a href="https://www.nasa.gov/podcasts/houston-we-have-a-podcast/the-student-built-camera-mount/">{"Samtalen med elevene hos NASA ↗"}</a>
<a href="https://www.nasa.gov/missions/station/iss-research/space-station-science-highlights-week-of-may-8-2023/">{"NASAs oppsummering fra mai 2023 ↗"}</a>
</aside>
<div className="project-next">
<h3>{"Ta ideen inn i undervisningen."}</h3>
<p>{"Se forslag til fagkoblinger og hva en norsk skole bør avklare før oppstart."}</p>
<a className="text-link" href="/fagcase#design">{"Utforsk fagcaset"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
</main>
</>; }
