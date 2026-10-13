import { site, addressLine } from "@/app/lib/site";
import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";
import { SocialLinks } from "@/app/components/orbital/SocialLinks";

export default function Content() { return <>
<nav className="stop-nav" aria-label="Stopp på forsiden">
<a href="#oppdrag" data-stop-link="" aria-label="Elever bygger for romfart">
<span aria-hidden="true" />
<b>{"Elever bygger for romfart"}</b>
</a>
<a href="#program" data-stop-link="" aria-label="Lær gjennom å lage">
<span aria-hidden="true" />
<b>{"Lær gjennom å lage"}</b>
</a>
<a href="#norge" data-stop-link="" aria-label="Laget i Norge">
<span aria-hidden="true" />
<b>{"Laget i Norge"}</b>
</a>
<a href="#skoler" data-stop-link="" aria-label="For skoler">
<span aria-hidden="true" />
<b>{"For skoler"}</b>
</a>
<a href="#partnere" data-stop-link="" aria-label="Støtt elevprosjektene">
<span aria-hidden="true" />
<b>{"Støtt elevprosjektene"}</b>
</a>
</nav>
<main id="main" tabIndex={-1}>
<div id="scroll-story">
<section className="scroll-stop" id="oppdrag" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<h1>{"Elever bygger"}<br />{"for romfart."}</h1>
<p className="lead">{"I NASA HUNCH bygger og utvikler elever i videregående skole utstyr etter behov hos NASA. Norge er det første landet utenfor USA med programmet, og det er gratis for skolen å delta."}</p>
<div className="home-actions">
<a className="home-primary-link" href="/skoler">{"For skoler "}<span aria-hidden="true">{"↗"}</span>
</a>
<a className="text-link" href="/about">{"Hva er NASA HUNCH? "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
<figure className="home-hero-media">
<div className="hero-photo-frame">
<Image src="/assets/ball-clamp-iss.jpg" width={2200} height={1466} priority sizes="(max-width: 720px) 100vw, (max-width: 1180px) 45vw, 540px" alt="NASA astronaut Stephen Bowen tester et kamerafeste utviklet med bidrag fra amerikanske elever i HUNCH på ISS." />
<svg className="hero-photo-orbit" viewBox="0 0 600 150" aria-hidden="true">
<path className="photo-orbit-field" d="M -40 130 Q 300 -20 640 130 L 640 190 L -40 190 Z" />
<path id="home-photo-path" className="hero-orbit-line" d="M -40 130 Q 300 -20 640 130" />
<g data-orbit-body="" data-path="home-photo-path" data-orbit-position=".61" data-orbit-drift=".025">
<circle className="planet-halo" r="18" />
<circle className="planet" r="11" />
</g>
</svg>
</div>
<figcaption>{"Et kamerafeste bygget av amerikanske HUNCH-elever, testet på ISS i 2023. Foto: NASA"}</figcaption>
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
<section className="scroll-stop" id="norge" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<h2>{"Laget på Eid."}<br />{"Levert til NASA."}</h2>
<p className="lead">{"Elever på teknologi- og industrifag ved Eid vidaregåande skule i Nordfjordeid har i to år produsert deler etter tegninger og spesifikasjoner fra NASA. Skoleåret 2026/27 er rundt 100 elever med."}</p>
<div className="home-actions">
<a className="text-link" href="/fagcase#produksjon">{"Se hvordan elevene jobbet "}<span aria-hidden="true">{"↗"}</span>
</a>
<a className="text-link" href="/prosjekt">{"Et eksempel fra USA "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
<div className="home-year">
<p className="home-year-title">{"Et skoleår i HUNCH"}</p>
<ol className="year-cycle" role="list">
<li data-from="8"><b>{"Høst"}</b><span>{"Oppstart med elever, lærere og NASA HUNCH fra USA"}</span></li>
<li data-from="11"><b>{"November"}</b><span>{"Første designgjennomgang med tilbakemelding"}</span></li>
<li data-from="2"><b>{"Februar"}</b><span>{"Kritisk designgjennomgang før produksjon"}</span></li>
<li data-from="4"><b>{"Vår"}</b><span>{"Ferdige produkter overleveres"}</span></li>
</ol>
</div>
</div>
</section>
<section className="scroll-stop stop-mirrored" id="skoler" data-stop="">
<div className="shell home-grid">
<div className="stop-copy">
<h2>{"En plass i"}<br />{"undervisningen."}</h2>
<p className="lead">{"For lærere og skoleledere i videregående skole. Bli med i produksjon etter tegning eller design og prototyping, og se hvordan flere fag kan bruke arbeidet. Deltakelse er gratis for skolen."}</p>
<div className="home-actions">
<a className="home-primary-link" href="/skoler">{"For skoler "}<span aria-hidden="true">{"↗"}</span>
</a>
<a className="text-link" href="/fagcase">{"Se fagcasene "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
<div className="orbit-art section-orbit-fields" aria-hidden="true">
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMinYMid meet">
<path fill="#211058" d="M 0 30 C 460 160 480 720 0 870 Z" />
<path id="home-school-vertical" className="hero-orbit-line" d="M 0 30 C 460 160 480 720 0 870" />
<g data-orbit-body="" data-path="home-school-vertical" data-orbit-position=".42" data-orbit-drift=".03">
<circle className="planet-halo" r="26" />
<circle className="planet" r="17" />
<path fill="white" transform="translate(-37 -28)" d="M 3 -8 A 9 9 0 1 0 9 5 A 9 9 0 0 1 3 -8" />
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
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMaxYMid meet">
<path fill="#211058" d="M 1440 80 C 1060 190 1040 600 1440 720 Z" />
<path id="home-partner-vertical" className="hero-orbit-line" d="M 1440 80 C 1060 190 1040 600 1440 720" />
<g data-orbit-body="" data-path="home-partner-vertical" data-orbit-position=".58" data-orbit-drift=".03">
<circle className="planet-halo" r="26" />
<circle className="planet" r="17" />
</g>
</svg>
</div>
</div>
<footer className="home-footer">
<div className="home-footer-brand">NASA HUNCH Norge<p className="footer-identity">Organisasjonsnummer {site.organisationNumber}<br/>{addressLine}</p>
<SocialLinks />
</div>
<SubmissionForm kind="newsletter" className="home-newsletter">
<label htmlFor="newsletter-home">{"Følg elevprosjektene"}</label>
<p className="home-newsletter-copy">{"Nyheter om prosjekter og muligheter for skoler."}</p>
<div className="newsletter-entry">
<input id="newsletter-home" name="email" type="email" autoComplete="email" placeholder="E-postadresse" maxLength={254} required />
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
<a href="/contact" data-contact-open="">{"Kontakt oss"}</a>
<a href={`mailto:${site.email}`}>{site.email}</a>
<a href="/personvern">{"Personvern"}</a>
</div>
</footer>
</section>
</div>
</main>
</>; }
