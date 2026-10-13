import Content from "@/app/content/orbital/index";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "NASA HUNCH Norge: elever bygger for romfart", description: "Praktiske romfartsoppdrag for elever i videregående skole, gratis for skolen. Utforsk fagcase, finn et opplegg for skolen og støtt NASA HUNCH Norge.", path: "/", absoluteTitle: true});
export default function Page() { return <SiteFrame pageClass="home" current="/" home={true}><Content /></SiteFrame>; }
