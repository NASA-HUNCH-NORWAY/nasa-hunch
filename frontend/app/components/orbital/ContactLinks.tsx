import { Arrow } from "@/app/components/orbital/Arrow";
import { site } from "@/app/lib/site";

type Subject = "Skole og elevprosjekt" | "Partnerskap og støtte" | "Generelt spørsmål";

/**
 * Skjemaet og adressen side om side. Adressen er en ekte mailto-lenke, så den
 * kan kopieres og videresendes. Knappen åpner kontaktskuffen. Uten
 * JavaScript går den til /contact, der knappene åpner e-postprogrammet.
 */
export function ContactLinks({ subject, label = "Skriv til oss" }: { subject: Subject; label?: string }) {
 return <div className="contact-links">
  <a className="home-primary-link" href="/contact" data-contact-open="" data-contact-subject={subject}>{label} <Arrow /></a>
  <p className="contact-email">Eller send e-post til <a href={`mailto:${site.email}`}>{site.email}</a></p>
 </div>;
}
