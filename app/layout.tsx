import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cinzel, Cormorant_Garamond, Pinyon_Script } from 'next/font/google'
import './globals.css'

const pinyon = Pinyon_Script({
  variable: '--font-script',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-serifd',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const cinzel = Cinzel({
  variable: '--font-caps',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ingrid-mayane.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ingrid Mayane · 15 Anos',
  description:
    'Convite digital para a festa de 15 anos da Ingrid Mayane — 28 de agosto de 2026, Recife.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ingrid Mayane · 15 Anos',
    title: 'Ingrid Mayane · 15 Anos',
    description:
      'Guarde a data: 28 de agosto de 2026. O convite será enviado em breve!',
    images: [
      {
        url: '/og/ingrid-mayane.jpg',
        width: 2177,
        height: 3080,
        alt: 'Ingrid Mayane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ingrid Mayane · 15 Anos',
    description:
      'Guarde a data: 28 de agosto de 2026. O convite será enviado em breve!',
    images: ['/og/ingrid-mayane.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#f2d9d5',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${pinyon.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <body className="bg-page font-serifd antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
