import type { Metadata } from "next";
import Content from "@/app/content/orbital/programmet";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Programmet", "description": "Slik arbeider elever med et oppdrag i HUNCH, fra krav til testet og dokumentert løsning.", "alternates": {"canonical": "/programs"}};
export default function Page() { return <SiteFrame pageClass="programmet-page" current="/programs" home={false}><Content /></SiteFrame>; }
