import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import "./styles/embla.css";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/lib/seo";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NASA HUNCH Norge – romfartsoppdrag for videregående skoler",
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

const themeScript = `
  try {
    if (localStorage.getItem("nasa-hunch-theme") === "light") {
      document.documentElement.classList.add("light");
    }
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb-NO"
      className={`${josefinSans.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="mx-auto min-h-full w-full max-w-[100rem] bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
