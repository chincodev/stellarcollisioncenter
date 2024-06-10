import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
        defineField({
            name: 'name', 
            type: 'string',
            title: 'Name',
            description:'Name of the person',
            validation: Rule => Rule.required().min(5).max(60)
        }),
        defineField({
            name: 'role', 
            type: 'string',
            title: 'role',
            description:'Role of the person',
            initialValue: "Customer",
            validation: Rule => Rule.required().min(3).max(60)
        }),
        defineField({
            title: 'Body',
            name: 'text',
            type: 'string',
        }),
        defineField({
            name: 'profile_picture',
            title: 'Picture',
            description:'Picture of the person',
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
    preview: {
        select: {
            title: 'name',
            // slug: 'slug',
            // description: 'description',
            // image: 'coverImage'
        }
    },
  })  