import {defineField, defineType} from 'sanity'

export const teamMemberItem = defineType({
  name: 'teamMemberItem',
  title: 'Person',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Optional profile link, for example LinkedIn.',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'imageWithAlt',
      description: 'Optional. Without a photo, the initials are shown instead.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image.image',
    },
  },
})
