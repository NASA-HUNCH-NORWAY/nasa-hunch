import Content from "@/app/content/orbital/skoler";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "For skoler", description: "Gratis for skolen. Se hvilke fag HUNCH passer i, hva som må være på plass, og hvordan en videregående skole kommer i gang.", path: "/skoler"});
export default function Page() { return <SiteFrame pageClass="skoler-page" current="/skoler"><Content /></SiteFrame>; }
