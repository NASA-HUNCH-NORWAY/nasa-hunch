import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/seo";

const ROUTES = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/programs", priority: 0.8 },
  { path: "/team", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/skoler", priority: 0.9 },
  { path: "/partnere", priority: 0.8 },
  { path: "/prosjekt", priority: 0.8 },
  { path: "/fagcase", priority: 0.8 },
  { path: "/personvern", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
