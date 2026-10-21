# SEO for nasahunch.no

Dokumentet beskriver hva som er gjort i koden, og hva som må gjøres utenfor koden.

## Gjort i koden

**Språk og metadata**

- Sidespråket er endret fra `en` til `nb-NO`. Dette var den største enkeltfeilen: Google leste
  nettsiden som engelsk, mens innholdet er norsk.
- Tittel og beskrivelse på forsiden er norsk. Tidligere var de engelske.
- Alle sider har egen tittel, beskrivelse, canonical-URL og Open Graph-data. Titlene følger
  malen `Sidenavn | NASA HUNCH Norge`.
- `metadataBase` er satt, så relative bilde-URL-er blir absolutte i delinger.
- `robots`-direktiver tillater indeksering, med store bildeforhåndsvisninger og full
  tekstutdrag i søkeresultatene.

**Gamle URL-er**

Alle permanente redirects (308) ligger i `frontend/next.config.ts`:

- `/kontakt`, `/kontakt-skoler` og `/kontakt-partner` lå i Google som 404 og går til `/contact`.
- `/om-oss`, `/om`, `/programmer` og `/teamet` går til de engelske adressene, slik at gjettede
  norske adresser treffer riktig side.
- Adressene fra prototypen (`/index.html`, `/om.html`, `/skoler.html` og så videre) går til de
  tilsvarende sidene.

**Domenet**

nasahunch.no sender 308-redirect til www.nasahunch.no. Alle canonical-URL-er, Open Graph-URL-er,
sitemap og robots peker derfor på `https://www.nasahunch.no`, satt som `SITE_URL` i
`frontend/app/lib/seo.ts`.

**Sider søkemotorer trenger**

- `/robots.txt` genereres fra `frontend/app/robots.ts`, og peker på sitemap.
- `/sitemap.xml` genereres fra `frontend/app/sitemap.ts` og inneholder alle ti sidene: forsiden,
  `/about`, `/programs`, `/skoler`, `/fagcase`, `/partnere`, `/prosjekt`, `/team`, `/contact`
  og `/personvern`. Ny side må legges inn i listen der.

**Strukturerte data (JSON-LD)**

Alle sider sender med, fra `frontend/app/components/StructuredData.tsx`:

- `NGO`: navn, formål, organisasjonsnummer, adresse, e-post, sosiale profiler og lenke til
  Enhetsregisteret. Dette knytter nettsiden til den registrerte organisasjonen, som er nyttig
  både for Google-søk og for søknaden til Google for Nonprofits.
- `WebSite`: navn og språk.

Organisasjonsdataene hentes fra `frontend/app/lib/site.ts`. Sidespesifikke data som brødsmulesti
er ikke lagt inn på de nye sidene ennå. `breadcrumbSchema` i `seo.ts` er klar til bruk.

**Struktur og ytelse**

- Hver side har én `h1`.
- Alle bilder bruker `next/image`, med AVIF og WebP.
- Skrifttypen er systemets Helvetica Neue, så siden laster ingen eksterne fonter.
- Siden har ingen tredjepartsskript. Sikkerhetshodene i `next.config.ts` tillater bare egne
  ressurser.

**Delingsbilde**

`frontend/public/NasaHunchOG.png` brukes på alle sider. Bildet er fra det gamle designet og bør
byttes til et som matcher den nye profilen.

## Må gjøres utenfor koden

**Verifisering og innsending**

1. Search Console: sitemapet er allerede sendt inn som
   `https://www.nasahunch.no/sitemap.xml`. Etter lanseringen av det nye designet inneholder det ti sider.
   Be om ny gjennomlesing der.
2. Trykk «Validate fix» på «Not found (404)» i Search Console etter deploy. De tre URL-ene
   (`/kontakt`, `/kontakt-skoler`, `/kontakt-partner`) har nå permanent redirect til
   `/contact`.
3. Samme i [Bing Webmaster Tools](https://www.bing.com/webmasters), som også dekker
   ChatGPT-søk og DuckDuckGo.
4. Opprett Google Business Profile på den registrerte adressen i Drammen. Det gir lokale
   treff og styrker organisasjonsnummeret mot Google.

**Backlinks, i prioritert rekkefølge**

Lenker fra sider som allerede har autoritet betyr mest. Disse er realistiske å få:

1. **norstec.no** – lenke fra NORSTEC til nasahunch.no. Enklest, og dere styrer den selv.
2. **nasahunch.com** – be om å bli listet som den norske delen av programmet. En lenke fra
   programeieren er den sterkeste dere kan få.
3. **OsloMet** – forskerne bak artikkelen har som regel en prosjektside eller nyhetssak. Be om
   lenke til nasahunch.no der.
4. **Sparebankstiftelsen DNB** – de har oversikt over tildelte prosjekter. Be om at
   prosjektsiden lenker til dere.
5. **Deltakerskolene og fylkeskommunene** – hver skole som er med bør lenke fra sin egen side
   om programmet. Dette er mange lenker fra troverdige `.no`-domener.
6. **Frivillig.no** – gratis profil for registrerte organisasjoner, med lenke.
7. **Presse** – lokalaviser der skolene ligger, Utdanningsnytt og fagbladene for yrkesfag.
   Elevprosjektet med delene som ble sendt til romstasjonen er en sak de vil ha.
8. **Sosiale profiler** – LinkedIn, Instagram og Facebook må ha nasahunch.no i bio. De gir lite
   direkte, men bekrefter at profilene og nettsiden hører sammen.

Ikke kjøp lenker, og ikke bruk lenkekataloger. Google straffer det, og en nyregistrert
organisasjon har lite å gå på.

**Innhold som gir søketrafikk**

Sidene svarer nå på «hva er NASA HUNCH Norge». Det som mangler er sider som svarer på det
skoler faktisk søker etter:

- «Hvordan bli med» – krav til utstyr, fag, timer og hva skolen forplikter seg til.
- Én side per elevprosjekt, etter hvert som de blir ferdige. Dette er innholdet ingen andre i
  Norge kan skrive, og det er det som gir lenker.
- Nyheter fra skolene, med bilder. Bilder med beskrivende filnavn og alt-tekst gir treff i
  bildesøk.

## Meldinger i Search Console som ikke er feil

- **«Page with redirect»** på `http://nasahunch.no/`, `https://nasahunch.no/` og
  `http://www.nasahunch.no/`: dette er redirecten til `https://www.nasahunch.no/`, altså slik
  det skal være. De blir liggende i rapporten permanent.
- **«Crawled – currently not indexed»** på en `.woff2`-fil, `site.webmanifest` og
  `favicon.ico`: dette er filer, ikke sider. De skal ikke indekseres.
