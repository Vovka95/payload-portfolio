import Link from 'next/link'

import { getHeader } from '@/features/navigation/server/queries'
import { SiteNavigation } from './site-navigation'

export async function SiteHeader() {
  const header = await getHeader()

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 sm:px-10">
        <Link
          href="/"
          aria-label={`${header.brandName} home`}
          className="flex items-baseline gap-2"
        >
          <span className="text-2xl font-semibold tracking-tight">
            {header.brandName}
          </span>

          {header.brandCaption && (
            <span className="text-xs uppercase tracking-widest text-muted">
              {header.brandCaption}
            </span>
          )}
        </Link>

        <SiteNavigation items={header.navigation} />
      </div>
    </header>
  )
}
