import {defineField, defineType} from 'sanity'

export const teamPage = defineType({
  name: 'teamPage',
  title: 'Team page',
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
      name: 'membersHeading',
      title: 'Heading for people',
      type: 'string',
    }),
    defineField({
      name: 'members',
      title: 'People',
      type: 'array',
      of: [{type: 'teamMemberItem'}],
    }),
    defineField({
      name: 'partnersHeading',
      title: 'Heading for partners',
      type: 'string',
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{type: 'partnerItem'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Team page',
      }
    },
  },
})
