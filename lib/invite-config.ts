// ⚠️ TROQUE pelo WhatsApp real — formato: 55 + DDD + número (só dígitos)
export const WHATSAPP_NUMBER = '5581999999999'

export const RSVP_MESSAGE =
  'Olá! Confirmo a minha presença na festa de 15 anos da Ingrid Mayane 🩰✨'

export const MAPS_QUERY =
  'Di Branco Lounge, Av. Dezessete de Agosto, 2513 - Casa Forte, Recife'

// Alvo do contador: 28/08/2026 22:00, horário de Brasília (UTC−3)
export const EVENT_TIME = new Date('2026-08-28T22:00:00-03:00').getTime()

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  RSVP_MESSAGE,
)}`

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`
