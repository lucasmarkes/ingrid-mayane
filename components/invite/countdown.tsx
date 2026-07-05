'use client'

import { useEffect, useState } from 'react'
import { EVENT_TIME } from '@/lib/invite-config'

const pad = (n: number) => String(n).padStart(2, '0')

function Block({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-caps text-[clamp(28px,9vw,34px)] leading-none text-ink tabular-nums">
        {value}
      </span>
      <span className="mt-[7px] font-caps text-[9px] uppercase tracking-[0.35em] text-mutedrose">
        {label}
      </span>
    </div>
  )
}

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="self-start pt-[8px] font-caps text-[13px] leading-none text-accentrose/50"
    >
      ·
    </span>
  )
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = now === null ? null : Math.max(0, EVENT_TIME - now)

  if (diff !== null && diff === 0) {
    return (
      <p
        role="timer"
        aria-label="Contagem regressiva para a festa"
        className="font-caps text-[clamp(14px,4vw,18px)] uppercase tracking-[0.22em] text-ink"
      >
        É hoje. Vista-se de brilho ✨
      </p>
    )
  }

  const dias = diff === null ? 0 : Math.floor(diff / 86_400_000)
  const horas = diff === null ? 0 : Math.floor(diff / 3_600_000) % 24
  const min = diff === null ? 0 : Math.floor(diff / 60_000) % 60
  const seg = diff === null ? 0 : Math.floor(diff / 1_000) % 60

  return (
    <div
      role="timer"
      aria-label="Contagem regressiva para a festa"
      className="flex items-start justify-center gap-[clamp(8px,3vw,18px)]"
    >
      <Block value={pad(dias)} label="dias" />
      <Dot />
      <Block value={pad(horas)} label="horas" />
      <Dot />
      <Block value={pad(min)} label="min" />
      <Dot />
      <Block value={pad(seg)} label="seg" />
    </div>
  )
}
