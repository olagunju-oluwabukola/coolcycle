import { services, hubs } from '../data';

// Every route in the site, with its page title.
export const routes = [
  ['/', 'Home'],
  ['/services/', 'Services'],
  ['/how-it-works/', 'How It Works'],
  ['/hubs/', 'Hubs / Locations'],
  ['/about/', 'About & Impact'],
  ['/contact/', 'Contact'],
  ['/farmers/', 'Farmers & Traders'],
  ...services.map((s) => ['/services/' + s.slug + '/', s.plain]),
  ...hubs.map((h) => ['/hubs/' + h.slug + '/', h.name]),
  ['/partners/', 'Partners'],
];
