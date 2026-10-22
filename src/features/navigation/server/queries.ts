import 'server-only'

import { getPayload } from 'payload'

import config from '@payload-config'

export async function getHeader() {
  const payload = await getPayload({ config })

  return payload.findGlobal({
    slug: 'header',
    depth: 0,
    overrideAccess: false,
  })
}
