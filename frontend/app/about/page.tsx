import Content from "@/app/content/orbital/om";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "Om HUNCH", description: "Hva NASA HUNCH er, hvordan programmet startet i USA, og hvordan oppdragene kan brukes i norske videregående skoler.", path: "/about"});
export default function Page() { return <SiteFrame pageClass="om-page" current="/about"><Content /></SiteFrame>; }
