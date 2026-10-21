"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/app/lib/site";

type Props = { kind: "contact" | "newsletter"; children: ReactNode; className?: string };
const fallback = `Send oss gjerne e-post på ${site.email} i stedet.`;
const messages: Record<string, string> = {
  email_not_configured: `Skjemaet er ikke koblet til e-post ennå. ${fallback}`,
  newsletter_not_configured: "Nyhetsbrevet er ikke klart for påmelding ennå.",
  preview_disabled: "Innsending er slått av i denne forhåndsvisningen.",
  rate_limited: "Det er sendt mange forsøk på kort tid. Vent noen minutter og prøv igjen.",
  invalid_fields: "Kontroller feltene. Navn må fylles ut, og meldingen må ha minst fem tegn.",
  invalid_email: "Kontroller e-postadressen og prøv igjen.",
  consent_required: "Du må krysse av for samtykke før du melder deg på nyhetsbrevet.",
};
const failed = `Innsendingen gikk ikke gjennom. Prøv igjen senere. ${fallback}`;

export function SubmissionForm({ kind, children, className }: Props) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = { ...Object.fromEntries(data), ...(kind === "newsletter" ? {consent: data.get("consent") === "on"} : {}) };
    setBusy(true); setStatus("");
    try {
      const response = await fetch(`/api/${kind}`, { method: "POST", headers: {"content-type":"application/json"}, body:JSON.stringify(payload) });
      // Plattformfeil (for eksempel 502 eller 504) kan komme som HTML. Les svaret forsiktig.
      const result: {error?: string; alreadySubscribed?: boolean} = await response.json().catch(() => ({}));
      if (!response.ok) { setStatus((result.error && messages[result.error]) || failed); return; }
      form.reset();
      setStatus(kind === "contact" ? "Takk for meldingen. Vi svarer så snart vi kan." : result.alreadySubscribed ? "Denne adressen er allerede påmeldt." : "Takk for at du vil følge med. Adressen er meldt på nyhetsbrevet.");
    } catch {
      setStatus(`Vi fikk ikke kontakt med serveren. Sjekk nettforbindelsen og prøv igjen. ${fallback}`);
    } finally { setBusy(false); }
  }
  return <form className={className} onSubmit={submit} aria-busy={busy}>
    <fieldset disabled={busy} className="submission-fields">{children}</fieldset>
    <p className="form-status" role="status" aria-live="polite">{busy ? "Sender…" : status}</p>
  </form>;
}
