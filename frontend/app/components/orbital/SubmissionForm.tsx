"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type Props = { kind: "contact" | "newsletter"; children: ReactNode; className?: string };
const messages: Record<string, string> = {
  email_not_configured: "Skjemaet er ikke koblet til epost ennå. Prøv igjen senere.",
  newsletter_not_configured: "Nyhetsbrevet er ikke klart for påmelding ennå.",
  preview_disabled: "Innsending er deaktivert i denne forhåndsvisningen.",
  rate_limited: "Det er sendt mange forsøk. Vent litt og prøv igjen.",
  invalid_fields: "Kontroller feltene. Meldingen må ha minst fem tegn.",
  invalid_email: "Kontroller epostadressen og prøv igjen.",
  consent_required: "Du må samtykke før du melder deg på nyhetsbrevet.",
};

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
      const result = await response.json();
      if (!response.ok) throw new Error(messages[result.error] || "Innsendingen gikk ikke gjennom. Prøv igjen senere.");
      form.reset();
      setStatus(kind === "contact" ? "Takk for meldingen. Vi svarer så snart vi kan." : result.alreadySubscribed ? "Denne adressen er allerede påmeldt." : "Takk for at du vil følge med. Adressen er meldt på nyhetsbrevet.");
    } catch (error) {
      setStatus(error instanceof Error && error.message !== "Failed to fetch" ? error.message : "Tilkoblingen virker ikke akkurat nå. Prøv igjen senere.");
    } finally { setBusy(false); }
  }
  return <form className={className} onSubmit={submit} aria-busy={busy}>
    <fieldset disabled={busy} className="submission-fields">{children}</fieldset>
    <p className="form-status" role="status" aria-live="polite">{busy ? "Sender…" : status}</p>
  </form>;
}
