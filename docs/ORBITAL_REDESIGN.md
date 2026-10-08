# Plan for orbitaldesignet

## Status

Repoet er hentet lokalt og branchen orbital-redesign er opprettet fra main. Ingen endringer er publisert til GitHub, Vercel eller Sanity.

Den godkjente designprototypen ligger ved siden av repoet i nettside-prototype. Den består av HTML, CSS, JavaScript og to funksjoner for Resend. Den er referansen for design, tekst, bilder og oppførsel ved scrolling.

## Teknologien i repoet

Frontend bruker Next.js 16.2.6 med App Router, React 19.2.4 og TypeScript. Utseendet bruker Tailwind CSS 4, vanlig CSS og CSS Modules. Embla håndterer karuseller. Node versjon 22 er angitt i .nvmrc.

Innhold hentes fra Sanity prosjektet 4k911a4x og datasettet production. Frontend henter publisert innhold over HTTP og oppdaterer hurtigbufferen hvert 60. sekund. Sanity Studio ligger separat i studio og bruker Sanity 5.31.1 med React og styled components.

Eksisterende kontaktskjema sender til Google Apps Script og bruker reCAPTCHA Enterprise. Adressene settes med NEXT_PUBLIC_CONTACT_APPS_SCRIPT_URL og NEXT_PUBLIC_RECAPTCHA_SITE_KEY. Ingen Resend integrasjon eller nyhetsbrevpåmelding er funnet i det undersøkte repoet.

## Arbeidet som trengs

Bygg prototypens uttrykk som gjenbrukbare komponenter for navigasjon, orbitalflater, bilderammer, prosesslinje, kontaktpanel og footer. Tilpass scrolloppførselen til React med opprydding av hendelser og respekt for redusert bevegelse.

Behold eksisterende sider på /about, /programs, /team og /contact. Legg til egne sider for prosjekt, skoler, partnere, fagcase og personvern. Velg endelige adresser før implementeringen, og oppdater sitemap, metadata og nødvendige videresendinger. Eksisterende navn og fakta fra produksjon må gjennomgås mot prototypen før de erstattes.

Bruk eksisterende Sanity innhold der det passer. Utvid skjemaer og spørringer for nye sider. Hold formgiving og bevegelse i komponentene, og redigerbart innhold i Sanity. Ikke kjør seed scriptet eller endre publisert innhold som del av designarbeidet. Dersom innhold må endres for forhåndsvisningen, bruk et eget datasett eller en avtalt arbeidsflyt for utkast. En Git branch isolerer kode, men isolerer ikke Sanity datasettet.

Flytt Resend logikken til Route Handlers i frontend/app/api/contact/route.ts og frontend/app/api/newsletter/route.ts. Gjenbruk validering og HTML escaping fra prototypen, og tilpass request og response til Next.js. Lag kontaktpanelet og nyhetsbrevskjemaet som klientkomponenter. Behold spamvern, og vurder delt lagring eller Vercel vern for begrensning av innsendinger. Prototypens minnebaserte begrensning virker bare innen én kjørende instans.

Flytt logo, fotografier og andre godkjente ressurser til frontend/public. Bruk korrekte bildestørrelser, kreditering og Next.js bildeoptimalisering. Behold organisasjonsinformasjon, tilgjengelig navigasjon og SEO som allerede er på plass.

## Vercel

Kontroller at eksisterende Vercel prosjekt bruker dette GitHub repoet, Next.js som rammeverk og frontend som Root Directory. Installer med npm ci og bygg med npm run build. Behold eksisterende produksjonsbranch og Node oppsett hvis de allerede fungerer.

La orbital-redesign få forhåndsvisninger via Git integrasjonen. Preview og Production må ha riktig konfigurasjon hver for seg. En forhåndsvisning kan fremdeles sende ekte epost og endre Resend kontakter dersom den bruker produksjonsnøkler. Bruk derfor avtalt testmottaker og eget segment eller deaktivert innsending frem til dette er klart.

Servervariabler for den nye løsningen er RESEND_API_KEY, RESEND_SEGMENT_ID, RESEND_FROM og CONTACT_TO_EMAIL. Ingen av disse skal eksponeres med NEXT_PUBLIC. Segmentet for produksjon er 4a92127c-7bed-498b-9d64-0fe893f6958c. Bekreft verifisert avsenderdomene og API tilgang til både sending og kontakthåndtering før funksjonene tas i bruk.

Gjør Sanity prosjekt og datasett konfigurerbare dersom Preview skal bruke et annet datasett. Ikke legg nødvendige hemmeligheter i Git.

Teamlenken er https://vercel.com/nasa-hunch. Den innloggede kommandolinjekontoen viste kun personlige prosjekter og gjenkjente ikke dette teamet. Nettleseren ba om innlogging. Tilkobling, Root Directory, produksjonsbranch og miljøvariabler for NASA HUNCH er derfor ikke bekreftet. Logg inn med kontoen som har tilgang til teamet for å fullføre kontrollen.

## Foreslått rekkefølge

Start med felles komponenter og forsiden, og viderefør den godkjente scrolloppførselen. Flytt deretter undersidene med den nye sidekomposisjonen. Tilpass Sanity modellen etter innholdet. Integrer kontaktpanel, nyhetsbrev og personvern. Opprett en pull request med Vercel forhåndsvisning når den første sammenhengende versjonen er klar.

## Designregler

Synlig tekst skal ikke bruke bindestrek, tankestrek eller midtpunkt. Tekniske adresser og kode beholder nødvendig syntaks. Bruk én tydelig innholdsoverskrift per seksjon uten ekstra nummer og seksjonsnavn. Behold scrolleindikatoren på forsiden.

Samle korte kildenotater og videre lenker med innholdet de tilhører. Varier komposisjonen etter sidenes oppgave. Orbitalene skal forme innholdet og holde teksten lesbar.

## Implementert i orbital-redesign

Sidene er nå React sider i frontend/app. Lokalt sideinnhold ligger i frontend/app/content/orbital. Sanity Studio og datasettet er ikke endret, og aktive sider gjør ingen Sanity forespørsler.

Felles navigasjon, kontaktpanel, nyhetsbrev og bevegelse ligger i frontend/app/components/orbital. Bevegelsen beholder prototypens hjulhåndtering og rydder opp hendelser, observatører og animasjonsrammer når komponenten avsluttes. Bilder ligger i frontend/public/assets og bruker Next.js bildekomponenten.

Kontakt og nyhetsbrev bruker Route Handlers med servervariabler. Innsending i Vercel Preview krever ALLOW_PREVIEW_FORMS=true. Nøkler er ikke lagt inn. Den lokale begrensningen av innsendinger er per instans og må kompletteres med Vercel vern eller delt lagring før offentlig bruk med høy trafikk.

Om siden har en samlet avslutning som viser to arbeidsformer og kontakt som neste steg. Organisasjonsnummer og adresse er bevart i footeren. Norske adresser fra prototypen videresendes til de nye sidene, mens eksisterende /about, /programs, /team og /contact er beholdt.

Lokalt kjøres den nye løsningen fra frontend med npm run dev. Bruk port 3002 mens den gamle prototypen kjører på port 3001.

For Vercel skal Root Directory være frontend. Framework Preset er Next.js. Miljøvariablene er dokumentert i frontend/.env.example. Sanity kreves ikke for denne branchen.

## Leveranse

Next.js er oppdatert til 16.4.0. Kompatible avhengigheter er også oppdatert etter at den tidligere versjonen ble flagget med en kritisk feil. npm run build fullførte med alle sider og API ruter. Ingen melding er sendt med Resend, siden nøkler ikke er konfigurert.

De gjenværende npm merknadene gjelder utviklingsverktøy i ESLint kjeden. npm foreslo nedgradering til en annen hovedversjon som rettelse, og dette er ikke gjennomført.
