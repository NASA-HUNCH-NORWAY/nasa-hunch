import type { Metadata } from "next";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";

export const metadata: Metadata = { title: "Fant ikke siden", robots: { index: false } };

export default function NotFound() {
 return <SiteFrame pageClass="not-found-page" current="">
  <main id="main" className="contact-landing shell">
   <h1>Vi fant ikke<br/>denne siden.</h1>
   <p className="lead">Adressen kan være skrevet feil, eller siden kan ha flyttet. Herfra kommer du videre.</p>
   <div className="home-actions">
    <a className="home-primary-link" href="/">Til forsiden <span aria-hidden="true">↗</span></a>
    <a className="text-link" href="/skoler">For skoler <span aria-hidden="true">↗</span></a>
    <a className="text-link" href="/contact" data-contact-open="">Kontakt oss <span aria-hidden="true">↗</span></a>
   </div>
  </main>
 </SiteFrame>;
}
