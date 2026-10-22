import type { About } from '@/payload-types'

type ServicesProps = {
  heading: About['servicesHeading']
  items: About['services']
}

export function Services({ heading, items }: ServicesProps) {
  if (!items?.length) {
    return null
  }

  return (
    <section
      aria-labelledby="services-heading"
      className="border-t border-line py-16"
    >
      <h2
        id="services-heading"
        className="text-3xl font-semibold tracking-tight"
      >
        {heading}
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {items.map((service, index) => (
          <article
            key={service.id ?? index}
            className="border-t border-line pt-6"
          >
            <span aria-hidden="true" className="font-mono text-sm text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="mt-5 text-xl font-medium">{service.title}</h3>

            <p className="mt-4 whitespace-pre-line leading-relaxed text-muted">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
