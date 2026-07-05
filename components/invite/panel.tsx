import type { CSSProperties, ReactNode } from 'react'
import { CornerFiligree } from './art'

export function Panel({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const filigreeSize = 'w-[clamp(58px,16%,90px)] h-auto'
  return (
    <div
      className={`relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[6px] bg-watercolor-card px-[clamp(20px,6vw,52px)] py-[clamp(30px,7vw,58px)] shadow-panel ${className}`}
      style={style}
    >
      {/* Moldura interna */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[13px] rounded-[3px] border-[1.5px] border-[var(--color-line)]"
        style={{ ['--color-line' as string]: 'rgba(160,109,107,.45)' }}
      />
      {/* Filigranas de canto (espelhadas) */}
      <span aria-hidden="true" className={`pointer-events-none absolute left-[6px] top-[6px] ${filigreeSize}`}>
        <CornerFiligree className="h-full w-full" />
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-[6px] top-[6px] ${filigreeSize}`}
        style={{ transform: 'scaleX(-1)' }}
      >
        <CornerFiligree className="h-full w-full" />
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[6px] left-[6px] ${filigreeSize}`}
        style={{ transform: 'scaleY(-1)' }}
      >
        <CornerFiligree className="h-full w-full" />
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[6px] right-[6px] ${filigreeSize}`}
        style={{ transform: 'scale(-1,-1)' }}
      >
        <CornerFiligree className="h-full w-full" />
      </span>
      {children}
    </div>
  )
}
