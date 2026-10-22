import 'server-only'

import { getPayload } from 'payload'

import config from '@payload-config'

export async function getAbout() {
  const payload = await getPayload({ config })

  return payload.findGlobal({
    slug: 'about',
    depth: 1,
    overrideAccess: false,
  })
}
