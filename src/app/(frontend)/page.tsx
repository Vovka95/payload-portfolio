import type { Metadata } from 'next'

import { Hero } from '@/features/home/components/hero'
import { getHome } from '@/features/home/server/queries'

export const metadata: Metadata = {
  title: {
    absolute: 'Architecture & Interiors',
  },
  description:
    'Thoughtful architecture and interiors for living, working, and gathering.',
}

export default async function HomePage() {
  const home = await getHome()

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-6 sm:px-10">
      <Hero data={home.hero} />
    </main>
  )
}
