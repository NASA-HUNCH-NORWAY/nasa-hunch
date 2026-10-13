import { site, addressLine } from "@/app/lib/site";

/*
 * UTKAST til gjennomgang. Teksten bygger på det skjemaene faktisk samler inn
 * (app/lib/forms.ts). Oppbevaringstidene er forslag, og må bekreftes av styret
 * før siden publiseres.
 */
export default function Content() { return <>
<div className="page-location">
<div className="shell">
<nav className="breadcrumb" aria-label="Brødsmulesti">
<a href="/">{"Forsiden"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{"Personvern"}</span>
</nav>
<nav className="section-links" aria-label="På denne siden">
<a href="#ansvarlig">{"Ansvarlig"}</a>
<a href="#opplysninger">{"Opplysninger"}</a>
<a href="#rettigheter">{"Dine rettigheter"}</a>
</nav>
</div>
</div>
<main id="main">
<section className="case-intro shell privacy-intro">
<h1>{"Personvern."}</h1>
<p className="lead">{"Her forklarer vi hvilke opplysninger vi får når du kontakter oss eller melder deg på nyhetsbrevet, hva vi bruker dem til, og hvilke rettigheter du har."}</p>
</section>
<section className="section paper" id="ansvarlig">
<div className="shell editorial">
<div>
<h2>{"Hvem som er ansvarlig."}</h2>
</div>
<div className="prose">
<p>{`${site.legalName} er behandlingsansvarlig for opplysningene som sendes inn på denne nettsiden.`}</p>
<p className="privacy-identity">{site.legalName}<br />{`Organisasjonsnummer ${site.organisationNumber}`}<br />{addressLine}<br /><a href={`mailto:${site.email}`}>{site.email}</a></p>
</div>
</div>
</section>
<section className="section" id="opplysninger">
<div className="shell editorial">
<div>
<h2>{"Det du sender oss."}</h2>
</div>
<div className="prose">
<h3>{"Kontaktskjema"}</h3>
<p>{"Når du sender en melding, mottar vi navn, e-postadresse, eventuell skole eller organisasjon, temaet du velger og meldingen din. Vi bruker opplysningene for å svare og følge opp henvendelsen. Grunnlaget er vår berettigede interesse i å svare på henvendelser (personvernforordningen artikkel 6 nr. 1 bokstav f)."}</p>
<h3>{"Nyhetsbrev"}</h3>
<p>{"Når du melder deg på, lagrer vi e-postadressen din og tidspunktet for påmeldingen. Grunnlaget er samtykket ditt (artikkel 6 nr. 1 bokstav a), som du gir ved å krysse av i skjemaet. Du kan trekke samtykket tilbake når som helst via lenken nederst i hvert nyhetsbrev, eller ved å skrive til oss. Vi melder deg aldri på nyhetsbrevet fordi du har sendt en henvendelse."}</p>
<h3>{"Teknisk informasjon"}</h3>
<p>{"For å hindre misbruk av skjemaene bruker vi IP-adressen din til å begrense antall innsendinger på kort tid. IP-adressen holdes bare i minnet i ti minutter og lagres ikke sammen med det du sender. Nettsiden bruker ikke informasjonskapsler til sporing eller analyse."}</p>
</div>
</div>
</section>
<section className="section paper" id="leverandorer">
<div className="shell editorial">
<div>
<h2>{"Hvem som behandler opplysningene for oss."}</h2>
</div>
<div className="prose">
<p>{"Vi bruker noen leverandører som behandler opplysninger på våre vegne. De har databehandleravtale med oss og kan ikke bruke opplysningene til egne formål."}</p>
<ul className="privacy-list">
<li><strong>{"Resend"}</strong>{" sender e-post fra skjemaene og administrerer listen over nyhetsbrevmottakere. "}<a href="https://resend.com/legal/privacy-policy" rel="noopener noreferrer">{"Resends personvernerklæring"}</a></li>
<li><strong>{"Google Workspace"}</strong>{" er e-postsystemet der henvendelsene fra kontaktskjemaet blir mottatt og besvart."}</li>
<li><strong>{"Vercel"}</strong>{" drifter nettsiden. Vercel registrerer tekniske logger med IP-adresse når du besøker siden."}</li>
</ul>
<p>{"Disse leverandørene er amerikanske selskaper, og opplysninger kan bli overført til USA. Overføringen skjer på grunnlag av EUs og USAs rammeverk for personvern (EU-U.S. Data Privacy Framework) eller EUs standard personvernbestemmelser."}</p>
</div>
</div>
</section>
<section className="section" id="rettigheter">
<div className="shell editorial">
<div>
<h2>{"Hvor lenge, og dine rettigheter."}</h2>
</div>
<div className="prose">
<h3>{"Oppbevaring"}</h3>
<p>{"Henvendelser sletter vi senest 24 måneder etter at saken er avsluttet, med mindre de inngår i et avtaleforhold vi må dokumentere. E-postadressen din står på nyhetsbrevlisten til du melder deg av. Etter avmelding beholder vi bare adressen med en avmeldingsmarkering, slik at du ikke blir meldt på igjen ved en feil. Melder du deg på igjen senere, regnes det som et nytt samtykke."}</p>
<h3>{"Dine rettigheter"}</h3>
<p>{"Du kan be om innsyn i opplysningene vi har om deg, og be om at de blir rettet eller slettet. Du kan også be om at behandlingen begrenses, protestere mot behandling som bygger på berettiget interesse, og få utlevert opplysninger du har gitt oss. Send en e-post til "}<a href={`mailto:${site.email}`}>{site.email}</a>{". Vi svarer innen 30 dager."}</p>
<h3>{"Klage"}</h3>
<p>{"Mener du at vi behandler opplysningene dine i strid med reglene, kan du klage til "}<a href="https://www.datatilsynet.no/" rel="noopener noreferrer">{"Datatilsynet"}</a>{". Vi setter pris på om du tar kontakt med oss først, så vi kan rette opp feilen."}</p>
<p className="source-note">{"Sist oppdatert oktober 2026."}</p>
</div>
</div>
</section>
</main>
</>; }
