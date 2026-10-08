import type { Metadata } from "next";
import Content from "@/app/content/orbital/teamet";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Teamet bak", "description": "Tea Rasmussen, daglig leder. Freider Fløan, styreleder. Chris Jensen, økonomiansvarlig i NASA HUNCH Norge.", "alternates": {"canonical": "/team"}};
export default function Page() { return <SiteFrame pageClass="teamet-page" current="/team" home={false}><Content /></SiteFrame>; }
