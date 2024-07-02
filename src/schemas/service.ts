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
            validation: Rule => Rule.required().min(10).max(255)
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
       
        }),

        defineField({
            name: 'short_title',
            title: 'Short Title',
            type: 'string',
            description: 'Commonly used in navbar links labels'
        }),

        defineField({
            name: 'show_banner',
            title: 'Enable Banner',
            type: 'boolean',
        }),
        defineField({
            name: 'banner_title',
            title: 'Banner Title',
            type: 'string',
        }),
        defineField({
            name: 'banner_image',
            title: 'Banner Image',
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
                metadata: [
                    'blurhash',   // Default: included
                    'lqip',       // Default: included
                    'palette',    // Default: included
                    'exif',       // Default: not included
                    'location',   // Default: not included
                ],
            },
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