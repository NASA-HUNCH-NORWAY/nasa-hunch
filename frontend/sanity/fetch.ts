import {
  aboutPageQuery,
  contactPageQuery,
  heroSectionQuery,
  homePageQuery,
  programsPageQuery,
  teamPageQuery,
} from "@/sanity/queries";
import type {
  AboutPage,
  ContactPage,
  HeroSection,
  HomePage,
  ProgramsPage,
  TeamPage,
} from "@/sanity/types";

const SANITY_PROJECT_ID = "4k911a4x";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2025-05-30";
const REVALIDATE_SECONDS = 60;

type SanityQueryResponse<T> = {
  result: T;
};

export async function sanityFetch<T>(query: string) {
  const params = new URLSearchParams({ query });
  const response = await fetch(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?${params}`,
    {
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch content from Sanity (${response.status})`);
  }

  const data = (await response.json()) as SanityQueryResponse<T>;

  return data.result;
}

export function getHomePage() {
  return sanityFetch<HomePage>(homePageQuery);
}

export function getHeroSection() {
  return sanityFetch<HeroSection | null>(heroSectionQuery);
}

export function getAboutPage() {
  return sanityFetch<AboutPage | null>(aboutPageQuery);
}

export function getProgramsPage() {
  return sanityFetch<ProgramsPage | null>(programsPageQuery);
}

export function getTeamPage() {
  return sanityFetch<TeamPage | null>(teamPageQuery);
}

export function getContactPage() {
  return sanityFetch<ContactPage | null>(contactPageQuery);
}
