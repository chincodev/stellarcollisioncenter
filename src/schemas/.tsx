import { BookIcon } from '@sanity/icons'
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
    name: 'faq',
    title: 'Faq',
    type: 'object',
    fields: [
        defineField({
            name: 'previewTitle',
            title: 'previewTitle',
            type: 'string',
            initialValue:'Questions & answers',
            hidden: true,
            readOnly: true
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: "questionItem" }]
        }),
    ],
    preview: {
        select: {
            title: 'previewTitle',
            // slug: 'slug',
            // description: 'description',
            // image: 'coverImage'
        }
    },
})
