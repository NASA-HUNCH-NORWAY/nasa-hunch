import { StructuredData } from "@/app/components/StructuredData";
import type { Metadata } from "next";
import "./globals.css";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NASA HUNCH Norge: romfartsoppdrag for videregående skoler",
    template: "%s | NASA HUNCH Norge",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "education",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "NASA HUNCH Norge",
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "nb_NO",
    images: [
      {
        url: "/NasaHunchOG.png",
        width: 1200,
        height: 630,
        alt: "NASA HUNCH Norge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NASA HUNCH Norge",
    description: DEFAULT_DESCRIPTION,
    images: ["/NasaHunchOG.png"],
  },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
 return <html lang="nb-NO"><body><StructuredData />{children}</body></html>;
}
