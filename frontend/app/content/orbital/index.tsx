import { Backdrop } from "@/app/components/orbital/Backdrop";
import { MissionPath } from "@/app/components/orbital/MissionPath";
import { Arrow } from "@/app/components/orbital/Arrow";
import { site, addressLine } from "@/app/lib/site";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";
import { SocialLinks } from "@/app/components/orbital/SocialLinks";

export default function Content() { return <>
<nav className="stop-nav" aria-label="Stopp på forsiden">
<a href="#oppdrag" data-stop-link="" aria-label="Fra verkstedet til Månen"><span aria-hidden="true" /><b>{"Fra verkstedet til Månen"}</b></a>
<a href="#skolearet" data-stop-link="" aria-label="Et skoleår er et oppdrag"><span aria-hidden="true" /><b>{"Et skoleår er et oppdrag"}</b></a>
<a href="#norge" data-stop-link="" aria-label="Laget i Norge"><span aria-hidden="true" /><b>{"Laget i Norge"}</b></a>
<a href="#program" data-stop-link="" aria-label="Lær gjennom å lage"><span aria-hidden="true" /><b>{"Lær gjennom å lage"}</b></a>
<a href="#skoler" data-stop-link="" aria-label="For skoler og partnere"><span aria-hidden="true" /><b>{"For skoler og partnere"}</b></a>
</nav>
<main id="main" tabIndex={-1}>
<div id="scroll-story">
<section className="ar-hero" id="oppdrag" data-stop="">
<Backdrop image="earthset" position="50% 72%" priority alt="Jorda går ned bak Månens bakside, fotografert fra Orion under Artemis II" />
<div className="shell ar-hero-copy">
<h1>{"Fra verkstedet"}<br />{"til Månen."}</h1>
<div className="ar-hero-row">
<p className="lead">{"I NASA HUNCH bygger elever i videregående skole utstyr etter behov hos NASA, og oppdragene peker nå mot Artemis og Månen. Norge er det første landet utenfor USA med programmet, og det er gratis for skolen."}</p>
<div className="home-actions">
<a className="wk-button" href="/skoler">{"For skoler "}<Arrow /></a>
<a className="text-link" href="/partnere">{"Bli partner "}<Arrow /></a>
</div>
</div>
</div>
</section>
<section className="ar-mission" id="skolearet" data-stop="" aria-labelledby="oppdraget">
<MissionPath />
</section>
<section className="ar-surface" id="norge" data-stop="" aria-labelledby="norge-tittel">
<Backdrop image="lunar-surface" position="50% 40%" />
<div className="shell">
<h2 id="norge-tittel">{"Laget på Eid."}<br />{"Levert til NASA."}</h2>
<p className="lead">{"Elever på teknologi- og industrifag ved Eid vidaregåande skule i Nordfjordeid har i to år produsert deler etter tegninger og spesifikasjoner fra NASA. Skoleåret 2026/27 er rundt 100 elever med."}</p>
<a className="text-link" href="/fagcase#produksjon">{"Se hvordan elevene jobbet "}<Arrow /></a>
<dl className="ar-readout">
<div><dt>{"Elever ved Eid i 2026/27"}</dt><dd>{"~100"}</dd></div>
<div><dt>{"År med produksjon for NASA"}</dt><dd>{"2"}</dd></div>
<div><dt>{"Gjennomsnittlig avstand til Månen"}</dt><dd>{"384 400 km"}</dd></div>
</dl>
</div>
</section>
<section className="paper wk-plate" id="program" data-stop="">
<div className="shell">
<div className="wk-plate-head">
<h2>{"Lær gjennom"}<br />{"å lage."}</h2>
<div>
<p className="lead">{"Arbeid etter en ferdig tegning, eller utvikle en ny løsning. Testene og dokumentasjonen er en del av oppgaven."}</p>
<a className="text-link" href="/programs">{"Slik foregår arbeidet "}<Arrow /></a>
</div>
</div>
<ol className="wk-ops" role="list">
<li><span className="wk-op">{"Op 10"}</span><h3>{"Forstå"}</h3><p>{"Sett dere inn i behovet og kravene."}</p></li>
<li><span className="wk-op">{"Op 20"}</span><h3>{"Bygg"}</h3><p>{"Lag en del eller en prototype."}</p></li>
<li><span className="wk-op">{"Op 30"}</span><h3>{"Test"}</h3><p>{"Mål resultatet og dokumenter arbeidet."}</p></li>
</ol>
</div>
</section>
<section className="ar-launch" aria-labelledby="krav">
<Backdrop image="launch" variant="left" position="50% 40%" alt="Artemis II skytes opp fra Kennedy Space Center" />
<div className="ar-launch-copy">
<h2 id="krav">{"Ekte oppdrag."}<br />{"Ekte krav."}</h2>
<p>{"NASA trenger utstyr for å bo og arbeide på Månen. I HUNCH får elevene de samme kravene og tegningene som fagfolkene, og det de lager blir målt, testet og levert."}</p>
<a className="text-link" href="/prosjekt">{"Et eksempel fra USA "}<Arrow /></a>
</div>
</section>
<section className="ar-paths" id="skoler" data-stop="">
<div className="ar-path">
<Backdrop image="orion-pad-moon" position="50% 30%" />
<h2>{"En plass i"}<br />{"undervisningen."}</h2>
<p className="lead">{"For lærere og skoleledere i videregående skole. Bli med i produksjon etter tegning eller design og prototyping, og se hvordan flere fag kan bruke arbeidet. Deltakelse er gratis for skolen."}</p>
<div className="home-actions">
<a className="wk-button" href="/skoler">{"For skoler "}<Arrow /></a>
<a className="text-link" href="/fagcase">{"Se fagcasene "}<Arrow /></a>
</div>
</div>
<div className="ar-path" id="partnere">
<Backdrop image="lunar-limb" position="50% 50%" />
<h2>{"Støtt neste"}<br />{"elevprosjekt."}</h2>
<p className="lead">{"Vi søker økonomiske støttepartnere. Bidrag kan gå til materialer, utstyr, læreropplæring og oppfølging av elevprosjekter. Vi avtaler sammen hva støtten skal brukes til."}</p>
<div className="home-actions">
<a className="wk-button wk-button-line" href="#contact-panel" data-contact-open="" data-contact-subject="Partnerskap og støtte">{"Ta kontakt om støtte "}<Arrow /></a>
<a className="text-link" href="/partnere">{"Slik kan dere bidra "}<Arrow /></a>
</div>
</div>
</section>
<footer className="home-footer">
<div className="home-footer-brand">NASA HUNCH Norge<p className="footer-identity">Organisasjonsnummer {site.organisationNumber}<br/>{addressLine}</p>
<SocialLinks />
</div>
<SubmissionForm kind="newsletter" className="home-newsletter">
<label htmlFor="newsletter-home">{"Følg elevprosjektene"}</label>
<p className="home-newsletter-copy">{"Nyheter om prosjekter og muligheter for skoler."}</p>
<div className="newsletter-entry">
<input id="newsletter-home" name="email" type="email" autoComplete="email" placeholder="E-postadresse" maxLength={254} required />
<button type="submit">{"Meld meg på "}<Arrow />
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
</div>
</main>
</>; }
