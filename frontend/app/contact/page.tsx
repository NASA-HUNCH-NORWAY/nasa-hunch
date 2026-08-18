import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm/ContactForm";
import { PageHeader } from "@/app/components/PageHeader";
import { PageShell } from "@/app/components/PageShell";
import { contactFallback } from "@/app/content/contact";
import { absoluteUrl, breadcrumbSchema, SITE_NAME } from "@/app/lib/seo";
import { getContactPage } from "@/sanity/fetch";

const DESCRIPTION =
  "Vil skolen din være med i NASA HUNCH Norge? Ta kontakt, og vi går gjennom hva som trengs av utstyr, fag og timer.";

export const metadata: Metadata = {
  title: "Kontakt",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    siteName: SITE_NAME,
    locale: "nb_NO",
    title: "Kontakt NASA HUNCH Norge",
    description: DESCRIPTION,
    url: absoluteUrl("/contact"),
    images: [
      {
        url: "/NasaHunchOG.png",
        width: 1200,
        height: 630,
        alt: "NASA HUNCH Norge",
      },
    ],
    type: "website",
  },
};

export default async function ContactPage() {
  const page = await getContactPage();

  const schema = [
    breadcrumbSchema([{ name: "Kontakt", path: "/contact" }]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Kontakt NASA HUNCH Norge",
      url: absoluteUrl("/contact"),
      about: { "@id": "https://www.nasahunch.no/#organisasjon" },
    },
  ];

  return (
    <PageShell schema={schema}>
      <PageHeader
        title={page?.title ?? contactFallback.title}
        paragraphs={[page?.lead ?? contactFallback.lead]}
      />

      <ContactForm />
    </PageShell>
  );
}
