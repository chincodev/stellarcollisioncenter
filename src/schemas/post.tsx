import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'
import tagType from './tag'
import categoryType from './category'


export default defineType({
    name: 'post',
    title: 'Post',
    icon: BookIcon,
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
            name: 'og_card_image',
            title: 'OG Card Picture',
            description:'Image to show for sharing in social networks',
            type: 'image',
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
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
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
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: 'caption',
                      type: 'string',
                      title: 'Image caption',
                      description: 'Caption displayed below the image.'
                    },
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      description: 'Important for SEO and accessiblity.',
                    },
                  ],
                }
            ],
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        }),
        defineField({
            name: 'background',
            title: 'Breadcumb Background',
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
            name: 'coverImage',
            title: 'Article Main Image',
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
            name: 'date',
            title: 'Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: authorType.name },
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: { type: tagType.name },
                }
            ]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: categoryType.name },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            date: 'date',
            media: 'coverImage',
        },
        prepare({ title, media, author, date }) {
            const subtitles = [
                author && `by ${author}`,
                date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
            ].filter(Boolean)
            return { title, media, subtitle: subtitles.join(' ') }
        },
    },
})
