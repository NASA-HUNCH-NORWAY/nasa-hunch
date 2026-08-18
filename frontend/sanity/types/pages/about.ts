import type {PortableText} from '../objects/portableText'

export type Research = {
  heading: string | null
  title: string | null
  authors: string | null
  journal: string | null
  license: string | null
  summary: string | null
  doi: string | null
  findings: string[] | null
}

export type AboutPage = {
  title: string | null
  intro: PortableText | null
  research: Research | null
}
