'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { Header } from '@/payload-types'

type SiteNavigationProps = {
  items: Header['navigation']
}

export function SiteNavigation({ items }: SiteNavigationProps) {
  const pathname = usePathname()

  if (!items?.length) {
    return null
  }

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap items-center gap-6 sm:gap-8">
        {items.map((item, index) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <li key={item.id ?? index}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`border-b pb-1 text-sm transition-colors ${
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
