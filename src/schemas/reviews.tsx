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
    name: 'reviews',
    title: 'Reviews',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            title: 'Reviews List',
            name: 'reviews_list',
            description: 'Select Reviews to Show',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'testimonial'}]
            }],
        },
    ],
})
