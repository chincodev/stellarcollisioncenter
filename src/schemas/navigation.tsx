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
            name: "items",
            type: "array",
            title: "Navigation items",
            of: [{
              name: 'page',
              type: 'reference',
              description: 'Select the page that this route should point to',
              to: [
                {
                  type: 'page',
                },{
                  type: 'service',
                }
              ]
              }]
          }      
    ]
}