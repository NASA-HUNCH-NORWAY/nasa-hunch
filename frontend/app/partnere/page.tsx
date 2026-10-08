import type { Metadata } from "next";
import Content from "@/app/content/orbital/partnere";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Partnere", "description": "Støtt NASA HUNCH Norge økonomisk, eller bidra med fagkunnskap, utstyr og materialer til elevprosjekter.", "alternates": {"canonical": "/partnere"}};
export default function Page() { return <SiteFrame pageClass="partnere-page" current="/partnere" home={false}><Content /></SiteFrame>; }
