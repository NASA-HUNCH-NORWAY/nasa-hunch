/**
 * Reserveinnhold for «Om oss».
 *
 * Innholdet redigeres i Sanity under «Om oss». Teksten her vises bare hvis
 * Sanity-dokumentet ikke er publisert ennå, slik at siden aldri står tom.
 *
 * Kilde for tallene og forskningsopplysningene: Garrels, V. og Brevik, B.
 * (2026), «Experiences of students and teachers in Norwegian vocational
 * education partnering with NASA HUNCH», Discover Education 5:423,
 * https://doi.org/10.1007/s44217-026-01443-8 (CC BY 4.0).
 */
export const aboutFallback = {
  title: "Om NASA HUNCH Norge",
  intro: [
    "NASA HUNCH Norge er den norske delen av et utdanningsprogram for videregående skoler, startet i USA i 2003. Elevene løser reelle oppdrag, og lager deler og løsninger som blir tatt i bruk i romfarten.",
    "Én norsk skole deltok i skoleåret 2023/2024, og fire skoler kom til i 2024/2025. Intensjonen er at 20 til 30 norske skoler skal delta i årene som kommer. I USA er programmet i drift i 38 delstater, med over 4000 elever og 400 lærere.",
  ],
  research: {
    heading: "Forskningen på det norske samarbeidet",
    // Artikkelen har engelsk tittel. Den norske tittelen her er en oversettelse;
    // originaltittelen finner du bak lenken.
    title:
      "Erfaringer blant elever og lærere i norsk yrkesfaglig opplæring i samarbeid med NASA HUNCH",
    authors: "Veerle Garrels og Birger Brevik, OsloMet",
    journal: "Discover Education, 2026, vol. 5, artikkel 423",
    license: "Åpen tilgang (CC BY 4.0)",
    summary:
      "Forskerne intervjuet elleve yrkesfagelever og tre lærere ved den første norske NASA HUNCH-skolen, og undersøkte hvordan programmet påvirket motivasjonen for skolen.",
    doi: "https://doi.org/10.1007/s44217-026-01443-8",
    findings: [
      "Programmet ga elevene et motivasjonsløft, særlig på grunn av statusen som følger NASA og oppgavene fra virkeligheten.",
      "Elevene og lærerne opplevde at yrkesfagene fikk høyere status gjennom samarbeidet.",
      "Oppdragene samlet elevene rundt et felles mål, og skapte inkluderende læringsrom.",
      "Programmet har potensial for tverrfaglig læring, men det var foreløpig en teoretisk mulighet.",
    ],
  },
};
