import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const IconCalendar = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9.5h18M8 3v4M16 3v4" />
  </svg>
)

export const IconClock = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.2v5l3.2 2" />
  </svg>
)

export const IconPin = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...p}>
    <path d="M12 21.5s7-6.4 7-11.5a7 7 0 1 0-14 0c0 5.1 7 11.5 7 11.5Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const IconGift = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...p}>
    <path d="M20 12v8.5H4V12" />
    <rect x="2.5" y="7.5" width="19" height="4.5" rx="1" />
    <path d="M12 7.5v13" />
    <path d="M12 7.5C10.6 4 9 3.4 7.7 4.2 6.4 5 7 7.5 12 7.5Zm0 0C13.4 4 15 3.4 16.3 4.2 17.6 5 17 7.5 12 7.5Z" />
  </svg>
)

export const IconHeart = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...p}>
    <path d="M12 20s-7.2-4.6-9.4-9.2C1.1 8 2.3 4.7 5.5 4.1c2.3-.4 4.1.8 6.5 3.5 2.4-2.7 4.2-3.9 6.5-3.5 3.2.6 4.4 3.9 2.9 6.7C19.2 15.4 12 20 12 20Z" />
  </svg>
)

export const IconChat = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M12 3.2A8.8 8.8 0 0 0 4.4 16.5L3.2 21l4.6-1.2A8.8 8.8 0 1 0 12 3.2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M9.3 8.4c.25-.55.5-.55.8-.55h.55c.2 0 .4.02.6.48l.75 1.7c.08.2.02.42-.1.55l-.5.55c-.12.13-.18.3-.1.5.3.62 1.6 1.95 2.75 2.35.2.08.4.02.5-.1l.6-.6c.18-.18.38-.2.58-.1l1.55.85c.3.16.42.36.42.56 0 .8-.55 1.55-1.4 1.85-.85.3-1.95.2-3.55-.6-1.85-.95-3.15-2.85-3.25-3-.1-.13-.85-1.15-.85-2.25 0-1.05.55-1.55.85-1.83Z"
      fill="currentColor"
    />
  </svg>
)

export const IconChevron = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...p}>
    <path d="M6 9.5l6 6 6-6" />
  </svg>
)

export const IconDress = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M10 3.5 Q12 6 14 3.5 L15.4 9 L13.2 10.2 L16.6 20.5 L7.4 20.5 L10.8 10.2 L8.6 9 Z"
    />
  </svg>
)

export const IconTrousers = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M8.3 3.5 H15.7 L15.1 12 L14 20.5 H12.3 L12 12.6 L11.7 20.5 H10 L8.9 12 Z"
    />
  </svg>
)

export const IconHeel = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M3.8 8.6 C9 8.6 14 10.6 18 12.8 C19.6 13.6 20.2 14.1 20.2 15 L20.2 16.2 L5.8 16.2 C4.7 16.2 3.8 15.3 3.8 14.2 Z"
    />
    <path
      fill="currentColor"
      d="M17.4 16.2 L18.7 20.6 L16.9 20.6 L16.2 16.4 Z"
    />
  </svg>
)

export const IconBloom = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <g fill="currentColor">
      <circle cx="12" cy="6.4" r="3.1" />
      <circle cx="17.6" cy="10.5" r="3.1" />
      <circle cx="15.4" cy="17" r="3.1" />
      <circle cx="8.6" cy="17" r="3.1" />
      <circle cx="6.4" cy="10.5" r="3.1" />
    </g>
    <circle cx="12" cy="12" r="2.4" fill="#f0d3d0" />
  </svg>
)
