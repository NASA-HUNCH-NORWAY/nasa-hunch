import {
  BarChartIcon,
  BulbOutlineIcon,
  EnvelopeIcon,
  ImagesIcon,
  InfoOutlineIcon,
  RocketIcon,
  ThLargeIcon,
  UsersIcon,
} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Forsiden')
        .icon(RocketIcon)
        .child(
          S.list()
            .title('Forsiden')
            .items([
              S.listItem()
                .title('Hero')
                .icon(RocketIcon)
                .child(S.document().schemaType('heroSection').documentId('heroSection')),
              S.listItem()
                .title('Stats')
                .icon(BarChartIcon)
                .child(S.document().schemaType('statsSection').documentId('statsSection')),
              S.listItem()
                .title('Cards')
                .icon(ThLargeIcon)
                .child(S.document().schemaType('cardsSection').documentId('cardsSection')),
              S.listItem()
                .title('Carousel')
                .icon(ImagesIcon)
                .child(S.document().schemaType('carouselSection').documentId('carouselSection')),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Om oss')
        .icon(InfoOutlineIcon)
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Programmer')
        .icon(BulbOutlineIcon)
        .child(S.document().schemaType('programsPage').documentId('programsPage')),
      S.listItem()
        .title('Teamet')
        .icon(UsersIcon)
        .child(S.document().schemaType('teamPage').documentId('teamPage')),
      S.listItem()
        .title('Kontakt')
        .icon(EnvelopeIcon)
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
    ])
