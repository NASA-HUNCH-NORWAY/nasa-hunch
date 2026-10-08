"use client";
import { useEffect, useRef } from "react";
import { SubmissionForm } from "./SubmissionForm";

export function ContactPanel() {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    let trigger: HTMLElement | null = null;
    function open(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-contact-open]") : null;
      if (!target || !dialog.current) return;
      event.preventDefault(); trigger = target;
      const subject = dialog.current.querySelector<HTMLSelectElement>('[name="subject"]');
      if (subject) subject.value = target.dataset.contactSubject || "";
      if (!dialog.current.open) dialog.current.showModal();
      dialog.current.querySelector<HTMLInputElement>('[name="name"]')?.focus();
    }
    const node = dialog.current;
    function restoreFocus() { trigger?.focus(); }
    document.addEventListener("click", open);
    node?.addEventListener("close", restoreFocus);
    return () => { document.removeEventListener("click", open); node?.removeEventListener("close", restoreFocus); node?.close(); };
  }, []);
  return <dialog ref={dialog} id="contact-panel" className="contact-drawer" aria-labelledby="contact-title" onClick={event => {if (event.target === event.currentTarget) event.currentTarget.close();}}>
    <div className="drawer-heading"><h2 id="contact-title">Skriv til oss.</h2><button className="drawer-close" type="button" aria-label="Lukk kontaktskjema" onClick={() => dialog.current?.close()}>×</button></div>
    <p className="drawer-intro">Fortell kort hva du lurer på, så svarer vi på epost.</p>
    <SubmissionForm kind="contact" className="contact-form">
      <label>Navn<input name="name" autoComplete="name" maxLength={120} required /></label>
      <label>Epost<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      <label>Skole, bedrift eller organisasjon <span className="optional">(valgfritt)</span><input name="organization" autoComplete="organization" maxLength={160}/></label>
      <label>Hva gjelder henvendelsen?<select name="subject"><option value="">Velg tema</option><option>Skole og elevprosjekt</option><option>Partnerskap og støtte</option><option>Generelt spørsmål</option></select></label>
      <label>Melding<textarea name="message" rows={5} minLength={5} maxLength={5000} required /></label>
      <label className="form-honeypot" aria-hidden="true">La dette feltet stå tomt<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <p className="form-privacy">Når du sender inn, bruker vi opplysningene for å svare på henvendelsen. <a href="/personvern">Les personvernerklæringen</a>.</p>
      <button className="form-submit" type="submit">Send melding <span aria-hidden="true">↗</span></button>
    </SubmissionForm>
  </dialog>;
}
