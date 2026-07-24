import { HeroSection } from '@/components/invite/hero-section'
import { Petals } from '@/components/invite/petals'

export const metadata = {
  title: 'Save the Date · Ingrid Mayane · 15 Anos',
  description: 'Convite virtual.',
  openGraph: {
    title: 'Save the Date · Ingrid Mayane · 15 Anos',
    description: 'Convite virtual.',
    images: [
      {
        url: '/og/save-the-date.jpg',
        width: 726,
        height: 1024,
        alt: 'Save the Date — Ingrid Mayane, 28/08/2026',
      },
    ],
  },
}

export default function SaveTheDatePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-watercolor-page px-[clamp(12px,4vw,28px)] py-[clamp(32px,8vw,72px)]">
      <Petals />
      <div className="relative z-10 mx-auto w-full max-w-[560px]">
        <HeroSection />
      </div>
    </main>
  )
}
