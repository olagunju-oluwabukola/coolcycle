import { hubCounts } from './hubs.js';

export const journey = [
  ['Say hello on WhatsApp.', 'Message us on WhatsApp and share your details.', 'whatsapp-logo'],
  ['We approve your account.', 'We confirm your account on WhatsApp.', 'check'],
  [
    'Pick your hub and dates.',
    'Choose the hub closest to you. Pick your dates and how much you need to store.',
    'calendar',
  ],
  ['Drop off your produce.', 'Bring it to the hub.', 'package'],
  ['Watch it from your phone.', 'Check on your produce from your phone.', 'eye'],
  ["Collect when you're ready to sell.", 'Pick it up when you are ready to sell.', 'truck'],
];
export const reasons = [
  ['Close to your farm', `${hubCounts.total} hubs, and more opening.`, 'map-pin'],
  ['No upfront cost', 'Pay only for the space you use.', 'hand-coins'],
  ['Runs on the sun', 'Solar power, not diesel.', 'sun'],
  ['Simple', 'Book and track on WhatsApp. No app to download.', 'whatsapp-logo'],
  ['Proven', 'Only about 5% of produce was lost in our Epe pilot.', 'check'],
];
