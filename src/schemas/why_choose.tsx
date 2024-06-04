import { defineArrayMember, defineField, defineType } from 'sanity'

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
    name: 'why_choose',
    title: 'Why Choose',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "features",
            type: "array",
            title: "Features",
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'feature',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            description:'Icon to show in the feature',
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
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                    ]
                }),
            ],
        }),
    ],
})