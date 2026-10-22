import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '@/styles/globals.css'

import { SiteHeader } from '@/shared/components/site-header'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Personal portfolio: selected projects, experience, and contact information.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
