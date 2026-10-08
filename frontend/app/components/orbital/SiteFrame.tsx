import Image from "next/image";
import type { ReactNode } from "react";
import { ContactPanel } from "./ContactPanel";
import { MotionRuntime } from "./MotionRuntime";
import { SubmissionForm } from "./SubmissionForm";
import { site, addressLine } from "@/app/lib/site";

const navigation = [["/about", "Om HUNCH"], ["/programs", "Programmet"], ["/prosjekt", "Prosjektet"], ["/skoler", "For skoler"], ["/partnere", "Partnere"], ["/team", "Teamet bak"]];
export function SiteFrame({children, pageClass, current, home = false}: {children:ReactNode; pageClass:string; current:string; home?:boolean}) {
 return <div className={`site-page ${pageClass}`}>
  <a className="skip-link" href="#main">Hopp til innhold</a>
  <header className="site-header">
   <a className="brand" href="/" aria-label="NASA HUNCH Norge: forsiden"><Image src="/assets/logo-white.svg" width={1109} height={811} alt="NASA HUNCH Norge" priority /></a>
   <button className="menu-toggle" aria-expanded="false" aria-controls="main-nav" hidden>Meny <span aria-hidden="true">+</span></button>
   <nav id="main-nav" aria-label="Hovedmeny">{navigation.map(([href,label]) => <a key={href} href={href} aria-current={current === href ? "page" : undefined}>{label}</a>)}</nav>
  </header>
  {children}
  {!home && <footer className="site-footer shell">
   <div><div className="footer-links"><a href="/">NASA HUNCH Norge</a><a href="#contact-panel" data-contact-open="">Kontakt oss</a><a href="/personvern">Personvern</a><a href="/partnere">Samarbeid med oss ↗</a></div><p className="footer-identity">{site.legalName}<br/>Organisasjonsnummer {site.organisationNumber}<br/>{addressLine}</p></div>
   <SubmissionForm kind="newsletter" className="newsletter-form">
    <div className="newsletter-copy"><p className="eyebrow">Nyhetsbrev</p><p>Få oppdateringer fra NASA HUNCH Norge.</p></div>
    <div className="newsletter-entry"><label className="visually-hidden" htmlFor="newsletter-footer">Epostadresse</label><input id="newsletter-footer" name="email" type="email" autoComplete="email" placeholder="Epostadresse" maxLength={254} required/><button type="submit" className="form-submit">Meld meg på <span aria-hidden="true">↗</span></button></div>
    <label className="newsletter-consent"><input type="checkbox" name="consent" required/><span>Jeg samtykker til å motta nyhetsbrev. Jeg kan melde meg av når som helst. <a href="/personvern">Personvern</a>.</span></label>
    <label className="form-honeypot" aria-hidden="true">La dette feltet stå tomt<input name="website" tabIndex={-1} autoComplete="off"/></label>
   </SubmissionForm>
  </footer>}
  <ContactPanel /><MotionRuntime />
 </div>;
}
