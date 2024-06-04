export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
      {
        title: 'Internal link to another document',
        name: 'internalLink',
        type: 'reference',
        description: 'Locate a document you want to link to',
        to: [{type: 'page'}, {type: 'service'}], 
      },
    ]
  };