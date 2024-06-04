import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'phoneSectionTitle',
      title: 'Phone Section Title',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'addressSectionTitle',
      title: 'Address Section Title',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'addressLineTwo',
      title: 'Address Line 2',
      type: 'string',
    }),


    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
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


  ],
})
