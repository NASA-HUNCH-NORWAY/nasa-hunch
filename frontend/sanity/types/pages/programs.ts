import type {ImageWithAlt} from '../objects/image'
import type {PortableText} from '../objects/portableText'

export type Program = {
  _key: string
  name: string
  description: string
  image: ImageWithAlt | null
}

export type StudentProject = {
  _key: string
  title: string
  school: string | null
  period: string | null
  outcome: string | null
  steps: string[] | null
}

export type ProgramsPage = {
  title: string | null
  intro: PortableText | null
  programs: Program[] | null
  projectsHeading: string | null
  projects: StudentProject[] | null
}
