/**
 * Reserveinnhold for «Programmer».
 *
 * Innholdet redigeres i Sanity under «Programmer». Teksten her vises bare hvis
 * Sanity-dokumentet ikke er publisert ennå.
 *
 * Kilde for programbeskrivelsene og elevprosjektet: Garrels, V. og Brevik, B.
 * (2026), Discover Education 5:423,
 * https://doi.org/10.1007/s44217-026-01443-8 (CC BY 4.0).
 */
import type { Program, StudentProject } from "@/sanity/types";

type ProgramFallback = Omit<Program, "_key">;
type ProjectFallback = Omit<StudentProject, "_key">;

export const programsFallback: {
  title: string;
  intro: string[];
  programs: ProgramFallback[];
  projectsHeading: string;
  projects: ProjectFallback[];
} = {
  title: "Programmer",
  intro: [
    "Programmet er delt i flere områder. Elevene jobber i sitt eget fag, med oppgaver som kommer fra NASA.",
  ],
  programs: [
    {
      name: "Maskinvare",
      description:
        "Elevene utformer løsninger for blant annet oppbevaringsskap og annet nødvendig utstyr som kan lette hverdagen for astronautene på romstasjonen.",
      image: null,
    },
    {
      name: "Design og prototyping",
      description:
        "Elevene utvikler nyskapende løsninger på utfordringer om bord på Den internasjonale romstasjonen.",
      image: null,
    },
    {
      name: "Mat",
      description:
        "Elevene utvikler matvarer til astronautene om bord på Den internasjonale romstasjonen.",
      image: null,
    },
  ],
  projectsHeading: "Elevprosjekter",
  projects: [
    {
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
};

/** Maskotene som vises i bilderammen til et program uten bilde. */
export const programMascots = [
  "/Mascot_student.svg",
  "/Mascot_happy.svg",
  "/Mascot_turbulent_blue.svg",
  "/Mascot_turbulent.svg",
];
