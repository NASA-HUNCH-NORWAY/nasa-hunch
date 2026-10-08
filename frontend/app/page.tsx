import type { Metadata } from "next";
import Content from "@/app/content/orbital/index";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Elever bygger for romfart", "description": "Praktiske romfartsprosjekter for elever i videregående skole. Utforsk fagcase, finn et opplegg for skolen og støtt NASA HUNCH Norge.", "alternates": {"canonical": "/"}};
export default function Page() { return <SiteFrame pageClass="home" current="/" home={true}><Content /></SiteFrame>; }
