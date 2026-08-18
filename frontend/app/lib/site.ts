/**
 * Organisasjonsdata som vises offentlig på nettsiden.
 *
 * Disse verdiene kreves av blant annet Google for Nonprofits, og må derfor
 * være synlige på siden. Footeren henter alt herfra.
 *
 * Kilde: Enhetsregisteret, organisasjonsnummer 937749570.
 */
export const site = {
  /** Kort navn brukt i navigasjon, titler og løpende tekst. */
  shortName: "NASA HUNCH Norge",
  /** Registrert navn i Enhetsregisteret. */
  legalName: "NASA HUNCH Norge",
  /** Organisasjonsnummer fra Enhetsregisteret (Charity ID). */
  organisationNumber: "937 749 570",
  /** Organisasjonsform i Enhetsregisteret. */
  organisationForm: "Forening/lag/innretning",
  /** Sektor i Enhetsregisteret. */
  sector: "Ideelle organisasjoner",
  /**
   * Formålet slik det er registrert i Enhetsregisteret.
   * Adressen i registeret står med «c/o Ina Christiansen». Den linjen vises
   * ikke på nettsiden, siden gateadressen alene dekker kravet om synlig
   * fysisk adresse.
   */
  purpose:
    "Ideell driftsforening med formål å administrere og drifte NASA HUNCH-programmet (High Schools United with NASA to Create Hardware) i Norge.",
  /** Offisiell forretningsadresse. */
  address: {
    street: "Buskerudveien 27B",
    postalCode: "3024",
    city: "Drammen",
    country: "Norge",
  },
  /** Brønnøysundregistrene, for de som vil kontrollere opplysningene. */
  registryUrl: "https://virksomhet.brreg.no/nb/oppslag/enheter/937749570",
} as const;

export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}`;
