import type { Metadata } from "next";
import Content from "@/app/content/orbital/skoler";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "For skoler", "description": "Mulige fagkoblinger og praktiske avklaringer for norske videregående skoler.", "alternates": {"canonical": "/skoler"}};
export default function Page() { return <SiteFrame pageClass="skoler-page" current="/skoler" home={false}><Content /></SiteFrame>; }
