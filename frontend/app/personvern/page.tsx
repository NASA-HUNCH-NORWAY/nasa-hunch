import Content from "@/app/content/orbital/privacy";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "Personvern", description: "Slik behandler NASA HUNCH Norge opplysninger sendt inn via kontaktskjema og nyhetsbrev, og hvilke rettigheter du har.", path: "/personvern"});
export default function Page() { return <SiteFrame pageClass="privacy-page" current="/personvern"><Content /></SiteFrame>; }
