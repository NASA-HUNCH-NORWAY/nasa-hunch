import type { Metadata } from "next";
import Content from "@/app/content/orbital/fagcase";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Fagcase", "description": "Fire dokumenterte HUNCH eksempler og forslag til bruk i norske fag: industriteknologi, teknologi og forskningslære, matfag og IT.", "alternates": {"canonical": "/fagcase"}};
export default function Page() { return <SiteFrame pageClass="fagcase-page" current="/fagcase" home={false}><Content /></SiteFrame>; }
