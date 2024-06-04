export default {
    name: 'siteConfig',
    type: 'document',
    title: 'Site Settings',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        initialValue: "Settings",
        readOnly: true,
        hidden: true,
      },
      {
        name: 'site_title',
        type: 'string',
        title: 'Site title',
      },
      {
        title: 'URL',
        name: 'url',
        type: 'url',
        description: 'The main site url. Used to create canonical url',
      },
      {
        title: 'Phone Number',
        name: 'phone',
        type: 'string',
      },
      {
        title: 'E-mail',
        name: 'email',
        type: 'string',
      },
      {
        title: 'Contacts Section Title',
        name: 'contactsTitle',
        type: 'string',
      },
      {
        title: "Google Maps URL",
        name: 'google_maps_url',
        type: 'string'
      },
      {
        title: 'Address',
        name: 'address',
        type: 'string',
      },
      {
        title: 'Address Line 2',
        name: 'address_line_2',
        type: 'string',
      },
      {
        title: 'Opening Hours Section Title',
        name: 'openingHoursTitle',
        type: 'string',
      },
      {
        title: 'Opening Hours Monday - Friday',
        name: 'opening_hours_mondday_friday',
        type: 'string',
      },
      {
        title: 'Opening Hours Saturday',
        name: 'opening_hours_saturday',
        type: 'string',
      },
      {
        title: 'Opening Hours Sundday',
        name: 'opening_hours_sunday',
        type: 'string',
      },
      {
        title: 'Copyright',
        name: 'copyright',
        type: 'string',
      },
      {
        title: 'Navbar Navigation',
        name: 'mainNav',
        description: 'Select menu for main navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
      {
        title: 'Footer left navigation title',
        name: 'footerLeftNavigationTitle',
        type: 'string',
      },
      {
        title: 'Footer left navigation',
        name: 'footerLeftNavigation',
        description: 'Select menu for left footer navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
      {
        title: 'Footer right navigation title',
        name: 'footerRightNavigationTitle',
        type: 'string',
      },
      {
        title: 'Footer right navigation',
        name: 'footerRightNavigation',
        description: 'Select menu for right footer navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
      {
        title: 'Footer bottom navigation',
        name: 'footerBottomNavigation',
        description: 'Select menu for bottom footer navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
      {
        name: 'og_card_image',
        title: 'OG Card Picture',
        description:'Image to show for sharing in social networks',
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
      },
    ],
  };