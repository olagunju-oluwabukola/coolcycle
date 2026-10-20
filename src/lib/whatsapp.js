import { services, site } from '../data';

// Pre-filled WhatsApp messages, keyed by the `type` passed to <Action>.
// Text in [square brackets] is for the customer to fill in inside WhatsApp.
const messages = {
  book: "Hi CoolCycle, I'd like to get started",
  'cold-storage':
    'Hello CoolCycle! I would like to book storage for [produce], [weight] kg, at [hub], from [date] to [date].',
  ice: 'Hello CoolCycle! I would like to buy [quantity] of ice at [hub] on [date].',
  hub: 'Hello CoolCycle! We need cold storage in [location] for [produce].',
};

export function messageFor(type) {
  if (messages[type]) return messages[type];
  const service = services.find((s) => s.slug === type);
  return `Hello CoolCycle! I would like to ask about ${service?.plain || 'your services'}.`;
}

// Turns a local Nigerian number (0707 367 8864) into international digits (2347073678864).
export function whatsappDigits(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.startsWith('0') ? '234' + digits.slice(1) : digits;
}

// WhatsApp click-to-chat link. Defaults to the main CoolCycle number.
export function whatsappLink(text, number = site.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text).replace(/'/g, '%27')}`;
}
