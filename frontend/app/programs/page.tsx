import Content from "@/app/content/orbital/programmet";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "Programmet", description: "Slik arbeider elever med et oppdrag i HUNCH: fra krav og tegning til bygget, testet og dokumentert løsning.", path: "/programs"});
export default function Page() { return <SiteFrame pageClass="programmet-page" current="/programs"><Content /></SiteFrame>; }
