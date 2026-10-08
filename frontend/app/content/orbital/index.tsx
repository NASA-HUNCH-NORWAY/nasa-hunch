import { site, addressLine } from "@/app/lib/site";
import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<nav className="stop-nav" aria-label="Stopp på forsiden">
<a href="#oppdrag" data-stop-link="" aria-label="Om HUNCH">
<span>{"01"}</span>
<b>{"Om HUNCH"}</b>
</a>
<a href="#program" data-stop-link="" aria-label="Programmet">
<span>{"02"}</span>
<b>{"Programmet"}</b>
</a>
<a href="#prosjekt" data-stop-link="" aria-label="Prosjektet">
<span>{"03"}</span>
<b>{"Prosjektet"}</b>
</a>
<a href="#skoler" data-stop-link="" aria-label="For skoler">
<span>{"04"}</span>
<b>{"For skoler"}</b>
</a>
<a href="#partnere" data-stop-link="" aria-label="Partnere">
<span>{"05"}</span>
<b>{"Partnere"}</b>
</a>
</nav>
<main id="main" tabIndex={-1}>
<div id="scroll-story" tabIndex={0} aria-label="Forsiden, fem stopp">
<section className="scroll-stop" id="oppdrag" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<p className="eyebrow">{"NASA HUNCH Norge / For videregående skoler"}</p>
<h1>{"Elever bygger"}<br />{"for romfart."}</h1>
<p className="lead">{"La elevene jobbe med praktiske oppgaver inspirert av behov hos NASA. Fra tegning og prototype til testing og dokumentasjon, med et opplegg som passer skolens fag, tid og utstyr."}</p>
<div className="home-actions">
<a className="home-primary-link" href="/skoler">{"For skoler "}<span aria-hidden="true">{"↗"}</span>
</a>
<a className="text-link" href="/about">{"Hva er NASA HUNCH? "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
<figure className="home-hero-media">
<div className="hero-photo-frame">
<Image src="/assets/ball-clamp-iss.jpg" width={2200} height={1466} priority alt="NASA astronaut Stephen Bowen tester et kamerafeste utviklet med bidrag fra amerikanske elever i HUNCH på ISS." />
<svg className="hero-photo-orbit" viewBox="0 0 600 150" aria-hidden="true">
<path className="photo-orbit-field" d="M -40 130 Q 300 -20 640 130 L 640 190 L -40 190 Z" />
<path id="home-photo-path" className="hero-orbit-line" d="M -40 130 Q 300 -20 640 130" />
<g data-orbit-body="" data-path="home-photo-path" data-orbit-position=".61" data-orbit-drift=".025">
<circle className="planet-halo" r="18" />
<circle className="planet" r="11" />
</g>
</svg>
</div>
<figcaption>{"Et elevbygget kamerafeste i bruk på ISS."}<br />{"Ball Clamp Monopod, Eksempel fra USA, Foto: NASA"}</figcaption>
</figure>
</div>
<a className="scroll-hint" href="#program">{"Utforsk programmet "}<span aria-hidden="true">{"↓"}</span>
</a>
</section>
<section className="scroll-stop paper process-section" id="program" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<h2>{"Lær gjennom"}<br />{"å lage."}</h2>
<p className="lead">{"Arbeid etter en ferdig tegning, eller utvikle en ny løsning. Testene og dokumentasjonen er en del av oppgaven."}</p>
<a className="text-link" href="/programs">{"Slik foregår arbeidet"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
<div className="process-orbit orbit-art">
<svg viewBox="0 0 1440 380" aria-hidden="true">
<path id="home-process-route" data-process-route="" className="orbit-line" d="M -80 235 C 330 20 800 5 1520 205" />
<g data-orbit-body="" data-path="home-process-route" data-orbit-position=".36" data-orbit-drift=".04">
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
<li data-process-step=".16">
<h3>{"Forstå"}</h3>
<p>{"Sett dere inn i behovet og kravene."}</p>
</li>
<li data-process-step=".50">
<h3>{"Bygg"}</h3>
<p>{"Lag en del eller en prototype."}</p>
</li>
<li data-process-step=".83">
<h3>{"Test"}</h3>
<p>{"Mål resultatet og dokumenter arbeidet."}</p>
</li>
</ol>
</div>
</div>
</section>
<section className="scroll-stop" id="prosjekt" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<h2>{"Bygget av elever."}<br />{"Testet på ISS."}</h2>
<p className="lead">{"Et kamerafeste, mange prototyper og en test på romstasjonen. Se historien bak Ball Clamp Monopod."}</p>
<a className="text-link" href="/prosjekt">{"Se prosjektet"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
<figure className="home-photo home-workshop-photo">
<div className="photo-orbit-frame orbit-art">
<Image src="/assets/ball-clamp-students-original.jpg" width={2048} height={1536} loading="lazy" alt="To amerikanske elever arbeider med en tidlig versjon av kamerafestet i verkstedet." />
<svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<path className="photo-orbit-field" d="M 1220 -100 C 1030 180 1040 620 1200 1000 L 1400 1000 L 1400 -100 Z" />
<path id="home-workshop-photo-route" className="hero-orbit-line" d="M 1220 -100 C 1030 180 1040 620 1200 1000" />
<g data-orbit-body="" data-path="home-workshop-photo-route" data-orbit-position=".43" data-orbit-drift=".025">
<circle className="planet-halo" r="29" />
<circle className="planet" r="19" />
</g>
</svg>
</div>
<figcaption>{"Elever arbeider med en tidlig versjon av kamerafestet i USA. Foto: NASA"}</figcaption>
</figure>
</div>
</section>
<section className="scroll-stop" id="skoler" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<h2>{"En plass i"}<br />{"undervisningen."}</h2>
<p className="lead">{"For lærere og skoleledere i videregående skole. Utforsk oppgaver innen produksjon, teknologi, matfag og IT, og se hva som må avklares før dere starter."}</p>
<a className="text-link" href="/skoler#spor">{"Finn et fagcase for skolen"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
<div className="orbit-art section-orbit-fields" aria-hidden="true">
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
<path fill="#211058" d="M 1210 -150 C 960 100 950 550 1300 1100 L 1600 1100 L 1600 -150 Z" />
<path id="home-school-vertical" className="hero-orbit-line" d="M 1210 -150 C 960 100 950 550 1300 1100" />
<g data-orbit-body="" data-path="home-school-vertical" data-orbit-position=".37" data-orbit-drift=".03">
<circle className="planet-halo" r="26" />
<circle className="planet" r="17" />
<path fill="white" transform="translate(37 -28)" d="M 3 -8 A 9 9 0 1 0 9 5 A 9 9 0 0 1 3 -8" />
</g>
<path fill="#170c43" d="M -100 1020 C 280 680 820 670 1550 860 L 1550 1200 L -100 1200 Z" />
<path id="home-school-horizontal" className="hero-orbit-line" d="M -100 1020 C 280 680 820 670 1550 860" />
<g data-orbit-body="" data-path="home-school-horizontal" data-orbit-position=".69" data-orbit-drift=".025">
<circle className="planet-halo" r="26" />
<circle className="planet" r="17" />
</g>
</svg>
</div>
</div>
</section>
<section className="scroll-stop" id="partnere" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<h2>{"Støtt neste"}<br />{"elevprosjekt."}</h2>
<p className="lead">{"Vi søker økonomiske støttepartnere. Bidrag kan gå til materialer, utstyr, læreropplæring og oppfølging av elevprosjekter. Vi avtaler sammen hva støtten skal brukes til."}</p>
<p className="home-partner-note">{"Dere kan også bidra med fagkunnskap, materialer eller tilgang til verksted og utstyr."}</p>
<div className="home-actions">
<a className="home-primary-link" href="#contact-panel" data-contact-open="" data-contact-subject="Partnerskap og støtte">{"Ta kontakt om støtte "}<span aria-hidden="true">{"↗"}</span>
</a>
<a className="text-link" href="/partnere">{"Slik kan dere bidra "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
<div className="orbit-art section-orbit-fields" aria-hidden="true">
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
<path fill="#211058" d="M 1210 -150 C 960 100 950 550 1300 1100 L 1600 1100 L 1600 -150 Z" />
<path id="home-partner-vertical" className="hero-orbit-line" d="M 1210 -150 C 960 100 950 550 1300 1100" />
<g data-orbit-body="" data-path="home-partner-vertical" data-orbit-position=".37" data-orbit-drift=".03">
<circle className="planet-halo" r="26" />
<circle className="planet" r="17" />
<path fill="white" transform="translate(37 -28)" d="M 3 -8 A 9 9 0 1 0 9 5 A 9 9 0 0 1 3 -8" />
</g>
</svg>
</div>
</div>
<footer className="home-footer">
<div className="home-footer-brand">NASA HUNCH Norge<p className="footer-identity">Organisasjonsnummer {site.organisationNumber}<br/>{addressLine}</p>
</div>
<SubmissionForm kind="newsletter" className="home-newsletter">
<label htmlFor="newsletter-home">{"Følg elevprosjektene"}</label>
<p className="home-newsletter-copy">{"Nyheter om prosjekter og muligheter for skoler."}</p>
<div className="newsletter-entry">
<input id="newsletter-home" name="email" type="email" autoComplete="email" placeholder="Epostadresse" maxLength={254} required />
<button type="submit">{"Meld meg på "}<span aria-hidden="true">{"↗"}</span>
</button>
</div>
<label className="newsletter-consent">
<input type="checkbox" name="consent" required />
<span>{"Jeg samtykker til å motta nyhetsbrev og kan melde meg av når som helst. "}<a href="/personvern">{"Personvern"}</a>{"."}</span>
</label>
<label className="form-honeypot" aria-hidden="true">{"La dette feltet stå tomt"}<input name="website" tabIndex={-1} autoComplete="off" />
</label>
</SubmissionForm>
<div className="home-footer-links">
<a href="#contact-panel" data-contact-open="">{"Kontakt oss"}</a>
<a href="/personvern">{"Personvern"}</a>
</div>
</footer>
</section>
</div>
</main>
</>; }
