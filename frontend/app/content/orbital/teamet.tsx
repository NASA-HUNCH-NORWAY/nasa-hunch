import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Teamet bak"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#menneskene">{"Menneskene"}</a>
<a href="#kontakt">{"Kontakt"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="team-masthead shell">
<div>
<p className="eyebrow">{"NASA HUNCH Norge / Menneskene"}</p>
<h1>{"Teamet bak."}</h1>
<p className="lead">{"Møt menneskene som har ansvar for daglig ledelse, styret og økonomien i NASA HUNCH Norge."}</p>
</div>
<div className="orbit-art subpage-orbit composed-orbit" aria-hidden="true">
<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
<path fill="#211058" d="M 480 -100 C 180 60 150 420 460 720 L 720 720 L 720 -100 Z" />
<path id="team-intro-field" className="hero-orbit-line" d="M 480 -100 C 180 60 150 420 460 720" />
<g data-orbit-body="" data-path="team-intro-field" data-orbit-position=".4" data-orbit-drift=".035">
<circle className="planet-halo" r="24" />
<circle className="planet" r="16" />
</g>
<path fill="#170c43" d="M -100 700 C 130 410 430 450 750 600 L 750 800 L -100 800 Z" />
<path id="team-intro-lower" className="hero-orbit-line" d="M -100 700 C 130 410 430 450 750 600" />
<g data-orbit-body="" data-path="team-intro-lower" data-orbit-position=".65" data-orbit-drift=".025">
<circle className="planet-halo" r="24" />
<circle className="planet" r="16" />
</g>
</svg>
</div>
</section>
<section className="team-directory shell" id="menneskene" aria-label="Teammedlemmer">
<article className="team-person">
<div className="person-details">
<p className="eyebrow">{"Daglig leder"}</p>
<h2>{"Tea Rasmussen"}</h2>
</div>
</article>
<article className="team-person">
<div className="person-details">
<p className="eyebrow">{"Styreleder"}</p>
<h2>{"Freider Fløan"}</h2>
</div>
</article>
<article className="team-person">
<div className="person-details">
<p className="eyebrow">{"Økonomiansvarlig"}</p>
<h2>{"Chris Jensen"}</h2>
</div>
</article>
</section>
<section className="team-contact shell" id="kontakt">
<div>
<h2>{"Ta kontakt med oss."}</h2>
<p>{"Har du spørsmål om skoledeltakelse eller et mulig samarbeid? Bruk fellesadressen vår."}</p>
<a className="text-link" href="#contact-panel" data-contact-open="" data-contact-subject="Generelt spørsmål">{"kontakt@nasahunch.no "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
<nav className="team-next" aria-label="Les videre">
<a href="/skoler">
<span>{"For lærere og skoleledere"}</span>{"HUNCH i undervisningen ↗"}</a>
<a href="/partnere">
<span>{"For bedrifter og fagmiljøer"}</span>{"Samarbeid med oss ↗"}</a>
</nav>
</section>
</main>
</>; }
