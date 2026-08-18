# Undersidene: Om oss, Programmer, Teamet og Kontakt

Alle fire undersidene redigeres i Sanity, på samme måte som forsiden. I menyen i Sanity Studio
ligger forsiden samlet under `Forsiden`, og undersidene under: `Om oss`, `Programmer`, `Teamet`
og `Kontakt`.

| Side | URL | Dokument i Sanity |
| --- | --- | --- |
| Om oss | `/about` | `Om oss` |
| Programmer | `/programs` | `Programmer` |
| Teamet | `/team` | `Teamet` |
| Kontakt | `/contact` | `Kontakt` |

Kontaktskjemaet ligger nå bare på `/contact`, ikke på forsiden.

## Reserveinnhold

Dokumentene er lagt inn og publisert i Sanity, så sidene henter innholdet derfra. I tillegg
ligger det en kopi av samme innhold i koden, som reserve hvis et dokument skulle bli slettet:

- `frontend/app/content/about.ts`
- `frontend/app/content/programs.ts`
- `frontend/app/content/team.ts`
- `frontend/app/content/contact.ts`

Sanity overstyrer reserveinnholdet felt for felt. En tom liste i Sanity betyr at
reserveinnholdet vises i stedet, så tømmer du en liste, må den fylles ut igjen.

`studio/scripts/seed-pages.mjs` bygger dokumentene på nytt hvis de må gjenopprettes.

## Feltene i Sanity

**Om oss**

- `Title`: overskriften på siden.
- `Intro text`: teksten rett under overskriften. Hvert avsnitt blir et eget avsnitt på siden.
- `Research`: boksen om forskningen. `Findings` blir de nummererte punktene til høyre,
  resten av feltene står til venstre. `Link to the article` er «Les mer»-knappen.

**Programmer**

- `Programs`: ett kort per programområde, med navn, beskrivelse og valgfritt bilde. Uten bilde
  vises en maskot i bilderammen.
- `Student projects`: ett prosjekt per boks. `Steps` blir de nummererte punktene til høyre.

**Teamet**

- `People`: navn, rolle, valgfri lenke og valgfritt bilde. Uten bilde vises initialene.
- `Partners`: navn, rolle og valgfri lenke.

**Kontakt**

- `Title` og `Intro text`: teksten over kontaktskjemaet.

## Krav fra Google for Nonprofits

- **Formålsparagraf:** står på forsiden, i `Hero` → `Description`. Teksten beskriver
  HUNCH-misjonen generelt. Skal den også dekke NORSTECs eget vedtektsfestede formål og
  samfunnsnytten i Norge, må den utvides der.
- **Programmer og elevprosjekter:** `/programs`.
- **Organisasjonsnummer og adresse:** `frontend/app/lib/site.ts`, vist i footeren på alle sider.
  Dette er det eneste innholdet på undersidene som ikke ligger i Sanity, siden det sjelden
  endres.

Kontroller at organisasjonsnummeret og adressen stemmer med Enhetsregisteret før søknaden
sendes videre.

## Skriveregler

- All tekst på nettsiden skal være norsk. Artikkeltittelen på «Om oss» er derfor oversatt;
  originaltittelen er engelsk og står bak «Les mer»-lenken.
- Programområdene har norske navn. `Maskinvare` heter «Hardware» hos NASA HUNCH i USA.

## Hvor innholdet kommer fra

Innholdet er ikke skrevet fritt. Kildene er:

- **Forskningsartikkelen:** Garrels, V. og Brevik, B. (2026), «Experiences of students and
  teachers in Norwegian vocational education partnering with NASA HUNCH», Discover Education
  5:423, <https://doi.org/10.1007/s44217-026-01443-8> (CC BY 4.0). Herfra kommer teksten på
  «Om oss», beskrivelsene av programområdene og hele elevprosjektet.
- **Enhetsregisteret:** organisasjonsnummer, adresse og organisasjonsform.
- **Forsiden av nasahunch.no:** opplysningene om NORSTEC og Sparebankstiftelsen DNB.

## Det som mangler

Styret og programansvarlige står ikke på Teamet ennå. Legg dem inn i Sanity under
`Teamet` → `People`.

## Navigasjon og spacing

Lenkene i toppmenyen er definert i `NAV_LINKS` i `frontend/app/components/Navbar.tsx`. Nye
sider må også legges inn i `frontend/app/sitemap.ts`.

Undersidene bruker samme avstander: `PageHeader` har `pt-2! pb-10!`, og hver seksjon under har
`py-10!`. Behold dette på nye seksjoner.

## Etter endringer i koden

```bash
npm run build --prefix frontend
```
