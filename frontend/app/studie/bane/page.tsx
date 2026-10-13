import type { Metadata } from "next";
import Content from "@/app/content/orbital/index";
import { SiteFrame } from "@/app/components/orbital/SiteFrame";
import { OrbitThread } from "@/app/components/orbital/OrbitThread";

// Designstudie, ikke en del av nettstedet. Lenkes ikke fra noen side og indekseres ikke.
export const metadata: Metadata = { title: "Studie: én bane", robots: { index: false, follow: false } };

export default function Page() {
 return <SiteFrame pageClass="home orbit-study" current="/" home={true}><Content /><OrbitThread /></SiteFrame>;
}
