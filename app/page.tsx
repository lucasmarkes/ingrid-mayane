import { ConviteSection } from '@/components/invite/convite-section'
import { Petals } from '@/components/invite/petals'
import { PresentesSection } from '@/components/invite/presentes-section'
import { RsvpSection } from '@/components/invite/rsvp-section'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-watercolor-page px-[clamp(12px,4vw,28px)] pb-16">
      <Petals />
      <div className="relative z-10 mx-auto flex max-w-[560px] flex-col gap-[clamp(26px,6vw,64px)] pt-[clamp(32px,8vw,72px)]">
        <ConviteSection />
        <PresentesSection />
        <RsvpSection />
      </div>
    </main>
  )
}
