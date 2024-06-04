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
    name: 'servicesSlider',
    title: 'Services Slider',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            title: 'Services List',
            name: 'services_list',
            description: 'Select Services to Show',
            type: 'reference',
            to: {type: 'service'},
        },
    ],
})
