import type { Metadata } from "next";
import { addressLine, site } from "@/app/lib/site";

export const SITE_URL = "https://www.nasahunch.no";

export const SITE_NAME = "NASA HUNCH Norge";

export const DEFAULT_DESCRIPTION =
  "NASA HUNCH Norge gir videregående skoler muligheter til å utforske praktiske oppgaver inspirert av behov hos NASA.";

const OG_IMAGE = { url: "/NasaHunchOG.png", width: 1200, height: 630, alt: SITE_NAME };

/** Absolutt URL, brukt i metadata og strukturerte data. */
export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Metadata for én side. Next.js slår sammen metadata grunt, så openGraph og
 * twitter må settes på hver side. Ellers arver alle sidene forsidens
 * forhåndsvisning når lenken deles.
 */
export function pageMetadata({ title, description, path, absoluteTitle = false }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const shareTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: shareTitle, description, type: "website", url: absoluteUrl(path), siteName: SITE_NAME, locale: "nb_NO", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [OG_IMAGE.url] },
  };
}

type OrganizationInput = {
  email?: string | null;
  socials?: (string | null | undefined)[];
};

/**
 * Organisasjonen, som strukturerte data. Google bruker dette til
 * kunnskapspanel og til å knytte nettsiden til organisasjonsnummeret.
 */
export function organizationSchema({ email, socials }: OrganizationInput = {}) {
  const sameAs = (socials ?? []).filter((url): url is string => {
    if (!url) return false;

    try {
      // Tomme profillenker som «https://www.facebook.com/» sier ingenting om
      // organisasjonen, og skal ikke stå i sameAs.
      return new URL(url).pathname.replace(/\//g, "").length > 0;
    } catch {
      return false;
    }
  });

  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_URL}/#organisasjon`,
    name: SITE_NAME,
    legalName: site.legalName,
    alternateName: "NASA HUNCH Norway",
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    image: `${SITE_URL}/NasaHunchOG.png`,
    description: site.purpose,
    foundingDate: "2026-05-07",
    areaServed: { "@type": "Country", name: "Norge" },
    knowsLanguage: ["nb-NO", "en"],
    taxID: site.organisationNumber.replace(/\s/g, ""),
    identifier: {
      "@type": "PropertyValue",
      name: "Organisasjonsnummer",
      value: site.organisationNumber.replace(/\s/g, ""),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: "NO",
    },
    ...(email ? { email } : {}),
    ...(sameAs.length ? { sameAs: [...sameAs, site.registryUrl] } : { sameAs: [site.registryUrl] }),
  };
}

/** Selve nettstedet, slik at søkemotorer forstår navn og språk. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#nettsted`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "nb-NO",
    publisher: { "@id": `${SITE_URL}/#organisasjon` },
  };
}

/** Brødsmulesti for undersidene. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Forsiden", path: "/" },
      ...items,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Adressen som én linje, for bruk i metadata. */
export const postalAddressLine = addressLine;
