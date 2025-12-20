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
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio', // Makes it easy to toggle between the two
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Resource Image',
      type: 'image',
      options: { hotspot: true },
      // This field only shows up if 'image' is selected above
      hidden: ({ document }) => document?.mediaType !== 'image',
    }),
    defineField({
      name: 'video',
      title: 'Resource Video',
      type: 'file',
      options: {
        accept: 'video/*', // Restricts uploads to video files only
      },
      // This field only shows up if 'video' is selected above
      hidden: ({ document }) => document?.mediaType !== 'video',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
  ],
})