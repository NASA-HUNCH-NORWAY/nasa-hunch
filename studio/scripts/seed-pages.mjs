/**
 * Bygger NDJSON for de fire sidedokumentene (Om oss, Programmer, Teamet og
 * Kontakt), med samme innhold som reservefilene i frontend/app/content/.
 *
 * Dokumentene er allerede lagt inn i Sanity. Skriptet ligger her for å kunne
 * gjenopprette dem, eller legge dem inn i et nytt datasett:
 *
 *   node scripts/seed-pages.mjs pages.ndjson
 *   npx sanity dataset import pages.ndjson production --replace
 *
 * Merk at `--replace` overskriver dokumentene med samme id.
 */
import { writeFileSync } from "node:fs";

let keyCounter = 0;
const key = () => `k${(keyCounter += 1).toString().padStart(3, "0")}`;

const block = (text) => ({
  _type: "block",
  _key: key(),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});

const docs = [
  {
    _id: "aboutPage",
    _type: "aboutPage",
    title: "Om NASA HUNCH Norge",
    intro: [
      block(
        "NASA HUNCH Norge er den norske delen av et utdanningsprogram for videregående skoler, startet i USA i 2003. Elevene løser reelle oppdrag, og lager deler og løsninger som blir tatt i bruk i romfarten.",
      ),
      block(
        "Én norsk skole deltok i skoleåret 2023/2024, og fire skoler kom til i 2024/2025. Intensjonen er at 20 til 30 norske skoler skal delta i årene som kommer. I USA er programmet i drift i 38 delstater, med over 4000 elever og 400 lærere.",
      ),
    ],
    research: {
      heading: "Forskningen på det norske samarbeidet",
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
  },
  {
    _id: "programsPage",
    _type: "programsPage",
    title: "Programmer",
    intro: [
      block(
        "Programmet er delt i flere områder. Elevene jobber i sitt eget fag, med oppgaver som kommer fra NASA.",
      ),
    ],
    programs: [
      {
        _type: "programItem",
        _key: key(),
        name: "Maskinvare",
        description:
          "Elevene utformer løsninger for blant annet oppbevaringsskap og annet nødvendig utstyr som kan lette hverdagen for astronautene på romstasjonen.",
      },
      {
        _type: "programItem",
        _key: key(),
        name: "Design og prototyping",
        description:
          "Elevene utvikler nyskapende løsninger på utfordringer om bord på Den internasjonale romstasjonen.",
      },
      {
        _type: "programItem",
        _key: key(),
        name: "Mat",
        description:
          "Elevene utvikler matvarer til astronautene om bord på Den internasjonale romstasjonen.",
      },
    ],
    projectsHeading: "Elevprosjekter",
    projects: [
      {
        _type: "projectItem",
        _key: key(),
        title: "Hylser til en fraktcontainer for romstasjonen",
        school: "Den første norske NASA HUNCH-skolen",
        period: "Skoleåret 2023/2024",
        outcome:
          "Dette var den første NASA HUNCH-oppgaven for skolen i Norge. Elevene og lærerne var de første utenfor USA som deltok i programmet.",
        steps: [
          "NASA sendte skolen tegninger, spesifikasjoner og materialet som skulle brukes: stål.",
          "Lærerne utarbeidet en undervisningsplan ut fra dokumentasjonen og materialet.",
          "Elevene laget en oppskalert prototype i plast, 3D-printet.",
          "Deretter en oppskalert prototype i stål.",
          "Så en prototype i riktige mål, produsert med CNC.",
          "Til slutt de ferdige hylsene, som ble overlevert NASA.",
        ],
      },
    ],
  },
  {
    _id: "teamPage",
    _type: "teamPage",
    title: "Teamet",
    intro: [block("Menneskene og organisasjonene bak NASA HUNCH Norge.")],
    members: [
      {
        _type: "teamMemberItem",
        _key: key(),
        name: "Eirik Engen Kvam",
        role: "Utvikling og design",
        link: "https://www.linkedin.com/in/eirik-engen-kvam/",
      },
      {
        _type: "teamMemberItem",
        _key: key(),
        name: "August Solli Middelkoop",
        role: "Utvikling og design",
        link: "https://www.linkedin.com/in/august-solli-middelkoop/",
      },
    ],
    partnersHeading: "Samarbeidspartnere",
    partners: [
      {
        _type: "partnerItem",
        _key: key(),
        name: "NASA HUNCH",
        role: "Programeier i USA. Sender oppdrag, tegninger og materiale til skolene, og tar imot de ferdige delene.",
        link: "https://nasahunch.com/",
      },
      {
        _type: "partnerItem",
        _key: key(),
        name: "NORSTEC – Norwegian Space Technology Collective",
        role: "Frivillig organisasjon som drifter NASA HUNCH i Norge og følger opp skolene.",
        link: "https://norstec.no/",
      },
      {
        _type: "partnerItem",
        _key: key(),
        name: "Sparebankstiftelsen DNB",
        role: "Ga etableringsstøtte i 2024, som gjorde det mulig å få programmet i gang i Norge.",
      },
      {
        _type: "partnerItem",
        _key: key(),
        name: "OsloMet – Institutt for yrkesfaglærerutdanning",
        role: "Forsker på hvordan programmet påvirker elevenes motivasjon og læring i yrkesfag.",
        link: "https://www.oslomet.no/",
      },
    ],
  },
  {
    _id: "contactPage",
    _type: "contactPage",
    title: "Vil skolen din være med?",
    lead: "Vi ser etter flere videregående skoler i hele landet. Ta kontakt, og vi går gjennom hva som trengs av utstyr, fag og timer.",
  },
];

const target = process.argv[2];
writeFileSync(target, docs.map((doc) => JSON.stringify(doc)).join("\n") + "\n");
console.log(`Skrev ${docs.length} dokumenter til ${target}`);
