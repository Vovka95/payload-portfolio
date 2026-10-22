import Link from 'next/link'

import type { Home } from '@/payload-types'

type HeroProps = {
  data: Home['hero']
}

export function Hero({ data }: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="py-20 sm:py-32">
      <h1
        id="hero-heading"
        className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl"
      >
        {data.heading}
      </h1>

      <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-muted">
        {data.description}
      </p>
    </section>
  )
}
