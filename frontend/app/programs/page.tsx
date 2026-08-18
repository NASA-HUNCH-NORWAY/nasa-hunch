import type { Metadata } from "next";
import Image from "next/image";
import { DetailPanel } from "@/app/components/DetailPanel";
import { PageHeader } from "@/app/components/PageHeader";
import { PageShell } from "@/app/components/PageShell";
import { programMascots, programsFallback } from "@/app/content/programs";
import { getProgramsPage } from "@/sanity/fetch";
import { portableTextToParagraphs } from "@/sanity/utils/portableText";
import type { ImageWithAlt } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Programmer | NASA HUNCH Norge",
  description:
    "Programområdene i NASA HUNCH Norge, og elevprosjektene som er levert til NASA.",
  alternates: {
    canonical: "https://nasahunch.no/programs",
  },
};

type ProgramCardProps = {
  name: string;
  description: string;
  image?: ImageWithAlt | null;
  mascot: string;
};

function ProgramCard({ name, description, image, mascot }: ProgramCardProps) {
  const imageUrl = image?.asset?.url;

  return (
    <li className="reveal-rise flex flex-col">
      <div className="spaced-dashed-border relative aspect-[4/3] w-full overflow-hidden [--dash-gap:10px] [--dash-length:10px] [--dash-width:2px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? ""}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-foreground/5">
            <Image
              src={mascot}
              alt=""
              width={200}
              height={200}
              className="h-3/5 w-auto object-contain opacity-90"
            />
          </div>
        )}
      </div>

      <h3 className="mt-5 mb-0 uppercase">{name}</h3>
      <p className="mt-3 max-w-[44ch]">{description}</p>
    </li>
  );
}

export default async function ProgramsPage() {
  const page = await getProgramsPage();
  const intro = portableTextToParagraphs(page?.intro);
  const paragraphs = intro.length ? intro : programsFallback.intro;
  const programs = page?.programs?.length
    ? page.programs
    : programsFallback.programs;
  const projects = page?.projects?.length
    ? page.projects
    : programsFallback.projects;

  return (
    <PageShell>
      <PageHeader
        title={page?.title ?? programsFallback.title}
        paragraphs={paragraphs}
      />

      <section id="programomrader" className="section py-10!">
        <ul className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-14 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.name}
              name={program.name}
              description={program.description}
              image={program.image}
              mascot={programMascots[index % programMascots.length]}
            />
          ))}
        </ul>
      </section>

      {projects.length ? (
        <section id="elevprosjekter" className="section py-10!">
          <h2 className="m-0 uppercase">
            {page?.projectsHeading ?? programsFallback.projectsHeading}
          </h2>

          {projects.map((project) => (
            <DetailPanel key={project.title} items={project.steps ?? []}>
              <h3 className="m-0 uppercase">{project.title}</h3>

              {project.school ? (
                <p className="mt-4 m-0 text-foreground/70">{project.school}</p>
              ) : null}

              {project.period ? (
                <p className="m-0 text-foreground/70">{project.period}</p>
              ) : null}

              {project.outcome ? (
                <p className="mt-5 m-0">{project.outcome}</p>
              ) : null}
            </DetailPanel>
          ))}
        </section>
      ) : null}
    </PageShell>
  );
}
