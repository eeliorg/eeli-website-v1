import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Download or External Link',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
  ],
})
