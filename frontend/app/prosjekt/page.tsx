import Content from "@/app/content/orbital/prosjektet";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "Ball Clamp Monopod", description: "Amerikanske elever i HUNCH utviklet og produserte et kamerafeste som astronauter testet på romstasjonen ISS i 2023.", path: "/prosjekt"});
export default function Page() { return <SiteFrame pageClass="prosjektet-page" current="/prosjekt"><Content /></SiteFrame>; }
