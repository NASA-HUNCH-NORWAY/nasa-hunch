import type { Metadata } from "next";
import Content from "@/app/content/orbital/privacy";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Personvern", "description": "Slik behandler NASA HUNCH Norge opplysninger sendt inn via kontaktskjema og nyhetsbrev.", "alternates": {"canonical": "/personvern"}};
export default function Page() { return <SiteFrame pageClass="privacy-page" current="/personvern" home={false}><Content /></SiteFrame>; }
