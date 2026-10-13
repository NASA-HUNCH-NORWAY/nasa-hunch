import Content from "@/app/content/orbital/partnere";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({title: "Partnere", description: "Støtt NASA HUNCH Norge økonomisk, eller bidra med fagkunnskap, utstyr og materialer til elevprosjekter i videregående skole.", path: "/partnere"});
export default function Page() { return <SiteFrame pageClass="partnere-page" current="/partnere"><Content /></SiteFrame>; }
