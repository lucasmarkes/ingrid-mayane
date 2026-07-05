'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Divider } from './art'
import { IconChat, IconGift, IconHeart } from './icons'
import { whatsappHref } from '@/lib/invite-config'
import { Panel } from './panel'
import { Reveal } from './reveal'
import { BodyText, Eyebrow, ScriptTitle } from './typography'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function RsvpSection() {
  const reduce = useReducedMotion()
  return (
    <section id="rsvp" className="flex flex-col items-center">
      <Panel>
        <div className="relative text-center">
          <Reveal>
            <IconHeart className="mx-auto h-8 w-8 text-btn-b" />
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow>Presença</Eyebrow>
          </Reveal>
          <Reveal delay={0.14}>
            <ScriptTitle className="mt-2">Confirme sua presença</ScriptTitle>
          </Reveal>
          <Reveal delay={0.2}>
            <Divider />
          </Reveal>
          <Reveal delay={0.26}>
            <BodyText className="max-w-[38ch]">
              Sua presença tornará essa noite ainda mais especial. Confirme pelo
              WhatsApp — será um prazer receber você.
            </BodyText>
          </Reveal>
          <Reveal delay={0.32} className="mt-8">
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { y: -1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-btn-a to-btn-b px-8 py-3.5 font-caps text-[12px] uppercase tracking-[0.24em] text-blush-1 shadow-rsvp"
            >
              <IconChat className="h-5 w-5" />
              Confirmar presença
            </motion.a>
          </Reveal>
          <Reveal delay={0.38}>
            <button
              type="button"
              onClick={() => scrollTo('presentes')}
              className="mx-auto mt-6 flex items-center gap-2 font-caps text-[11px] uppercase tracking-[0.24em] text-mutedrose transition-colors hover:text-ink"
            >
              <IconGift className="h-4 w-4" />
              ver guia de presentes
            </button>
          </Reveal>
          <Reveal delay={0.44}>
            <div className="mt-10">
              <Divider />
              <ScriptTitle as="h3" className="mt-2">
                Ingrid Mayane
              </ScriptTitle>
              <p className="mt-3 font-caps text-[10px] uppercase tracking-[0.28em] text-mutedrose">
                15 anos · 28 de agosto de 2026 · Recife
              </p>
            </div>
          </Reveal>
        </div>
      </Panel>
    </section>
  )
}
