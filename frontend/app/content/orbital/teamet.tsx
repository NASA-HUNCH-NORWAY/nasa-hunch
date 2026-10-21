import { Arrow } from "@/app/components/orbital/Arrow";
import { ContactLinks } from "@/app/components/orbital/ContactLinks";
import Image from "next/image";

/*
 * PLASSHOLDER: legg inn portrett og en kort tekst om hver person.
 * Bilder legges i public/assets/team/ (gjerne 4:5, minst 960 piksler høye),
 * og stien settes i photo, for eksempel "/assets/team/tea.jpg".
 * Felt som står som null, vises ikke.
 */
const people: { name: string; initials: string; role: string; photo: string | null; bio: string | null }[] = [
  { name: "Tea Rasmussen", initials: "TR", role: "Daglig leder", photo: null, bio: null },
  { name: "Freider Fløan", initials: "FF", role: "Styreleder", photo: null, bio: null },
  { name: "Chris Jensen", initials: "CJ", role: "Økonomiansvarlig", photo: null, bio: null },
];

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Teamet bak"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#menneskene">{"Menneskene"}</a>
<a href="#kontakt">{"Kontakt"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="team-masthead shell">
<div>
<h1>{"Teamet bak."}</h1>
<p className="lead">{"NASA HUNCH Norge drives av et lite team. Vi har ansvar for daglig ledelse, styret og økonomien i foreningen, og for kontakten med skolene."}</p>
</div>
</section>
<section className="team-directory shell" id="menneskene" aria-labelledby="menneskene-tittel">
<h2 id="menneskene-tittel" className="visually-hidden">{"Menneskene"}</h2>
{people.map(person => <article className="team-person" key={person.name}>
<div className="person-portrait" aria-hidden={person.photo ? undefined : true}>
{person.photo ? <Image src={person.photo} width={480} height={600} alt={`Portrett av ${person.name}`} sizes="(max-width: 720px) 100vw, 33vw" /> : <span>{person.initials}</span>}
</div>
<div className="person-details">
<h2>{person.name}</h2>
<p className="person-role">{person.role}</p>
{person.bio && <p className="person-bio">{person.bio}</p>}
</div>
</article>)}
</section>
<section className="team-contact shell" id="kontakt">
<div>
<h2>{"Ta kontakt med oss."}</h2>
<p>{"Har du spørsmål om skoledeltakelse eller et mulig samarbeid? Bruk fellesadressen vår."}</p>
<ContactLinks subject="Generelt spørsmål" />
</div>
<nav className="team-next" aria-label="Les videre">
<a href="/skoler">
<span>{"For lærere og skoleledere"}</span>{"HUNCH i undervisningen"} <Arrow className="inline-arrow" /></a>
<a href="/partnere">
<span>{"For bedrifter og fagmiljøer"}</span>{"Samarbeid med oss"} <Arrow className="inline-arrow" /></a>
</nav>
</section>
</main>
</>; }
