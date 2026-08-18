import type { NextConfig } from "next";


/**
 * Norske URL-er som pekte hit før sidene fikk engelske adresser. De tre
 * kontakt-URL-ene lå i Google som «Not found (404)». Resten er lagt til for at
 * gjettede norske adresser skal treffe riktig side i stedet for 404.
 */
const legacyRedirects = [
  { from: "/kontakt", to: "/contact" },
  { from: "/kontakt-skoler", to: "/contact" },
  { from: "/kontakt-partner", to: "/contact" },
  { from: "/om-oss", to: "/about" },
  { from: "/om", to: "/about" },
  { from: "/programmer", to: "/programs" },
  { from: "/teamet", to: "/team" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
