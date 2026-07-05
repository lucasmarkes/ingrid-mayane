'use client'

import { motion, useReducedMotion } from 'motion/react'
import { BallerinaHero, Divider, Sparkle } from './art'
import { Countdown } from './countdown'
import { Reveal } from './reveal'

const frameLine = 'rgba(165,96,107,.45)'
const cornerLine = 'rgba(165,96,107,.55)'

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="topo"
      className="flex min-h-[100svh] flex-col items-center justify-center"
    >
      <div className="relative mx-auto w-full max-w-[560px]">
        {/* Halo atrás da bailarina */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[10px] -translate-x-1/2"
          style={{
            width: 'clamp(280px,66vw,360px)',
            height: 'clamp(280px,66vw,360px)',
            background:
              'radial-gradient(circle, rgba(255,247,244,.9) 0%, rgba(255,247,244,0) 62%)',
          }}
        />

        {/* Card do hero */}
        <div
          className="relative overflow-visible rounded-[14px] border bg-hero-card px-[clamp(20px,6vw,52px)]"
          style={{
            borderColor: frameLine,
            paddingTop: 'clamp(250px,60vw,320px)',
            paddingBottom: 'clamp(30px,7vw,50px)',
          }}
        >
          {/* Segunda linha interna */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[5px] rounded-[10px] border"
            style={{ borderColor: frameLine, opacity: 0.2 }}
          />

          {/* Cantos ornamentados */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[5px] top-[5px] h-[22px] w-[22px] rounded-tl-[12px] border-l-2 border-t-2"
            style={{ borderColor: cornerLine }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[5px] top-[5px] h-[22px] w-[22px] rounded-tr-[12px] border-r-2 border-t-2"
            style={{ borderColor: cornerLine }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[5px] left-[5px] h-[22px] w-[22px] rounded-bl-[12px] border-b-2 border-l-2"
            style={{ borderColor: cornerLine }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[5px] right-[5px] h-[22px] w-[22px] rounded-br-[12px] border-b-2 border-r-2"
            style={{ borderColor: cornerLine }}
          />

          {/* Bailarina (exclusiva do save the date) */}
          <motion.div
            className="pointer-events-none absolute"
            style={{ left: '50%', x: '-50%', top: 'clamp(6px,2vw,16px)' }}
            animate={reduce ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* viewBox quadrado 2600×2600 — controlar por width */}
            <BallerinaHero className="h-auto w-[clamp(230px,56vw,290px)] drop-shadow-[0_12px_22px_rgba(150,90,92,.28)]" />
          </motion.div>

          {/* Sparkles ao redor da bailarina */}
          <Sparkle
            className="pointer-events-none absolute right-[20%] top-[8%] w-[13px]"
            style={{ opacity: 1 }}
          />
          <Sparkle
            className="pointer-events-none absolute left-[19%] top-[20%] w-[9px]"
            style={{ opacity: 0.65 }}
          />
          <Sparkle
            className="pointer-events-none absolute right-[26%] top-[30%] w-[8px]"
            style={{ opacity: 0.5 }}
          />

          {/* Conteúdo */}
          <div className="relative text-center">
            <Reveal delay={0}>
              <p
                className="font-caps text-[12px] uppercase tracking-[0.55em] text-mutedrose"
                style={{ textIndent: '0.55em' }}
              >
                Save the date
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 font-script leading-[1.05] text-script text-[clamp(46px,16vw,58px)]">
                Ingrid Mayane
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <Divider />
            </Reveal>

            <Reveal delay={0.22}>
              <p
                className="font-serifd text-[clamp(20px,6vw,26px)] font-medium tracking-[0.3em] text-ink"
                style={{ fontVariant: 'small-caps', textIndent: '0.3em' }}
              >
                Quinze Anos
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p
                className="mt-3 font-caps text-[14px] uppercase tracking-[0.4em] text-mutedrose"
                style={{ textIndent: '0.4em' }}
              >
                28 · 08 · 2026
              </p>
            </Reveal>

            <Reveal delay={0.34} className="mt-8">
              <Countdown />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
