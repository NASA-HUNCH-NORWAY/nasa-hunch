import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro text',
      type: 'portableTextBlock',
      description: 'Shown right under the title.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'research',
      title: 'Research',
      type: 'object',
      description: 'The box about the research on the Norwegian partnership.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Article title',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'authors',
          title: 'Authors',
          type: 'string',
        }),
        defineField({
          name: 'journal',
          title: 'Journal',
          type: 'string',
        }),
        defineField({
          name: 'license',
          title: 'License',
          type: 'string',
        }),
        defineField({
          name: 'summary',
          title: 'Summary',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'doi',
          title: 'Link to the article',
          type: 'url',
          validation: (rule) => rule.uri({scheme: ['http', 'https']}),
        }),
        defineField({
          name: 'findings',
          title: 'Findings',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Shown as a numbered list on the right side of the box.',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About page',
      }
    },
  },
})
