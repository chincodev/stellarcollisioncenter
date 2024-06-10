import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({
      name: 'previewTitle',
      title: 'previewTitle',
      type: 'string',
      initialValue:'Contact Form',
      hidden: true,
      readOnly: true
    }),
    defineField({
      name: 'phoneSectionTitle',
      title: 'Phone Section Title',
      type: 'string',
    }),
    defineField({
      name: 'addressSectionTitle',
      title: 'Address Section Title',
      type: 'string',
    }),
    defineField({
      name: 'form_title',
      title: 'Form Title',
      type: 'string',
    }),
    defineField({
      name: 'namePlaceholder',
      title: 'Name Input Placeholder',
      type: 'string',
    }),
    defineField({
      name: 'emailPlaceholder',
      title: 'Email Input Placeholder',
      type: 'string',
    }),
    defineField({
      name: 'SubjectPlaceholder',
      title: 'Subject Input Placeholder',
      type: 'string',
    }),
    defineField({
      name: 'messagePlaceholder',
      title: 'Message Input Placeholder',
      type: 'string',
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
    })
  ],
  preview: {
    select: {
        title: 'previewTitle',
        // slug: 'slug',
        // description: 'description',
        // image: 'coverImage'
    }
  },
})
