import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Programmet"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#arbeidsformer">{"Arbeidsformer"}</a>
<a href="#prosessen">{"Prosessen"}</a>
<a href="#veiledning">{"Veiledning"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="program-workbench">
<div className="shell workbench-grid">
<div>
<p className="eyebrow">{"Programmet / Arbeidsmåten"}</p>
<h1>{"Fra oppdrag"}<br />{"til løsning."}</h1>
<p className="lead">{"Les kravene. Bygg og test. Dokumenter resultatet. Veien gjennom prosjektet avhenger av hva elevene skal lage."}</p>
</div>
<div className="orbit-art subpage-orbit composed-orbit" aria-hidden="true">
<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
<path fill="#211058" d="M 480 -100 C 180 60 150 420 460 720 L 720 720 L 720 -100 Z" />
<path id="program-intro-field" className="hero-orbit-line" d="M 480 -100 C 180 60 150 420 460 720" />
<g data-orbit-body="" data-path="program-intro-field" data-orbit-position=".4" data-orbit-drift=".035">
<circle className="planet-halo" r="24" />
<circle className="planet" r="16" />
</g>
<path fill="#170c43" d="M -100 700 C 130 410 430 450 750 600 L 750 800 L -100 800 Z" />
<path id="program-intro-lower" className="hero-orbit-line" d="M -100 700 C 130 410 430 450 750 600" />
<g data-orbit-body="" data-path="program-intro-lower" data-orbit-position=".65" data-orbit-drift=".025">
<circle className="planet-halo" r="24" />
<circle className="planet" r="16" />
</g>
</svg>
</div>
</div>
</section>
<section className="section paper" id="arbeidsformer">
<div className="shell">
<div className="section-heading">
<h2>{"Ulike oppdrag. Ulike utgangspunkt."}</h2>
</div>
<div className="two-column">
<article>
<h3>{"Arbeid etter tegning"}</h3>
<p>{"Elevene planlegger produksjonen, velger arbeidsmetode og kontrollerer delen mot kravene. Nøyaktighet og dokumentasjon er en del av leveransen."}</p>
</article>
<article>
<h3>{"Utvikle en løsning"}</h3>
<p>{"Elevene undersøker et behov og prøver ut ulike konsepter. Prototyper og tester gir grunnlag for å velge hva de skal jobbe videre med."}</p>
</article>
</div>
<p className="source-note">{"Dette er to av arbeidsformene i det amerikanske programmet. "}<a href="https://engineering.larc.nasa.gov/hunch-program/">{"Les mer hos NASA Langley ↗"}</a>
</p>
</div>
</section>
<section className="section process-section" id="prosessen">
<div className="shell">
<div className="process-section-intro">
<div>
<h2>{"Vis hva som fungerer."}</h2>
</div>
<p className="lead">{"Følg løsningen fra behov til prototype og dokumentert resultat. Hvert forsøk gir grunnlag for neste steg."}</p>
</div>
<div className="process-orbit orbit-art">
<svg viewBox="0 0 1440 380" aria-hidden="true">
<path id="program-process-route" data-process-route="" className="orbit-line" d="M -80 235 C 330 20 800 5 1520 205" />
<g data-orbit-body="" data-path="program-process-route" data-orbit-position=".36" data-orbit-drift=".04">
<circle className="planet-halo" r="20" />
<circle className="planet" r="11" />
</g>
<g data-process-node=".16">
<circle r="23" />
</g>
<g data-process-node=".50">
<circle r="23" />
</g>
<g data-process-node=".83">
<circle r="23" />
</g>
</svg>
<ol className="orbital-steps" role="list">
<li id="forsta" data-process-step=".16">
<h3>{"Forstå oppdraget"}</h3>
<p>{"Hvem skal bruke løsningen? Hvilke mål, materialer og funksjoner er gitt? Hva må undersøkes?"}</p>
</li>
<li id="bygge" data-process-step=".50">
<h3>{"Bygg og test"}</h3>
<p>{"Lag en modell, prototype eller del. Mål resultatet mot kravene, noter feil og gjør nødvendige endringer."}</p>
</li>
<li id="dokumentere" data-process-step=".83">
<h3>{"Dokumenter og presenter"}</h3>
<p>{"Samle tegninger, måleresultater og begrunnelser. Vis både det som fungerer og det som gjenstår."}</p>
</li>
</ol>
</div>
</div>
</section>
<section className="section paper" id="veiledning">
<div className="shell editorial">
<div>
<h2>{"Gjennomganger underveis."}</h2>
</div>
<div className="prose">
<p>{"I det amerikanske løpet for design og prototyping presenterer elevteam løsningene sine for fagfolk. De må forklare valgene sine og bruke tilbakemeldingene i videre arbeid."}</p>
<p>{"For en norsk skole må antall gjennomganger, veiledere og frister avtales som del av opplegget. Det er ikke én fast tidsplan for alle typer oppdrag."}</p>
<a className="text-link" href="https://nasahunch.com/programs/design-and-prototyping">{"Design & Prototyping i USA"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<section className="section">
<div className="shell feature">
<figure>
<div className="photo-orbit-frame orbit-art">
<Image src="/assets/ball-clamp-iss.jpg" width={2200} height={1466} loading="lazy" alt="Astronaut Stephen Bowen tester et kamerafeste på ISS." />
<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<path className="photo-orbit-field" d="M -100 850 C 250 550 750 590 1300 780 L 1300 950 L -100 950 Z" />
<path id="program-case-photo-route" className="hero-orbit-line" d="M -100 850 C 250 550 750 590 1300 780" />
<g data-orbit-body="" data-path="program-case-photo-route" data-orbit-position=".62" data-orbit-drift=".025">
<circle className="planet-halo" r="27" />
<circle className="planet" r="18" />
</g>
</svg>
</div>
<figcaption>{"Ball Clamp Monopod på ISS, Foto: NASA"}</figcaption>
</figure>
<div>
<p className="eyebrow">{"Et eksempel fra USA"}</p>
<h2>{"Et kamerafeste bygget av elever."}</h2>
<p>{"Ball Clamp Monopod ble testet på romstasjonen i 2023. Prosjektet viser hvordan designarbeid og produksjon kan henge sammen."}</p>
<a className="text-link" href="/prosjekt">{"Se prosjektet"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<section className="contact-band" id="kontakt">
<div className="shell contact-grid">
<div>
<h2>{"Vil dere prøve et oppdrag?"}</h2>
</div>
<div>
<p>{"Fortell hvilke fag og elevgrupper det gjelder, så kan vi se på hva som kan passe."}</p>
<a className="text-link" href="#contact-panel" data-contact-open="" data-contact-subject="Skole og elevprosjekt">{"kontakt@nasahunch.no"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
</main>
</>; }
