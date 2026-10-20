// Enquiry API. Set VITE_API_URL at build time (see .env.example).
// In `npm run dev` it uses the local /api-proxy (see vite.config.mjs), which forwards to the
// staging API. A production build never falls back to anything, so enquiries can't end up in
// the wrong place by accident.
const API_URL = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '/api-proxy' : '')).replace(
  /\/$/,
  '',
);

// Values of the API's `type` field.
export const ENQUIRY_TYPES = {
  general: 'general', // "Send us a message" (includes partnership enquiries)
  hubRequest: 'hub_request', // "Not near a hub yet?"
};

// POST /public/enquiries. Resolves on success, throws on any failure.
export async function submitEnquiry(payload) {
  if (!API_URL) throw new Error('VITE_API_URL is not set');
  const response = await fetch(`${API_URL}/public/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Enquiry failed (${response.status})`);
}