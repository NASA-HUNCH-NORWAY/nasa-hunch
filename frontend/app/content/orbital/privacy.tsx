import Image from "next/image";
import { SubmissionForm } from "@/app/components/orbital/SubmissionForm";

export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Personvern"}</span>
</nav>
</div>
</div>
<main id="main">
<section className="case-intro shell privacy-intro">
<p className="eyebrow">{"NASA HUNCH Norge / Personvern"}</p>
<h1>{"Personvern."}</h1>
<p className="lead">{"Her forklarer vi hvilke opplysninger vi får når du kontakter oss eller melder deg på nyhetsbrevet."}</p>
</section>
<section className="section paper">
<div className="shell editorial">
<div>
<p className="eyebrow">{"Opplysninger og bruk"}</p>
<h2>{"Det du sender oss."}</h2>
</div>
<div className="prose">
<h3>{"Kontaktskjema"}</h3>
<p>{"Når du sender en melding, mottar vi navn, epostadresse, eventuell skole eller organisasjon og meldingen din. Vi bruker opplysningene for å svare og følge opp henvendelsen."}</p>
<h3>{"Nyhetsbrev"}</h3>
<p>{"Når du melder deg på, lagrer vi epostadressen din i nyhetsbrevlisten. Påmelding skjer separat og krever et aktivt samtykke i skjemaet. Du kan melde deg av via lenken i nyhetsbrevet. Vi bruker ikke henvendelser sendt via kontaktskjemaet til å melde deg på nyhetsbrevet."}</p>
<h3>{"Epostleverandør"}</h3>
<p>{"Vi bruker Resend til å sende epost og administrere nyhetsbrevkontakter. Opplysningene som trengs for dette, behandles av Resend på våre vegne. Se "}<a href="https://resend.com/legal/privacy-policy" rel="noopener noreferrer">{"Resends personvernerklæring"}</a>{" for informasjon om deres behandling."}</p>
<h3>{"Lagring og forespørsler"}</h3>
<p>{"Vi beholder en henvendelse så lenge det er nødvendig for å følge den opp. Nyhetsbrevopplysninger beholdes til du melder deg av. Du kan be om innsyn, retting eller sletting ved å kontakte oss. Vi må beholde en minimal avmeldingsmarkering for å unngå å melde deg på igjen ved en feil."}</p>
<h3>{"Kontakt"}</h3>
<p>{"Spørsmål om personvern eller en forespørsel om opplysningene dine? "}<a href="#contact-panel" data-contact-open="" data-contact-subject="Generelt spørsmål">{"Skriv til oss via kontaktskjemaet"}</a>{"."}</p>
</div>
</div>
</section>
</main>
</>; }
