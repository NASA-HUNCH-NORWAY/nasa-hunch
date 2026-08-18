import type {ImageWithAlt} from '../objects/image'
import type {PortableText} from '../objects/portableText'

export type TeamMember = {
  _key: string
  name: string
  role: string
  link: string | null
  image: ImageWithAlt | null
}

export type Partner = {
  _key: string
  name: string
  role: string
  link: string | null
}

export type TeamPage = {
  title: string | null
  intro: PortableText | null
  membersHeading: string | null
  members: TeamMember[] | null
  partnersHeading: string | null
  partners: Partner[] | null
}
