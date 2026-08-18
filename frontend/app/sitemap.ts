import type { MetadataRoute } from "next";

const BASE_URL = "https://nasahunch.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ["", "/about", "/programs", "/team", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));
}
