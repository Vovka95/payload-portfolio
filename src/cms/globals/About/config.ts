import type { GlobalConfig } from 'payload'

import { canManageAbout, canReadAbout } from './access'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About',

  access: {
    read: canReadAbout,
    update: canManageAbout,
  },

  fields: [
    {
      name: 'introduction',
      label: 'Introduction',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'About',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'servicesHeading',
      label: 'Services section heading',
      type: 'text',
      required: true,
      defaultValue: 'Our practice',
    },
    {
      name: 'services',
      type: 'array',
      labels: {
        singular: 'Service',
        plural: 'Services',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
