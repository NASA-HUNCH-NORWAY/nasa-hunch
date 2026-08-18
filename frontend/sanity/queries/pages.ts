import {imageWithAltFields} from './fragments'

export const aboutPageQuery = `
  *[_type == "aboutPage"][0] {
    title,
    intro,
    research {
      heading,
      title,
      authors,
      journal,
      license,
      summary,
      doi,
      findings
    }
  }
`

export const programsPageQuery = `
  *[_type == "programsPage"][0] {
    title,
    intro,
    programs[] {
      _key,
      name,
      description,
      image {
        ${imageWithAltFields}
      }
    },
    projectsHeading,
    projects[] {
      _key,
      title,
      school,
      period,
      outcome,
      steps
    }
  }
`

export const teamPageQuery = `
  *[_type == "teamPage"][0] {
    title,
    intro,
    membersHeading,
    members[] {
      _key,
      name,
      role,
      link,
      image {
        ${imageWithAltFields}
      }
    },
    partnersHeading,
    partners[] {
      _key,
      name,
      role,
      link
    }
  }
`

export const contactPageQuery = `
  *[_type == "contactPage"][0] {
    title,
    lead
  }
`
