import type { GlobalConfig } from 'payload'

import { canManageHome, canReadHome } from './access'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',

  access: {
    read: canReadHome,
    update: canManageHome,
  },

  fields: [
    {
      name: 'hero',
      label: 'Main introduction',
      type: 'group',
      fields: [
        {
          name: 'heading',
          label: 'Studio headline',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Short introduction',
          type: 'textarea',
          required: true,
          admin: {
            description:
              'Briefly describe the studio, its specialisation, and approach.',
          },
        },
      ],
    },
  ],
}
