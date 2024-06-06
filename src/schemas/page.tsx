// ./schemas/pageType.ts

import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Pages',
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
            type: 'string',
            title: 'Title',
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
            name: 'pageBuilder',
            type: 'array',
            title: 'Page builder',
            of: [
                defineArrayMember({
                    name: 'faq',
                    type: 'faq',
                }),
                defineArrayMember({
                    name: 'why_choose',
                    type: 'why_choose',
                }),
                defineArrayMember({
                    name: 'hero',
                    type: 'hero',
                }),
                defineArrayMember({
                    name: 'reviews',
                    type: 'reviews',
                }),
                defineArrayMember({
                    name: 'defaultContentSection',
                    type: 'defaultContentSection',
                })
            ],
        }),
    ],
    icon: DocumentIcon,
})
