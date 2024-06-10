import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'map',
  title: 'Map',
  type: 'object',
  fields: [
    defineField({
      name: 'previewTitle',
      title: 'previewTitle',
      type: 'string',
      initialValue:'Map URL',
      hidden: true,
      readOnly: true
    }),
    defineField({
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
    }),
    {
      title: "Google Maps URL",
      name: 'google_maps_url',
      type: 'string',
      description: 'Leave empty to use the map url at settings section'
    },
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
