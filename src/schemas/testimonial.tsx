import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
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
            name: 'body',
            type: 'array',
            of: [
                defineArrayMember({
                    title: 'Block',
                    type: 'block',
                    // Styles let you set what your user can mark up blocks with. These
                    // correspond with HTML tags, but you can set any title or value
                    // you want and decide how you want to deal with it where you want to
                    // use your content.
                    styles: [
                      { title: 'Normal', value: 'normal' },
                    ],
                    lists: [],
                    marks: {
                        decorators: [],
                        annotations:[]
                    }
                }),
            ]
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