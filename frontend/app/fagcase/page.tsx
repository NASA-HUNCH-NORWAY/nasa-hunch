import Content from "@/app/content/orbital/fagcase";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "Fagcase", description: "Fire dokumenterte HUNCH-eksempler med forslag til bruk i norske fag: industriteknologi, teknologi og forskningslære, matfag og IT.", path: "/fagcase"});
export default function Page() { return <SiteFrame pageClass="fagcase-page" current="/fagcase"><Content /></SiteFrame>; }
