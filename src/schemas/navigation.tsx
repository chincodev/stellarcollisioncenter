//File name: navigation.js
//File location: schemas/documents

import { GrNavigate } from "react-icons/gr";

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: GrNavigate,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
          },
          {
            name: 'navId',
            type: 'slug',
            title: "Navigation Id"
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
              isUnique: (value, context) => context.defaultIsUnique(value, context),
            },

        },
          {
            name: "items",
            type: "array",
            title: "Navigation items",
            of: [{
              name: 'item',
              type: 'reference',
              description: 'Select the page that this route should point to',
              to: [
                {
                  type: 'page',
                },{
                  type: 'service',
                },{
                  type: 'navigation',
                }
              ]
              }]
          }      
    ]
} 