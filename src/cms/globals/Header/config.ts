import type { GlobalConfig } from 'payload'
import { canManageHeader, canReadHeader } from './access'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',

  admin: {
    group: 'Site settings',
  },

  access: {
    read: canReadHeader,
    update: canManageHeader,
  },

  fields: [
    {
      name: 'brandName',
      type: 'text',
      required: true,
      defaultValue: 'FORMA',
    },
    {
      name: 'brandCaption',
      type: 'text',
      defaultValue: 'Studio',
    },
    {
      name: 'navigation',
      type: 'array',
      maxRows: 6,
      defaultValue: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/about',
        },
      ],
      fields: [
        {
          name: 'label',
          label: 'Link text',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Page',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Home',
              value: '/',
            },
            {
              label: 'About',
              value: '/about',
            },
          ],
        },
      ],
    },
  ],
}
