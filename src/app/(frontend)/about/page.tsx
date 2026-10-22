import type { Metadata } from 'next'

import { Introduction } from '@/features/about/components/introduction'
import { Services } from '@/features/about/components/services'
import { getAbout } from '@/features/about/server/queries'

export const metadata: Metadata = {
  title: 'About',
  description: 'Discover our architectural approach, and our services.',
}

export default async function AboutPage() {
  const about = await getAbout()

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-6 sm:px-10">
      <Introduction data={about.introduction} />

      <Services heading={about.servicesHeading} items={about.services} />
    </main>
  )
}
