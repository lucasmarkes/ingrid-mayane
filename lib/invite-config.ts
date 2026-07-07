export const whatsappHref = 'https://wa.link/6cbjau'

export const MAPS_QUERY =
  'Di Branco Lounge, Av. Dezessete de Agosto, 2513 - Casa Forte, Recife'

// Alvo do contador: 28/08/2026 22:00, horário de Brasília (UTC−3)
export const EVENT_TIME = new Date('2026-08-28T22:00:00-03:00').getTime()

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`
