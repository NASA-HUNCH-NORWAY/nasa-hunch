import { ContactLinks } from "@/app/components/orbital/ContactLinks";

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
<a href="#tilbudet">{"Dette får skolen"}</a>
<a href="#ansvar">{"Før oppstart"}</a>
<a href="#interesse">{"Kontakt"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="school-masthead">
<div className="shell school-masthead-grid">
<div>
<h1>{"Start med faget."}<br />{"Finn et oppdrag."}</h1>
<p className="lead">{"For lærere og skoleledere i videregående skole. I Norge kjøres produksjon etter tegning og design og prototyping. Fagcasene viser hvordan flere fag kan bruke det samme arbeidet. Det er gratis for skolen å delta."}</p>
<a className="text-link" href="#spor">{"Utforsk fagcasene "}<span aria-hidden="true">{"↓"}</span>
</a>
</div>
<div className="orbit-art hero-orbit hero-orbit-school subject-orbit" aria-hidden="true">
<svg viewBox="0 0 600 600" preserveAspectRatio="xMinYMid slice">
<path className="hero-orbit-fill" d="M 300 -100 C -30 80 -30 520 300 700 L 700 700 L 700 -100 Z" />
<path id="school-field-path" className="hero-orbit-line" d="M 300 -100 C -30 80 -30 520 300 700" />
<g data-orbit-body="" data-path="school-field-path" data-orbit-position=".5" data-orbit-drift=".02">
<circle className="planet-halo" r="26" />
<circle className="planet" r="18" />
</g>
</svg>
<ul className="subject-orbit-labels">
<li>{"Industriteknologi"}</li>
<li>{"Teknologi og forskningslære"}</li>
<li>{"Restaurant og matfag"}</li>
<li>{"Informasjonsteknologi"}</li>
</ul>
</div>
</div>
</section>
<section className="section paper" id="spor">
<div className="shell">
<div className="section-heading">
<h2>{"Hva kan elevene jobbe med?"}</h2>
<p>{"Industriteknologi og teknologi og forskningslære passer de to sporene som kjøres i Norge nå. Matfag og IT er ideer for hvordan flere fag kan bruke HUNCH, bygget på eksempler fra USA. Undervisningsforslagene er våre tilpasninger, ikke oppdrag fra NASA."}</p>
</div>
<div className="subject-cards">
<a className="subject-card subject-produksjon" href="/fagcase#produksjon">
<span className="subject-label">{"TIF / Industriteknologi"}</span>
<h3>{"Hylser etter tegning fra NASA"}</h3>
<p>{"Måling, toleranser og produksjon, fra øvingsmodell til kontrollert del."}</p>
<span className="card-action">{"Se fagcaset "}<span aria-hidden="true">{"↗"}</span>
</span>
</a>
<a className="subject-card subject-design" href="/fagcase#design">
<span className="subject-label">{"Teknologi og forskningslære"}</span>
<h3>{"Et grep som fungerer"}</h3>
<p>{"CAD, prototyper og forsøksdata. Hvordan vet dere at en løsning er bedre?"}</p>
<span className="card-action">{"Se fagcaset "}<span aria-hidden="true">{"↗"}</span>
</span>
</a>
<a className="subject-card subject-matfag" href="/fagcase#matfag">
<span className="subject-label">{"Restaurant og matfag"}</span>
<h3>{"En oppskrift med tekniske krav"}</h3>
<p>{"Råvarevalg, ernæring og sensorisk vurdering. Romfart trenger også matfag."}</p>
<span className="card-action">{"Se fagcaset "}<span aria-hidden="true">{"↗"}</span>
</span>
</a>
<a className="subject-card subject-it" href="/fagcase#it">
<span className="subject-label">{"Informasjonsteknologi"}</span>
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
<p>{"Pilotprosjektet ved Eid vidaregåande skule er beskrevet i en norsk studie publisert i 2026. Elevene laget hylser etter NASAs tegninger, og undervisningen gikk fra forstørrede øvingsmodeller til deler i riktig størrelse."}</p>
<p>{"Intervjuer med elleve elever og tre lærere pekte på motivasjon og fellesskap rundt oppdraget. Studien er liten og kvalitativ; den dokumenterer ikke en generell effekt på læringsresultater."}</p>
<a className="text-link" href="https://link.springer.com/article/10.1007/s44217-026-01443-8">{"Les studien av Garrels og Brevik"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<section className="section school-offer" id="tilbudet">
<div className="shell editorial">
<div>
<h2>{"Dette får skolen."}</h2>
<p className="lead">{"Deltakelse er gratis. Skolen stiller med lærertid, elever og et sted å jobbe."}</p>
</div>
<div className="prose">
<ul className="offer-list" role="list">
<li><h3>{"Et ekte oppdrag"}</h3><p>{"Tegninger, krav og oppgavetekster fra NASA HUNCH, tilpasset faget og elevgruppen."}</p></li>
<li><h3>{"Et skoleår med struktur"}</h3><p>{"Oppstart om høsten, designgjennomganger i november og februar, og overlevering av ferdige produkter om våren."}</p></li>
<li><h3>{"Tilbakemelding fra fagfolk"}</h3><p>{"Elevene presenterer arbeidet og får respons fra ingeniører og mentorer i NASA HUNCH."}</p></li>
<li><h3>{"Oppfølging av lærerne"}</h3><p>{"Vi koordinerer med NASA HUNCH i USA og følger opp lærerne gjennom hele året."}</p></li>
</ul>
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
<summary>{"Hva koster det å delta?"}</summary>
<p>{"Det er gratis for skolen å delta. Krever et oppdrag spesielle materialer, utstyr eller reiser, avklarer vi hvordan det dekkes før skolen forplikter seg."}</p>
</details>
<details>
<summary>{"Må skolen ha et avansert verksted?"}</summary>
<p>{"Utstyrskravene avhenger av oppdraget. Et prototypeprosjekt og et produksjonsoppdrag kan ha svært ulike behov. Utstyrslisten må avklares før dere velger."}</p>
</details>
<details>
<summary>{"Hvor lang tid tar et prosjekt?"}</summary>
<p>{"Et oppdrag følger skoleåret, fra oppstart om høsten til overlevering om våren. Hvor mye undervisningstid det tar, avhenger av oppdraget og faget. Det avtaler vi med skolen før oppstart."}</p>
</details>
<details>
<summary>{"Blir det elevene lager sendt til rommet?"}</summary>
<p>{"Ikke nødvendigvis. Et prosjekt kan ende i en prototype eller brukes til trening og videre utvikling. Bruk i rommet krever egne vurderinger og godkjenninger."}</p>
</details>
</div>
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
<ContactLinks subject="Skole og elevprosjekt" />
</div>
</div>
</section>
</main>
</>; }
