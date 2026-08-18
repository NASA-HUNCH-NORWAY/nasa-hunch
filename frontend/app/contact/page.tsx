import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactForm/ContactForm";
import { PageHeader } from "@/app/components/PageHeader";
import { PageShell } from "@/app/components/PageShell";
import { contactFallback } from "@/app/content/contact";
import { getContactPage } from "@/sanity/fetch";

export const metadata: Metadata = {
  title: "Kontakt | NASA HUNCH Norge",
  description:
    "Vil skolen din være med i NASA HUNCH Norge? Ta kontakt, og vi går gjennom hva som trengs av utstyr, fag og timer.",
  alternates: {
    canonical: "https://nasahunch.no/contact",
  },
};

export default async function ContactPage() {
  const page = await getContactPage();

  return (
    <PageShell>
      <PageHeader
        title={page?.title ?? contactFallback.title}
        paragraphs={[page?.lead ?? contactFallback.lead]}
      />

      <ContactForm />
    </PageShell>
  );
}
