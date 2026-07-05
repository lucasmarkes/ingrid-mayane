'use client'

import { Ballerina, Divider } from './art'
import { IconCalendar, IconClock, IconPin } from './icons'
import { mapsHref } from '@/lib/invite-config'
import { Panel } from './panel'
import { Reveal } from './reveal'
import { BodyText, Eyebrow, ScriptTitle } from './typography'

function DetailItem({
  icon,
  label,
  value,
  sub,
  wide = false,
  children,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub: string
  wide?: boolean
  children?: React.ReactNode
}) {
  return (
    <div
      className={`flex flex-col items-center rounded-[4px] border border-[rgba(160,109,107,.28)] bg-blush-1/40 px-4 py-5 text-center ${
        wide ? 'sm:col-span-2' : ''
      }`}
    >
      <span className="text-accentrose">{icon}</span>
      <span className="mt-3 font-caps text-[10px] uppercase tracking-[0.32em] text-mutedrose">
        {label}
      </span>
      <span className="mt-1 font-serifd text-[clamp(18px,4.6vw,22px)] font-medium text-ink">
        {value}
      </span>
      <span className="mt-0.5 font-serifd text-[15px] italic text-body">
        {sub}
      </span>
      {children}
    </div>
  )
}

export function ConviteSection() {
  return (
    <section id="convite" className="flex flex-col items-center">
      <Panel>
        {/* marca d'água */}
        <Ballerina
          gradientId="rose-b-convite"
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 bottom-0 h-[70%] w-auto opacity-[0.05]"
        />
        <div className="relative text-center">
          <Reveal>
            <Eyebrow>O convite</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <ScriptTitle className="mt-2">Ingrid Mayane</ScriptTitle>
          </Reveal>
          <Reveal delay={0.14}>
            <Divider />
          </Reveal>
          <Reveal delay={0.2}>
            <BodyText className="max-w-[30ch] italic">
              Tenho a honra de convidá-lo(a) para celebrar os meus 15 anos em
              uma noite inesquecível.
            </BodyText>
          </Reveal>
          <Reveal delay={0.26} className="mt-8">
            <div className="grid grid-cols-1 gap-3 text-left min-[460px]:grid-cols-2">
              <DetailItem
                icon={<IconCalendar className="h-6 w-6" />}
                label="Data"
                value="Sexta-feira"
                sub="28 de agosto de 2026"
              />
              <DetailItem
                icon={<IconClock className="h-6 w-6" />}
                label="Horário"
                value="22h"
                sub="recepção dos convidados"
              />
              <DetailItem
                icon={<IconPin className="h-6 w-6" />}
                label="Local"
                value="Di Branco Lounge"
                sub="Av. Dezessete de Agosto, 2513 — Casa Forte"
                wide
              >
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 font-caps text-[11px] uppercase tracking-[0.24em] text-accentrose underline decoration-[rgba(160,109,107,.5)] underline-offset-4 transition-colors hover:text-ink"
                >
                  ver no mapa
                </a>
              </DetailItem>
            </div>
          </Reveal>
        </div>
      </Panel>
    </section>
  )
}
