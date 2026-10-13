import { AboutClosing } from "@/app/components/orbital/AboutClosing";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Om HUNCH"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#bakgrunn">{"Bakgrunn"}</a>
<a href="#i-norge">{"I Norge"}</a>
<a href="/team">{"Teamet bak"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="about-masthead">
<div className="page-hero shell about-hero-grid">
<div>
<h1>{"Skole, verksted"}<br />{"og romfart."}</h1>
<p className="lead">{"I HUNCH designer og produserer elever i videregående skole utstyr etter behov hos NASA. Her er bakgrunnen for programmet, og slik drives det i Norge."}</p>
<a className="text-link" href="#bakgrunn">{"Hva er HUNCH? "}<span aria-hidden="true">{"↓"}</span>
</a>
</div>
<div className="orbit-art hero-orbit hero-orbit-about" aria-hidden="true">
<svg viewBox="0 0 600 600" preserveAspectRatio="xMinYMid slice">
<defs>
<mask id="about-field-moon">
<circle r="8" fill="white" />
<circle cx="4" cy="-4" r="7" fill="black" />
</mask>
</defs>
<path className="hero-orbit-fill" d="M 300 -100 C -30 80 -30 520 300 700 L 700 700 L 700 -100 Z" />
<path id="about-field-path" className="hero-orbit-line" d="M 300 -100 C -30 80 -30 520 300 700" />
<g data-orbit-body="" data-path="about-field-path" transform="translate(52.5 300)">
<circle className="planet-halo" r="26" />
<circle className="planet" r="18" />
<g data-moon="" transform="translate(42 -30)">
<circle r="8" fill="white" mask="url(#about-field-moon)" />
</g>
</g>
</svg>
</div>
</div>
</section>
<section className="section paper" id="bakgrunn">
<div className="shell editorial">
<div>
<h2>{"Fra idé til praktisk arbeid."}</h2>
</div>
<div className="prose">
<p>{"HUNCH står for High Schools United with NASA to Create Hardware. Programmet kobler undervisning til behov innen romfart og lar elever bidra med både design og produksjon. Voyager Technologies driver programmet internasjonalt."}</p>
<p>{"Noen prosjekter blir brukt til trening eller videre utvikling. Andre blir vurdert for bruk i rommet. Deltakelse er ikke en garanti for at et produkt blir sendt til ISS."}</p>
<a className="text-link" href="https://www.nasa.gov/stem-content/high-school-students-united-with-nasa-to-create-hardware-hunch/">{"Om HUNCH hos NASA"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<section className="section norway-section" id="i-norge">
<div className="shell editorial">
<div>
<h2>{"Første land utenfor USA."}</h2>
</div>
<div className="prose">
<p>{"Norge er det første landet utenfor USA som har fått drive NASA HUNCH. Hadeland videregående skole ble i 2024 den første skolen utenfor USA som ble tatt opp i programmet."}</p>
<p>{"I dag drives programmet ved Eid vidaregåande skule i Nordfjordeid. Elever på teknologi- og industrifag har i to år produsert deler etter tegninger fra NASA. Skoleåret 2026/27 starter også sporet for design og prototyping, som ikke er kjørt utenfor USA før."}</p>
<p>{"NASA HUNCH Norge er en ideell forening, stiftet i 2026. Vi drifter programmet i Norge i avtale med Voyager Technologies."}</p>
<dl className="fact-row">
<div><dt>{"Deltakerskole"}</dt><dd>{"Eid vidaregåande skule"}</dd></div>
<div><dt>{"Elever 2026/27"}</dt><dd>{"Rundt 100"}</dd></div>
<div><dt>{"Pris for skolen"}</dt><dd>{"Gratis"}</dd></div>
</dl>
</div>
</div>
</section>
<AboutClosing />
</main>
</>; }
