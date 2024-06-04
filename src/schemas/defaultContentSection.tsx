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
    name: 'defaultContentSection',
    title: 'Default Content Section',
    type: 'object',
    fields: [
        defineField({
            name: 'contentBlock',
            title: 'Content Block',
            type: 'array',
            of: [
                { 
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        // {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'H5', value: 'h5'},
                        {title: 'H6', value: 'h6'},
                        {title: 'Quote', value: 'blockquote'}
                    ]
                },
            ],
        }),
        defineField({
            name: 'image',
            title: 'Image',
            description:'Image reference about text',
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
            name: 'icon',
            title: 'Icon',
            description:'Icon to show at top of text',
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
            title: 'Image Position',
            name: 'imagePosition',
            type: 'string',
            initialValue: 'bottom',
            options: {
                list: [
                    {
                        title: 'Left', 
                        value: 'left'
                    },
                    {
                        title: 'Right', 
                        value: 'right'
                    },
                    {
                        title: 'Top', 
                        value: 'top'
                    },
                    {
                        title: 'Bottom', 
                        value: 'bottom'
                    }
                ], // <-- predefined values
            }
        })
    ],
    preview: {
        select: {
            title: 'contentBlock',
        }
    },
})
