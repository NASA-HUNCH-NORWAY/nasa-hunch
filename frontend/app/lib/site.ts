/**
 * Organisasjonsdata som vises offentlig på nettsiden.
 *
 * Disse verdiene kreves av blant annet Google for Nonprofits, og må derfor
 * være synlige på siden (footer og «Om oss»). Endre kun her – footer og
 * «Om oss» henter alt fra denne filen.
 */
export const site = {
  /** Kort navn brukt i navigasjon, titler og løpende tekst. */
  shortName: "NASA HUNCH Norge",
  /** Juridisk navn på organisasjonen som driver nasahunch.no. */
  legalName: "NORSTEC – Norwegian Space Technology Collective",
  /** Organisasjonsnummer fra Enhetsregisteret (Charity ID). */
  organisationNumber: "933 031 152",
  /** Organisasjonsform i Enhetsregisteret. */
  organisationForm: "Forening/lag/innretning",
  /** Registrering som dokumenterer frivillig, ideell virksomhet. */
  registrations: [
    "Registrert i Enhetsregisteret",
    "Registrert i Frivillighetsregisteret",
  ],
  /** Offisiell forretningsadresse. */
  address: {
    street: "Sem Sælands vei 1",
    postalCode: "7034",
    city: "Trondheim",
    country: "Norge",
  },
  /** Brønnøysundregistrene, for de som vil kontrollere opplysningene. */
  registryUrl: "https://virksomhet.brreg.no/nb/oppslag/enheter/933031152",
} as const;

export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}`;
