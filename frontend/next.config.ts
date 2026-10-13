import type { NextConfig } from "next";


/**
 * Norske URL-er som pekte hit før sidene fikk engelske adresser. De tre
 * kontakt-URL-ene lå i Google som «Not found (404)». Resten er lagt til for at
 * gjettede norske adresser skal treffe riktig side i stedet for 404.
 */
const legacyRedirects = [
  { from: "/index.html", to: "/" },
  { from: "/om.html", to: "/about" },
  { from: "/programmet.html", to: "/programs" },
  { from: "/teamet.html", to: "/team" },
  { from: "/skoler.html", to: "/skoler" },
  { from: "/partnere.html", to: "/partnere" },
  { from: "/prosjektet.html", to: "/prosjekt" },
  { from: "/fagcase.html", to: "/fagcase" },
  { from: "/privacy.html", to: "/personvern" },
  { from: "/kontakt", to: "/contact" },
  { from: "/kontakt-skoler", to: "/contact" },
  { from: "/kontakt-partner", to: "/contact" },
  { from: "/om-oss", to: "/about" },
  { from: "/om", to: "/about" },
  { from: "/programmer", to: "/programs" },
  { from: "/teamet", to: "/team" },
];

/*
 * Sikkerhetshoder for alle sider. Siden har ingen tredjepartsskript, så
 * innholdsreglene kan være strenge. Next.js trenger inline-skript for
 * hydrering, og utviklingsserveren trenger eval og websocket.
 */
const dev = process.env.NODE_ENV === "development";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${dev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  async redirects() {
    return legacyRedirects.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
