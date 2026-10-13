import Content from "@/app/content/orbital/teamet";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "Teamet bak", description: "Menneskene bak NASA HUNCH Norge: daglig leder, styreleder og økonomiansvarlig i den ideelle foreningen.", path: "/team"});
export default function Page() { return <SiteFrame pageClass="teamet-page" current="/team"><Content /></SiteFrame>; }
