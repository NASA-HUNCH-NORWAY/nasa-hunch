import {defineField, defineType} from 'sanity'

export const programsPage = defineType({
  name: 'programsPage',
  title: 'Programs page',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [{type: 'programItem'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'projectsHeading',
      title: 'Heading for student projects',
      type: 'string',
    }),
    defineField({
      name: 'projects',
      title: 'Student projects',
      type: 'array',
      of: [{type: 'projectItem'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Programs page',
      }
    },
  },
})
