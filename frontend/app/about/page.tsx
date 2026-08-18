import type { Metadata } from "next";
import { RiArrowRightUpLine } from "react-icons/ri";
import { DetailPanel } from "@/app/components/DetailPanel";
import { PageHeader } from "@/app/components/PageHeader";
import { PageShell } from "@/app/components/PageShell";
import { aboutFallback } from "@/app/content/about";
import { getAboutPage } from "@/sanity/fetch";
import { portableTextToParagraphs } from "@/sanity/utils/portableText";

export const metadata: Metadata = {
  title: "Om oss | NASA HUNCH Norge",
  description:
    "Om NASA HUNCH Norge, og forskningen fra OsloMet på hvordan programmet påvirker motivasjonen til norske yrkesfagelever.",
  alternates: {
    canonical: "https://nasahunch.no/about",
  },
};

export default async function AboutPage() {
  const page = await getAboutPage();
  const intro = portableTextToParagraphs(page?.intro);
  const paragraphs = intro.length ? intro : aboutFallback.intro;
  const research = page?.research ?? aboutFallback.research;
  const findings = research.findings ?? [];

  return (
    <PageShell>
      <PageHeader
        title={page?.title ?? aboutFallback.title}
        paragraphs={paragraphs}
      />

      <section id="forskning" className="section py-10!">
        <h2 className="m-0 uppercase">
          {research.heading ?? aboutFallback.research.heading}
        </h2>

        <DetailPanel items={findings}>
          <h3 className="m-0">{research.title}</h3>

          {research.authors ? (
            <p className="mt-4 m-0 text-foreground/70">{research.authors}</p>
          ) : null}

          {research.journal ? (
            <p className="m-0 text-foreground/70">{research.journal}</p>
          ) : null}

          {research.license ? (
            <p className="m-0 text-foreground/70">{research.license}</p>
          ) : null}

          {research.summary ? (
            <p className="mt-5 m-0">{research.summary}</p>
          ) : null}

          {research.doi ? (
            <a
              href={research.doi}
              target="_blank"
              rel="noreferrer"
              className="dotted-button dotted-button-pink mt-6 gap-2 uppercase"
            >
              Les mer
              <RiArrowRightUpLine aria-hidden="true" />
            </a>
          ) : null}
        </DetailPanel>
      </section>
    </PageShell>
  );
}
