import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Partnere"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#bidrag">{"Bidra"}</a>
<a href="#slik-starter-det">{"Samarbeidet"}</a>
<a href="#kontakt">{"Kontakt"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="partner-invitation">
<div className="shell">
<p className="eyebrow">{"Partnere / Bedrifter og fagmiljøer"}</p>
<div className="partner-invitation-grid">
<div>
<h1>{"Gi elevene"}<br />{"muligheter."}</h1>
<p className="lead">{"Vi søker partnere som vil støtte NASA HUNCH Norge økonomisk og bidra til at flere elever får jobbe med romfart. Fagkunnskap, materialer og tilgang til utstyr er også verdifulle bidrag."}</p>
<a className="text-link" href="#kontakt">{"Bli partner "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
<div className="orbit-art hero-orbit hero-orbit-partner" aria-hidden="true">
<svg viewBox="0 0 600 600" preserveAspectRatio="xMinYMid slice">
<defs>
<mask id="partner-field-moon">
<circle r="8" fill="white" />
<circle cx="4" cy="-4" r="7" fill="black" />
</mask>
</defs>
<path className="hero-orbit-fill" d="M 300 -100 C -30 80 -30 520 300 700 L 700 700 L 700 -100 Z" />
<path id="partner-field-path" className="hero-orbit-line" d="M 300 -100 C -30 80 -30 520 300 700" />
<g data-orbit-body="" data-path="partner-field-path" transform="translate(52.5 300)">
<circle className="planet-halo" r="26" />
<circle className="planet" r="18" />
<g data-moon="" transform="translate(42 -30)">
<circle r="8" fill="white" mask="url(#partner-field-moon)" />
</g>
</g>
</svg>
</div>
</div>
</div>
</section>
<section className="section paper" id="bidrag">
<div className="shell editorial">
<div>
<h2>{"Flere måter å støtte på."}</h2>
</div>
<div className="prose">
<ol className="numbered-list" role="list">
<li>
<h3>{"Økonomisk støtte"}</h3>
<p>{"Bidra til arbeidet med NASA HUNCH i Norge, eller støtt en konkret aktivitet. Midlene kan gå til materialer, utstyr, læreropplæring og oppfølging av elevprosjekter. Vi avtaler sammen hva støtten skal brukes til."}</p>
</li>
<li>
<h3>{"Faglig veiledning"}</h3>
<p>{"Diskuter et design med elevene, se over en produksjonsplan eller hjelp dem å forstå et testresultat."}</p>
</li>
<li>
<h3>{"Verksted og måleutstyr"}</h3>
<p>{"Gi innblikk i en arbeidsmetode eller tilgang til utstyr skolen mangler, med avtalt opplæring og oppfølging."}</p>
</li>
<li>
<h3>{"Materialer og ressurser"}</h3>
<p>{"Materialer, komponenter eller støtte til en bestemt aktivitet kan gjøre et planlagt prosjekt gjennomførbart."}</p>
</li>
<li>
<h3>{"Et samarbeid over tid"}</h3>
<p>{"Utforsk muligheten for å støtte læreropplæring, flere elevgrupper eller et lokalt skolesamarbeid."}</p>
</li>
</ol>
</div>
</div>
</section>
<section className="section " id="slik-starter-det">
<div className="shell editorial">
<div>
<h2>{"Et samarbeid med tydelige rammer."}</h2>
</div>
<div className="prose">
<p>{"For økonomiske bidrag avtaler vi beløp, formål og varighet, og hvordan dere får innblikk i hva støtten har bidratt til. Det kan være et enkeltbidrag eller et samarbeid over tid."}</p>
<p>{"Ved praktiske og faglige bidrag avklarer vi oppgaver, tidsbruk og oppfølging med skolen og partneren. Skolen har ansvar for undervisning og vurdering. Bruk av utstyr, sikkerhet og ansvar må avklares før aktiviteten starter."}</p>
<p>{"Ta gjerne kontakt før dere har bestemt omfanget. Vi kan finne en form som passer deres budsjett, kapasitet og engasjement."}</p>
</div>
</div>
</section>
<section className="section paper">
<div className="shell editorial">
<div>
<h2>{"Flere fag i samme prosjekt."}</h2>
</div>
<div className="prose">
<p>{"Det amerikanske kamerafestet Ball Clamp Monopod kombinerte elevbidrag innen design, 3D print og maskinering. Les om oppgaven og resultatet på ISS."}</p>
<a className="text-link" href="/prosjekt">{"Se Ball Clamp Monopod"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<section className="contact-band" id="kontakt">
<div className="shell contact-grid">
<div>
<h2>{"Vil dere støtte arbeidet?"}</h2>
</div>
<div>
<p>{"Fortell hvem dere er, og om dere ønsker å bidra økonomisk, faglig eller med utstyr. Har dere et budsjett eller en aktivitet i tankene, tar vi gjerne en samtale om mulighetene."}</p>
<a className="text-link" href="#contact-panel" data-contact-open="" data-contact-subject="Partnerskap og støtte">{"kontakt@nasahunch.no"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
</main>
</>; }
