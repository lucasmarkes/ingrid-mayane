import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-caps text-[clamp(10px,2.6vw,12px)] uppercase tracking-[0.42em] text-mutedrose">
      {children}
    </p>
  )
}

export function ScriptTitle({
  children,
  as: As = 'h2',
  className = '',
}: {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}) {
  const size =
    As === 'h1'
      ? 'text-[clamp(48px,15vw,92px)]'
      : As === 'h3'
        ? 'text-[clamp(28px,8vw,42px)]'
        : 'text-[clamp(38px,11vw,66px)]'
  return (
    <As
      className={`font-script leading-[1.05] text-script ${size} ${className}`}
    >
      {children}
    </As>
  )
}

export function CapsLine({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={`font-caps uppercase tracking-[0.38em] text-ink ${className}`}
    >
      {children}
    </p>
  )
}

export function BodyText({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={`mx-auto font-serifd text-[clamp(16px,4.2vw,19px)] leading-relaxed text-body ${className}`}
    >
      {children}
    </p>
  )
}
