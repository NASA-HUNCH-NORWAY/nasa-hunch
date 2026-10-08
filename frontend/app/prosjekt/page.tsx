import type { Metadata } from "next";
import Content from "@/app/content/orbital/prosjektet";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
export const metadata: Metadata = {"title": "Ball Clamp Monopod", "description": "Amerikanske elever utviklet et kamerafeste som ble testet på ISS i 2023.", "alternates": {"canonical": "/prosjekt"}};
export default function Page() { return <SiteFrame pageClass="prosjektet-page" current="/prosjekt" home={false}><Content /></SiteFrame>; }
