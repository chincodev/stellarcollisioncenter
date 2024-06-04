import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'seo_title', 
            type: 'string',
            title: 'Meta Title',
            description:'Title in Search Engines',
            validation: Rule => Rule.required().min(5).max(60)
        }),
        defineField({
            name: 'seo_description', 
            type: 'string',
            title: 'Meta Description',
            description:'A short description about page',
            validation: Rule => Rule.required().min(10).max(160)
        }),
        defineField({
            name: 'seo_keywords', 
            type: 'string',
            title: 'Meta Keywords',
            description:'Separated with comma, eg: blue, yellow, black'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.unique()
        }),

        defineField({
            name: 'short_title',
            title: 'Short Title',
            type: 'string',
            description: 'Commonly used in navbar links labels'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
              isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),

        }),
        defineField({
            name: 'overview',
            title: 'Overview',
            type: 'string',
            placeholder:'Describe this area shortly',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessiblity.',
                },
            ],
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Page builder',
            of: [
                defineArrayMember({
                    name: 'defaultContentSection',
                    type: 'defaultContentSection',
                }),
                defineArrayMember({
                    name: 'servicesSlider',
                    type: 'servicesSlider',
                })
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
            description: 'description',
            image: 'coverImage'
        }
    },
  })  