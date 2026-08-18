import {defineField, defineType} from 'sanity'

export const programItem = defineType({
  name: 'programItem',
  title: 'Program',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
      description: 'Optional. Without an image, the mascot is shown instead.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image.image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Program',
        media,
      }
    },
  },
})
