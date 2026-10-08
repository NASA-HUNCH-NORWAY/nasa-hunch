import { AboutClosing } from "@/app/components/orbital/AboutClosing";
import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

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
<a href="#norge">{"I Norge"}</a>
<a href="/team">{"Teamet bak"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="about-masthead">
<div className="page-hero shell about-hero-grid">
<div>
<p className="eyebrow">{"Om NASA HUNCH"}</p>
<h1>{"Skole, verksted"}<br />{"og romfart."}</h1>
<p className="lead">{"I HUNCH utvikler og produserer elever løsninger for NASA. Her er bakgrunnen for programmet og hvordan det kan brukes i Norge."}</p>
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
<p>{"HUNCH står for High school students United with NASA to Create Hardware. Programmet kobler undervisning til behov innen romfart og lar elever bidra med både design og produksjon."}</p>
<p>{"Noen prosjekter blir brukt til trening eller videre utvikling. Andre blir vurdert for bruk i rommet. Deltakelse er ikke en garanti for at et produkt blir sendt til ISS."}</p>
<a className="text-link" href="https://www.nasa.gov/stem-content/high-school-students-united-with-nasa-to-create-hardware-hunch/">{"Om HUNCH hos NASA"}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</div>
</section>
<div className="orbit-crossing orbit-crossing-about orbit-art" aria-hidden="true">
<svg viewBox="0 0 1600 620" preserveAspectRatio="xMidYMid slice">
<defs>
<mask id="about-crossing-moon">
<circle r="8" fill="white" />
<circle cx="4" cy="-4" r="7" fill="black" />
</mask>
</defs>
<path className="orbit-field" d="M -100 420 C 350 100 1100 100 1700 420 L 1700 620 L -100 620 Z" />
<path id="about-crossing-path" className="orbit-field-edge" d="M -100 420 C 350 100 1100 100 1700 420" />
<path className="orbit-inner-field" d="M -100 780 C 350 360 1100 360 1700 780 L 1700 850 L -100 850 Z" />
<path className="orbit-inner-edge" d="M -100 780 C 350 360 1100 360 1700 780" />
<g data-orbit-body="" data-transit="" data-path="about-crossing-path" transform="translate(-100 420)">
<circle className="crossing-halo" r="29" />
<circle className="crossing-planet" r="21" />
<g data-moon="" transform="translate(-43 -27)">
<circle r="8" fill="white" mask="url(#about-crossing-moon)" />
</g>
</g>
</svg>
</div>
<AboutClosing />
</main>
</>; }
