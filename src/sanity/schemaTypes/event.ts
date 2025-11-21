import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
    }),
    defineField({
      name: 'time',
      title: 'Event Time',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'string',
    }),
     defineField({
      name: 'speaker',
      title: 'speaker',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Event Link',
      type: 'url',
    }),
  ],
})
