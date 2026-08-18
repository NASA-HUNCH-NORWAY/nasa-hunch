/**
 * Reserveinnhold for «Teamet».
 *
 * Innholdet redigeres i Sanity under «Teamet». Teksten her vises bare hvis
 * Sanity-dokumentet ikke er publisert ennå.
 *
 * TODO (NORSTEC): styret og programansvarlige mangler. Legg dem inn i Sanity
 * under «Teamet» → «People».
 */
import type { Partner, TeamMember } from "@/sanity/types";

export const teamFallback: {
  title: string;
  intro: string[];
  membersHeading: string | null;
  members: Omit<TeamMember, "_key">[];
  partnersHeading: string;
  partners: Omit<Partner, "_key">[];
} = {
  title: "Teamet",
  intro: ["Menneskene og organisasjonene bak NASA HUNCH Norge."],
  membersHeading: null,
  members: [
    {
      name: "Eirik Engen Kvam",
      role: "Utvikling og design",
      link: "https://www.linkedin.com/in/eirik-engen-kvam/",
      image: null,
    },
    {
      name: "August Solli Middelkoop",
      role: "Utvikling og design",
      link: "https://www.linkedin.com/in/august-solli-middelkoop/",
      image: null,
    },
  ],
  partnersHeading: "Samarbeidspartnere",
  partners: [
    {
      name: "NASA HUNCH",
      role: "Programeier i USA. Sender oppdrag, tegninger og materiale til skolene, og tar imot de ferdige delene.",
      link: "https://nasahunch.com/",
    },
    {
      name: "NORSTEC – Norwegian Space Technology Collective",
      role: "Frivillig organisasjon som drifter NASA HUNCH i Norge og følger opp skolene.",
      link: "https://norstec.no/",
    },
    {
      name: "Sparebankstiftelsen DNB",
      role: "Ga etableringsstøtte i 2024, som gjorde det mulig å få programmet i gang i Norge.",
      link: null,
    },
    {
      name: "OsloMet – Institutt for yrkesfaglærerutdanning",
      role: "Forsker på hvordan programmet påvirker elevenes motivasjon og læring i yrkesfag.",
      link: "https://www.oslomet.no/",
    },
  ],
};
