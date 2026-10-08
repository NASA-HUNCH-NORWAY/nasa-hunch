import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<a href="/skoler">{"For skoler"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Fagcase"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="/skoler">{"For skoler"}</a>
<a href="#caseoversikt">{"Alle fagcase"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="casebook-intro shell">
<div className="orbit-art subpage-orbit composed-orbit" aria-hidden="true">
<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
<path fill="#211058" d="M 480 -100 C 180 60 150 420 460 720 L 720 720 L 720 -100 Z" />
<path id="case-intro-field" className="hero-orbit-line" d="M 480 -100 C 180 60 150 420 460 720" />
<g data-orbit-body="" data-path="case-intro-field" data-orbit-position=".4" data-orbit-drift=".035">
<circle className="planet-halo" r="24" />
<circle className="planet" r="16" />
</g>
<path fill="#170c43" d="M -100 700 C 130 410 430 450 750 600 L 750 800 L -100 800 Z" />
<path id="case-intro-lower" className="hero-orbit-line" d="M -100 700 C 130 410 430 450 750 600" />
<g data-orbit-body="" data-path="case-intro-lower" data-orbit-position=".65" data-orbit-drift=".025">
<circle className="planet-halo" r="24" />
<circle className="planet" r="16" />
</g>
</svg>
</div>
<p className="eyebrow">{"For skoler / Fagcase"}</p>
<h1>{"Fra romoppdrag"}<br />{"til faglig arbeid."}</h1>
<div className="casebook-lead">
<p className="lead">{"Hva kan elevene gjøre, og hva kan læreren vurdere? Her er fire konkrete innganger."}</p>
<p className="casebook-note">{"Hvert case skiller mellom et dokumentert prosjekt i HUNCH og et forslag til norsk undervisning. Oppgavene er ikke godkjente NASA leveranser eller bekreftede norske tilbud."}</p>
</div>
</section>
<nav className="casebook-index shell" id="caseoversikt" aria-label="Fagcase">
<a href="#produksjon">
<strong>{"TIF / Industriteknologi"}</strong>
<span aria-hidden="true">{"↓"}</span>
</a>
<a href="#design">
<strong>{"Teknologi og forskningslære"}</strong>
<span aria-hidden="true">{"↓"}</span>
</a>
<a href="#matfag">
<strong>{"Restaurant og matfag"}</strong>
<span aria-hidden="true">{"↓"}</span>
</a>
<a href="#it">
<strong>{"Informasjonsteknologi"}</strong>
<span aria-hidden="true">{"↓"}</span>
</a>
</nav>
<div className="casebook shell">
<article className="subject-study subject-produksjon" id="produksjon">
<header className="study-header">
<div>
<p className="eyebrow">{"TIF / Industriteknologi"}</p>
<h2>{"Hylser etter tegning fra NASA"}</h2>
<p className="study-origin">{"Norge, dokumentert i studie fra 2026"}</p>
</div>
</header>
<div className="study-grid">
<aside className="study-evidence">
<p className="eyebrow">{"Det dokumenterte prosjektet"}</p>
<h3>{"Deler levert til NASA"}</h3>
<p>{"En norsk skole fikk tegninger, spesifikasjoner og stål fra NASA for å produsere hylser til en transportbeholder. Lærerne la opp et løp med forstørrede øvingsmodeller før elevene laget deler i riktig størrelse. Studien beskriver at hylsene ble overlevert til NASA, ikke at de allerede hadde vært i rommet."}</p>
<a href="https://link.springer.com/article/10.1007/s44217-026-01443-8">{"Garrels og Brevik: norsk HUNCH studie ↗"}</a>
</aside>
<div className="study-teaching">
<span className="proposal-label">{"Forslag til norsk undervisning"}</span>
<h3>{"En mulig oppgave"}</h3>
<p>{"La elevene produsere en enkel hylse fra en arbeidstegning, først som øvingsmodell. De planlegger rekkefølgen på operasjonene, måler delen og forklarer eventuelle avvik. Bruk bare et godkjent teknisk underlag hvis arbeidet skal leveres til en ekstern mottaker."}</p>
<h3>{"Kobling til faget"}</h3>
<p>{"Vg2 industriteknologi: valg av målemetode og måleutstyr, vurdering mot toleranser og dokumentasjon av eget arbeid."}</p>
<a className="curriculum-link" href="https://www.udir.no/lk20/pin02-03/kompetansemaal-og-vurdering/kv343">{"Læreplan: Vg2 industriteknologi, teknologi ↗"}</a>
<div className="study-delivery">
<h3>{"Elevene kan levere"}</h3>
<ul>
<li>{"Arbeidsplan og risikovurdering"}</li>
<li>{"Øvingsdel og målerapport"}</li>
<li>{"Avvikslogg med forslag til forbedring"}</li>
</ul>
</div>
<h3>{"Hva kan vurderes?"}</h3>
<p>{"Læreren kan se etter begrunnede metodevalg, riktig bruk av måleutstyr og om eleven klarer å vurdere eget resultat."}</p>
<p className="study-practical">
<strong>{"Utstyr og rammer"}</strong>
<br />{"Verksted, relevante maskiner og måleutstyr. Arbeidet må tilpasses opplæring og skolens HMS rutiner."}</p>
</div>
</div>
<a className="back-to-cases" href="#caseoversikt">{"↑ Til alle fagcase"}</a>
</article>
<article className="subject-study subject-design" id="design">
<header className="study-header">
<div>
<p className="eyebrow">{"Teknologi og forskningslære"}</p>
<h2>{"Et grep som fungerer"}</h2>
<p className="study-origin">{"USA, Ball Clamp Monopod, 2023"}</p>
</div>
</header>
<div className="study-grid">
<aside className="study-evidence">
<p className="eyebrow">{"Det dokumenterte prosjektet"}</p>
<h3>{"Kamerafeste testet på ISS"}</h3>
<p>{"I Ball Clamp Monopod prosjektet arbeidet elever med tommelskruen i et kamerafeste. De prøvde ut former med CAD og 3D print før løsningen gikk videre. Kamerafestet ble testet på ISS i 2023."}</p>
<a href="https://www.nasa.gov/podcasts/houston-we-have-a-podcast/the-student-built-camera-mount/">{"NASA: The Student Built Camera Mount ↗"}</a>
<p>
<a href="/prosjekt">{"Les hele prosjekthistorien ↗"}</a>
</p>
</aside>
<div className="study-teaching">
<span className="proposal-label">{"Forslag til norsk undervisning"}</span>
<h3>{"En mulig oppgave"}</h3>
<p>{"Utvikle et grep til en ufarlig modellklemme. Lag to eller tre varianter og bestem på forhånd hvordan dere skal sammenligne dem. Mål for eksempel tiden det tar å stramme klemmen, og registrer brukerens opplevelse av grepet. Hold belastning og testoppsett likt."}</p>
<h3>{"Kobling til faget"}</h3>
<p>{"Teknologi og forskningslære 1: utvikling og testing ut fra krav og arbeidstegninger, kvantitative forsøk og vurdering av usikkerhet."}</p>
<a className="curriculum-link" href="https://www.udir.no/lk20/tnf01-03/kompetansemaal-og-vurdering/kv975">{"Læreplan: Teknologi og forskningslære 1 ↗"}</a>
<div className="study-delivery">
<h3>{"Elevene kan levere"}</h3>
<ul>
<li>{"En enkel kravspesifikasjon og CAD modeller"}</li>
<li>{"Prototyper og en begrunnet testmetode"}</li>
<li>{"Resultater, usikkerhet og anbefalt løsning"}</li>
</ul>
</div>
<h3>{"Hva kan vurderes?"}</h3>
<p>{"Eleven kan vise om testen faktisk undersøker kravet, hvordan dataene brukes og hvorfor én løsning velges fremfor en annen."}</p>
<p className="study-practical">
<strong>{"Utstyr og rammer"}</strong>
<br />{"CAD verktøy, tilgang til prototyping og en enkel testbenk. En skolemodell er ikke romgodkjent maskinvare."}</p>
</div>
</div>
<a className="back-to-cases" href="#caseoversikt">{"↑ Til alle fagcase"}</a>
</article>
<article className="subject-study subject-matfag" id="matfag">
<header className="study-header">
<div>
<p className="eyebrow">{"Restaurant og matfag"}</p>
<h2>{"En oppskrift med tekniske krav"}</h2>
<p className="study-origin">{"USA, Hewitt Trussville High School, 2020"}</p>
</div>
</header>
<div className="study-grid">
<aside className="study-evidence">
<p className="eyebrow">{"Det dokumenterte prosjektet"}</p>
<h3>{"Vinner av HUNCHs matkonkurranse"}</h3>
<p>{"Elever ved Hewitt Trussville High School vant HUNCHs matkonkurranse i 2020 med marokkansk kyllingtagine. Retten måtte møte ernæringskrav og egne krav til videre behandling. Både maten og dokumentasjonen inngikk i vurderingen. NASAs artikkel omtaler en planlagt vei videre, ikke en bekreftet servering på ISS."}</p>
<a href="https://www.nasa.gov/centers-and-facilities/marshall/alabama-high-school-students-create-a-meal-nasa-will-send-to-astronauts-in-space/">{"NASA: Hewitt Trussvilles vinnermåltid ↗"}</a>
</aside>
<div className="study-teaching">
<span className="proposal-label">{"Forslag til norsk undervisning"}</span>
<h3>{"En mulig oppgave"}</h3>
<p>{"Utvikle et måltid for en definert brukergruppe og et sett krav gitt av læreren. Prøv ut råvarer og tilberedningsmetoder, beregn næringsinnhold og sammenlign smak, konsistens og kvalitet. Dokumenter endringene fra første til siste oppskrift."}</p>
<h3>{"Kobling til faget"}</h3>
<p>{"Vg1 restaurant og matfag: råvarers egenskaper, planlegging med oppskrifter, mat for ulike brukergrupper og kvalitet i produksjonen."}</p>
<a className="curriculum-link" href="https://www.udir.no/lk20/rmf01-03/kompetansemaal-og-vurdering/kv237">{"Læreplan: Vg1 restaurant og matfag, råvare, produksjon og kvalitet ↗"}</a>
<div className="study-delivery">
<h3>{"Elevene kan levere"}</h3>
<ul>
<li>{"Oppskrift, råvarevalg og næringsberegning"}</li>
<li>{"Produksjonsplan og sensorisk vurdering"}</li>
<li>{"Kort fagrapport om endringene"}</li>
</ul>
</div>
<h3>{"Hva kan vurderes?"}</h3>
<p>{"Læreren kan vurdere sammenhengen mellom brukerbehov, råvarevalg, arbeidsmetode og resultat, ikke bare hvordan retten smaker."}</p>
<p className="study-practical">
<strong>{"Utstyr og rammer"}</strong>
<br />{"Skolekjøkken og skolens rutiner for hygiene og mattrygghet. Dette forslaget omfatter ikke rommatproduksjon eller utprøving av langtidslagring."}</p>
</div>
</div>
<a className="back-to-cases" href="#caseoversikt">{"↑ Til alle fagcase"}</a>
</article>
<article className="subject-study subject-it" id="it">
<header className="study-header">
<div>
<p className="eyebrow">{"Informasjonsteknologi"}</p>
<h2>{"Finn riktig utstyr med en kode"}</h2>
<p className="study-origin">{"USA, Poquoson High School, 2019"}</p>
</div>
</header>
<div className="study-grid">
<aside className="study-evidence">
<p className="eyebrow">{"Det dokumenterte prosjektet"}</p>
<h3>{"Konsept vurdert i designgjennomgang"}</h3>
<p>{"NASA omtalte Poquoson High Schools prosjekt «Augmented Reality Object Recognition: QR Code» etter en designgjennomgang i 2019. Teamet ble vurdert som en kandidat til den avsluttende gjennomgangen. Kilden dokumenterer et elevkonsept, ikke et system satt i drift på ISS."}</p>
<a href="https://www.nasa.gov/centers-and-facilities/langley/high-school-students-look-to-improve-astronauts-palates-workspaces-via-hunch-program/">{"NASA Langley: prosjekt i HUNCHer i 2019 ↗"}</a>
</aside>
<div className="study-teaching">
<span className="proposal-label">{"Forslag til norsk undervisning"}</span>
<h3>{"En mulig oppgave"}</h3>
<p>{"Lag en liten utstyrsoversikt for skolens verksted. En QR kode på en gjenstand åpner riktig utstyrsside med plassering og bruksinformasjon. Start uten AR. Test hva som skjer når koden er ukjent, en gjenstand er flyttet eller informasjonen mangler."}</p>
<h3>{"Kobling til faget"}</h3>
<p>{"Vg2 informasjonsteknologi, utvikling: behovskartlegging, funksjonelle krav, brukergrensesnitt, databaser, testing og teknisk dokumentasjon."}</p>
<a className="curriculum-link" href="https://www.udir.no/lk20/itk02-01/kompetansemaal-og-vurdering/kv374">{"Læreplan: Vg2 informasjonsteknologi, utvikling ↗"}</a>
<div className="study-delivery">
<h3>{"Elevene kan levere"}</h3>
<ul>
<li>{"Brukerbehov og funksjonelle krav"}</li>
<li>{"En prototype med et lite eksempelregister"}</li>
<li>{"Testplan, versjonshistorikk og dokumentasjon"}</li>
</ul>
</div>
<h3>{"Hva kan vurderes?"}</h3>
<p>{"Elevene kan vise hvordan løsningen dekker behovet, håndterer feil og er testet. Bruk et eksempelregister uten personopplysninger."}</p>
<p className="study-practical">
<strong>{"Utstyr og rammer"}</strong>
<br />{"Datamaskiner, kamera eller mobil og utviklingsverktøy. Oppgaven kan gjennomføres lokalt uten tilgang til NASA systemer."}</p>
</div>
</div>
<a className="back-to-cases" href="#caseoversikt">{"↑ Til alle fagcase"}</a>
</article>
</div>
<section className="cross-subject">
<div className="shell editorial">
<div>
<h2>{"Flere fag kan bruke det samme arbeidet."}</h2>
</div>
<div className="prose">
<p>{"En målerapport kan også gi materiale til beregninger og grafisk fremstilling. En teknisk presentasjon kan gi en konkret oppgave med skriftlig og muntlig formidling på engelsk."}</p>
<p>{"Dette er forslag til samarbeid mellom lærere, ikke en egen dokumentert case eller en automatisk læreplankobling. Avtal hva hvert fag skal bidra med og vurdere."}</p>
<a className="text-link" href="/skoler#interesse">{"Diskuter et opplegg for skolen "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
</main>
</>; }
