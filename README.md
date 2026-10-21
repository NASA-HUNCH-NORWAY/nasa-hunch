# NASA HUNCH Norge

Nettsiden på [www.nasahunch.no](https://www.nasahunch.no). Next.js med App Router, React og
TypeScript. All koden ligger i `frontend`.

## Innhold

Sidene og teksten ligger i koden. Sanity brukes ikke lenger.

- Sidene: `frontend/app/<adresse>/page.tsx`
- Teksten på hver side: `frontend/app/content/orbital/`
- Navigasjon, footer, skjemaer og bevegelse: `frontend/app/components/orbital/`
- Organisasjonsdata som vises på siden og i strukturerte data: `frontend/app/lib/site.ts`
- Bilder: `frontend/public/assets/`

## Kjøre lokalt

```bash
cd frontend
npm ci
npm run dev -- -p 3001
```

Kopier `frontend/.env.example` til `frontend/.env.local` for å teste skjemaene. Uten
`RESEND_API_KEY` svarer skjemaene med en feilmelding i stedet for å sende.

## Skjemaene

Kontakt og nyhetsbrev går gjennom `frontend/app/api/contact` og `frontend/app/api/newsletter`,
som sender med Resend. Logikken ligger i `frontend/app/lib/forms.ts`.

| Variabel | Bruk |
| --- | --- |
| `RESEND_API_KEY` | Nøkkel med tilgang til sending og kontakter |
| `RESEND_FROM` | Avsender, på det verifiserte domenet `updates.nasahunch.no` |
| `CONTACT_TO_EMAIL` | Mottaker for kontaktskjemaet |
| `RESEND_SEGMENT_ID` | Segmentet nyhetsbrevpåmeldinger legges i |
| `ALLOW_PREVIEW_FORMS` | `true` slår på sending i Vercel Preview. Standard er av. |

Skjemaene sender bare i produksjon og lokal utvikling, så en forhåndsvisning ikke sender ekte
e-post ved en feil.

## Vercel

Prosjektet `nasa-hunch-igs2` i teamet `nasa-hunch`. Root Directory er `frontend`, og
produksjonsbranchen er `main`.

## Før lansering av det nye designet

- [ ] Legg inn `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_TO_EMAIL` og `RESEND_SEGMENT_ID` i
      Vercel for Production.
- [ ] Test begge skjemaene på en forhåndsvisning med `ALLOW_PREVIEW_FORMS=true` og en
      testmottaker, og slå det av igjen.
- [ ] Legg inn en regel for begrensning av innsendinger på `/api/*` i Vercel Firewall.
      Begrensningen i koden gjelder bare én kjørende instans.
- [ ] Bytt delingsbildet `frontend/public/NasaHunchOG.png` til et som matcher det nye designet.
- [ ] Gå gjennom fakta og bilder på sidene.
- [ ] Etter lansering: fjern de gamle variablene for reCAPTCHA og Google Apps Script i Vercel, og
      be Search Console lese sitemapet på nytt.

## Dokumentasjon

- [SEO](docs/SEO.md)
- [Plan og logg for det nye designet](docs/ORBITAL_REDESIGN.md)
