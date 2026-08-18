import type { Metadata } from "next";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { PageHeader } from "@/app/components/PageHeader";
import { PageShell } from "@/app/components/PageShell";
import { teamFallback } from "@/app/content/team";
import { getTeamPage } from "@/sanity/fetch";
import { portableTextToParagraphs } from "@/sanity/utils/portableText";
import type { ImageWithAlt } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Teamet | NASA HUNCH Norge",
  description:
    "Menneskene og organisasjonene bak NASA HUNCH Norge, og samarbeidspartnerne i programmet.",
  alternates: {
    canonical: "https://nasahunch.no/team",
  },
};

function initialsFor(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

type TeamCardProps = {
  name: string;
  role: string;
  link?: string | null;
  image?: ImageWithAlt | null;
};

function TeamCard({ name, role, link, image }: TeamCardProps) {
  const imageUrl = image?.asset?.url;

  return (
    <li className="reveal-rise spaced-dashed-border flex gap-5 p-5 sm:gap-6 sm:p-6">
      <div className="relative size-20 shrink-0 overflow-hidden border border-dashed border-foreground/50 sm:size-24">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? ""}
            fill
            sizes="6rem"
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-foreground/5 text-[1.75rem] leading-none text-foreground/70"
          >
            {initialsFor(name)}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <h3 className="m-0 uppercase">{name}</h3>
        <p className="m-0 mt-1 uppercase text-accent-pink-ink">{role}</p>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-fit items-center gap-1 py-1 underline underline-offset-[0.18em] transition hover:text-accent-pink-ink"
          >
            Profil
            <RiArrowRightUpLine aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </li>
  );
}

export default async function TeamPage() {
  const page = await getTeamPage();
  const intro = portableTextToParagraphs(page?.intro);
  const paragraphs = intro.length ? intro : teamFallback.intro;
  const members = page?.members?.length ? page.members : teamFallback.members;
  const partners = page?.partners?.length
    ? page.partners
    : teamFallback.partners;

  return (
    <PageShell>
      <PageHeader
        title={page?.title ?? teamFallback.title}
        paragraphs={paragraphs}
      />

      {members.length ? (
        <section id="personer" className="section py-10!">
          <h2 className="m-0 uppercase">
            {page?.membersHeading ?? teamFallback.membersHeading}
          </h2>

          <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-6 p-0 lg:grid-cols-2">
            {members.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                link={member.link}
                image={member.image}
              />
            ))}
          </ul>
        </section>
      ) : null}

      {partners.length ? (
        <section id="samarbeidspartnere" className="section py-10!">
          <h2 className="m-0 uppercase">
            {page?.partnersHeading ?? teamFallback.partnersHeading}
          </h2>

          <dl className="m-0 mt-8 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="border-t border-dashed border-foreground/40 py-5"
              >
                <dt className="uppercase text-accent-blue-ink">
                  {partner.link ? (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 transition hover:text-accent-pink-ink"
                    >
                      {partner.name}
                      <RiArrowRightUpLine aria-hidden="true" />
                    </a>
                  ) : (
                    partner.name
                  )}
                </dt>
                <dd className="m-0 mt-2 max-w-[48ch]">{partner.role}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
    </PageShell>
  );
}
