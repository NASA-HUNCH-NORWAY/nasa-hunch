import { organizationSchema, websiteSchema } from "@/app/lib/seo";
import { getHeroSection } from "@/sanity/fetch";

type StructuredDataProps = {
  /** Ekstra schema.org-objekter for den enkelte siden. */
  extra?: Record<string, unknown>[];
};

/**
 * Strukturerte data for søkemotorer: organisasjonen, nettstedet og eventuelt
 * brødsmulesti for siden. Kontaktinfo og sosiale profiler hentes fra Sanity,
 * så de holder seg i takt med det som vises på forsiden.
 */
export async function StructuredData({ extra = [] }: StructuredDataProps) {
  const hero = await getHeroSection();
  const socials = hero?.contactBlock.socials;

  const graph = [
    organizationSchema({
      email: hero?.contactBlock.email,
      socials: [socials?.linkedin, socials?.instagram, socials?.facebook],
    }),
    websiteSchema(),
    ...extra,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
