import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"For skoler"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#spor">{"Finn ditt fag"}</a>
<a href="#ansvar">{"Før oppstart"}</a>
<a href="#interesse">{"Kontakt"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="school-masthead">
<div className="shell school-masthead-grid">
<div>
<p className="eyebrow">{"For lærere og skoleledere"}</p>
<h1>{"Start med faget."}<br />{"Finn et oppdrag."}</h1>
<p className="lead">{"HUNCH kan passe i både verkstedet, kjøkkenet og datarommet. Se konkrete eksempler og vurder dem opp mot det elevene skal lære."}</p>
<a className="text-link" href="#spor">{"Utforsk fagcasene "}<span aria-hidden="true">{"↓"}</span>
</a>
</div>
<div className="orbit-art hero-orbit hero-orbit-school" aria-hidden="true">
<svg viewBox="0 0 600 600" preserveAspectRatio="xMinYMid slice">
<defs>
<mask id="school-field-moon">
<circle r="8" fill="white" />
<circle cx="4" cy="-4" r="7" fill="black" />
</mask>
</defs>
<path className="hero-orbit-fill" d="M 300 -100 C -30 80 -30 520 300 700 L 700 700 L 700 -100 Z" />
<path id="school-field-path" className="hero-orbit-line" d="M 300 -100 C -30 80 -30 520 300 700" />
<g data-orbit-body="" data-path="school-field-path" transform="translate(52.5 300)">
<circle className="planet-halo" r="26" />
<circle className="planet" r="18" />
<g data-moon="" transform="translate(42 -30)">
<circle r="8" fill="white" mask="url(#school-field-moon)" />
</g>
</g>
</svg>
</div>
</div>
</section>
<section className="section paper" id="spor">
<div className="shell">
<div className="section-heading">
<h2>{"Hva kan elevene jobbe med?"}</h2>
<p>{"Fire eksempler fra HUNCH, med forslag til oppgaver, fagkoblinger og elevarbeid. De norske undervisningsforslagene er våre tilpasninger, ikke ferdige oppdrag fra NASA."}</p>
</div>
<div className="subject-cards">
<a className="subject-card subject-produksjon" href="/fagcase#produksjon">
<span className="eyebrow">{"TIF / Industriteknologi"}</span>
<h3>{"Hylser etter tegning fra NASA"}</h3>
<p>{"Måling, toleranser og produksjon, fra øvingsmodell til kontrollert del."}</p>
<span className="card-action">{"Se fagcaset "}<span aria-hidden="true">{"↗"}</span>
</span>
</a>
<a className="subject-card subject-design" href="/fagcase#design">
<span className="eyebrow">{"Teknologi og forskningslære"}</span>
<h3>{"Et grep som fungerer"}</h3>
<p>{"CAD, prototyper og forsøksdata. Hvordan vet dere at en løsning er bedre?"}</p>
<span className="card-action">{"Se fagcaset "}<span aria-hidden="true">{"↗"}</span>
</span>
</a>
<a className="subject-card subject-matfag" href="/fagcase#matfag">
<span className="eyebrow">{"Restaurant og matfag"}</span>
<h3>{"En oppskrift med tekniske krav"}</h3>
<p>{"Råvarevalg, ernæring og sensorisk vurdering. Romfart trenger også matfag."}</p>
<span className="card-action">{"Se fagcaset "}<span aria-hidden="true">{"↗"}</span>
</span>
</a>
<a className="subject-card subject-it" href="/fagcase#it">
<span className="eyebrow">{"Informasjonsteknologi"}</span>
<h3>{"Finn riktig utstyr med en kode"}</h3>
<p>{"Brukerbehov, databaser og testing, med et konkret verktøy for verkstedet."}</p>
<span className="card-action">{"Se fagcaset "}<span aria-hidden="true">{"↗"}</span>
</span>
</a>
</div>
<a className="text-link" href="/fagcase">{"Se alle fagcasene samlet "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</section>
<div className="orbit-crossing orbit-crossing-school orbit-art" aria-hidden="true">
<svg viewBox="0 0 1600 620" preserveAspectRatio="xMidYMid slice">
<defs>
<mask id="school-crossing-moon">
<circle r="8" fill="white" />
<circle cx="4" cy="-4" r="7" fill="black" />
</mask>
</defs>
<path className="orbit-field" d="M -100 40 C 400 260 1100 260 1700 60 L 1700 620 L -100 620 Z" />
<path id="school-crossing-path" className="orbit-field-edge" d="M -100 40 C 400 260 1100 260 1700 60" />
<path className="orbit-inner-field" d="M -100 730 C 350 410 1150 410 1700 730 L 1700 800 L -100 800 Z" />
<path className="orbit-inner-edge" d="M -100 730 C 350 410 1150 410 1700 730" />
<g data-orbit-body="" data-transit="" data-path="school-crossing-path" transform="translate(-100 40)">
<circle className="crossing-halo" r="29" />
<circle className="crossing-planet" r="21" />
<g data-moon="" transform="translate(-43 -27)">
<circle r="8" fill="white" mask="url(#school-crossing-moon)" />
</g>
</g>
</svg>
</div>
<section className="section " id="laereplan">
<div className="shell editorial">
<div>
<h2>{"Fra tegning til målerapport."}</h2>
</div>
<div className="prose">
<p>{"I Vg2 industriteknologi inngår blant annet målemetoder, måleutstyr og vurdering av resultater mot toleranser. En del produsert etter tegning kan gi elevene anledning til å arbeide med dette i sammenheng."}</p>
<p>{"Elevene kan dokumentere fremgangsmåten, sammenligne målene med tegningen og forklare avvik. Læreren vurderer kompetansen som vises i arbeidet."}</p>
<a className="text-link" href="https://www.udir.no/lk20/pin02-03/kompetansemaal-og-vurdering/kv343">{"Se læreplanen hos Udir"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<section className="section research-note">
<div className="shell editorial">
<div>
<h2>{"Fra øvingsmodell til levert del."}</h2>
</div>
<div className="prose">
<p>{"En norsk studie publisert i 2026 beskriver elever som laget hylser etter NASAs tegninger. Undervisningen gikk fra forstørrede øvingsmodeller til deler i riktig størrelse."}</p>
<p>{"Intervjuer med elleve elever og tre lærere pekte på motivasjon og fellesskap rundt oppdraget. Studien er liten og kvalitativ; den dokumenterer ikke en generell effekt på læringsresultater."}</p>
<a className="text-link" href="https://link.springer.com/article/10.1007/s44217-026-01443-8">{"Les studien av Garrels og Brevik"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<section className="section paper" id="ansvar">
<div className="shell editorial">
<div>
<h2>{"Dette må være på plass."}</h2>
</div>
<div className="prose">
<ol className="numbered-list" role="list">
<li>
<h3>{"En ansvarlig lærer"}</h3>
<p>{"Avklar elevgruppe, fag og forankring hos skoleledelsen."}</p>
</li>
<li>
<h3>{"Tid og utstyr"}</h3>
<p>{"Sett av arbeidstid og sjekk at oppdraget kan gjennomføres med tilgjengelige verktøy, materialer og nødvendig opplæring."}</p>
</li>
<li>
<h3>{"Et avtalt opplegg"}</h3>
<p>{"Avklar teknisk underlag, veiledning, milepæler, kostnader og hva elevene skal levere."}</p>
</li>
<li>
<h3>{"Vurdering og sikkerhet"}</h3>
<p>{"Planlegg vurderingen og avklar HMS og ansvar før verkstedarbeid eller aktiviteter hos en partner."}</p>
</li>
</ol>
</div>
</div>
</section>
<section className="section " id="skolearet">
<div className="shell editorial">
<div>
<h2>{"Før dere bestemmer dere."}</h2>
</div>
<div className="prose">
<div className="faq">
<details>
<summary>{"Må skolen ha et avansert verksted?"}</summary>
<p>{"Utstyrskravene avhenger av oppdraget. Et prototypeprosjekt og et produksjonsoppdrag kan ha svært ulike behov. Utstyrslisten må avklares før dere velger."}</p>
</details>
<details>
<summary>{"Hvor lang tid tar et prosjekt?"}</summary>
<p>{"Det må avtales for det enkelte oppdraget. Arbeidet kan organiseres rundt innføring, bygging, testing og presentasjon, men omfanget må passe inn i skolens plan."}</p>
</details>
<details>
<summary>{"Blir det elevene lager sendt til rommet?"}</summary>
<p>{"Ikke nødvendigvis. Et prosjekt kan ende i en prototype eller brukes til trening og videre utvikling. Bruk i rommet krever egne vurderinger og godkjenninger."}</p>
</details>
<details>
<summary>{"Hva koster det å delta?"}</summary>
<p>{"Vi oppgir ikke en fast pris her. Materialer, utstyr, veiledning og eventuelle reiser må avklares før skolen forplikter seg."}</p>
</details>
</div>
</div>
</div>
</section>
<section className="newsletter-feature section paper" aria-labelledby="school-newsletter-title">
<div className="shell newsletter-feature-grid">
<div>
<h2 id="school-newsletter-title">{"Nytt fra HUNCH."}</h2>
</div>
<div>
<p>{"Få beskjed når vi deler nytt om oppdrag, elevprosjekter og muligheter for skoler."}</p>
<SubmissionForm kind="newsletter" className="newsletter-form newsletter-inline">
<div className="newsletter-entry">
<label className="visually-hidden" htmlFor="newsletter-schools">{"Epostadresse"}</label>
<input id="newsletter-schools" name="email" type="email" autoComplete="email" placeholder="Epostadresse" maxLength={254} required />
<button type="submit" className="form-submit">{"Meld meg på "}<span aria-hidden="true">{"↗"}</span>
</button>
</div>
<label className="newsletter-consent">
<input type="checkbox" name="consent" required />
<span>{"Jeg samtykker til å motta nyhetsbrev. Jeg kan melde meg av når som helst. "}<a href="/personvern">{"Personvern"}</a>{"."}</span>
</label>
<label className="form-honeypot" aria-hidden="true">{"La dette feltet stå tomt"}<input name="website" tabIndex={-1} autoComplete="off" />
</label>
</SubmissionForm>
</div>
</div>
</section>
<section className="contact-band" id="interesse">
<div className="shell contact-grid">
<div>
<h2>{"Vil dere se nærmere på dette?"}</h2>
</div>
<div>
<p>{"Send oss skolens navn, aktuelle fag og en kort beskrivelse av utstyret dere har. Det holder som utgangspunkt for en samtale."}</p>
<a className="text-link" href="#contact-panel" data-contact-open="" data-contact-subject="Skole og elevprosjekt">{"kontakt@nasahunch.no"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
</main>
</>; }
