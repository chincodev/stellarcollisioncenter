import { defineField, defineType } from 'sanity'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Button Url',
            type: 'link',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'picture',
            title: 'picture',
            description:'Image to show for sharing in social networks',
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
    ],
})
