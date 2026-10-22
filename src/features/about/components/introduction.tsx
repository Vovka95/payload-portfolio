import Image from 'next/image'

import type { About } from '@/payload-types'

type IntroductionProps = {
  data: About['introduction']
}

export function Introduction({ data }: IntroductionProps) {
  const image = data.image && typeof data.image === 'object' ? data.image : null

  return (
    <section className="grid items-start gap-10 py-20 md:grid-cols-2">
      <div>
        <h1 className="text-5xl font-semibold tracking-tight">
          {data.heading}
        </h1>

        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-muted">
          {data.description}
        </p>
      </div>

      {image?.url && (
        <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-surface">
          <Image
            src={image.url}
            alt={image.alt || ''}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </section>
  )
}
