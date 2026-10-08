import type { Metadata } from "next";
import Content from "@/app/content/orbital/om";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Om HUNCH", "description": "Hva NASA HUNCH er, og hvordan oppdragene kan brukes i norske videregående skoler.", "alternates": {"canonical": "/about"}};
export default function Page() { return <SiteFrame pageClass="om-page" current="/about" home={false}><Content /></SiteFrame>; }
