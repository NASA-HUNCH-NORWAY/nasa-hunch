import { Arrow } from "@/app/components/orbital/Arrow";
export function AboutClosing() {
 return <section className="about-closing">
  <div className="shell">
   <div className="about-closing-intro"><h2>På skolens<br/>premisser.</h2><div><p className="lead">Et opplegg må passe fagene, verkstedet og tiden skolen har.</p><p>En ny skole kan velge mellom produksjon etter tegning og design og prototyping. Deltakelse er gratis for skolen. Oppdrag, oppfølging og tidsplan avklarer vi sammen før oppstart.</p></div></div>
   <div className="about-pathways">
    <a href="/fagcase#produksjon"><h3>Fra tegning til del.</h3><p>Utforsk et avgrenset produksjonsoppdrag med måling, arbeidsmetode og kvalitetskontroll.</p><span>Se produksjon i praksis <Arrow /></span></a>
    <a href="/fagcase#design"><h3>Fra behov til løsning.</h3><p>Utforsk design og prototyping, der elevene prøver ut ideer og dokumenterer hva som fungerer.</p><span>Se design i praksis <Arrow /></span></a>
   </div>
   <div id="kontakt" className="about-closing-contact"><p>Hva kan passe din skole?</p><a className="home-primary-link" href="/contact" data-contact-open="" data-contact-subject="Skole og elevprosjekt">Snakk med oss om din skole <Arrow /></a><a className="text-link" href="/skoler">Se mulighetene for skolen <Arrow /></a></div>
  </div>
 </section>;
}
