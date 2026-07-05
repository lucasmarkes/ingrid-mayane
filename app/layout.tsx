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

export const metadata: Metadata = {
  title: 'Ingrid Mayane · 15 Anos',
  description:
    'Convite digital para a festa de 15 anos da Ingrid Mayane — 28 de agosto de 2026, Recife.',
  generator: 'v0.app',
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
