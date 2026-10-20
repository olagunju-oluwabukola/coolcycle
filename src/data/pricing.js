export const storageIntro =
  'Cold storage is sold as monthly packages, priced per pallet. Each package covers your allocated pallet space, cold storage, standard inbound and outbound handling, inventory tracking and access to the facility.';

export const storageExtrasNote =
  'Additional services such as special handling, picking and packing, extended logistics support or other value-added services may be charged separately.';

export const storagePackages = [
  {
    name: 'Essential',
    price: '₦250,000',
    audience: 'For traders, farmers and small businesses that primarily need cold storage.',
    includes: [
      'Cold storage for one agreed pallet allocation',
      'Standard temperature-controlled storage',
      'Basic inventory recording at intake and release',
      'Booking and storage confirmation',
      'Access to inventory status and collection arrangements',
    ],
    bestFor: 'Businesses that manage their own transport and handling arrangements.',
  },
  {
    name: 'Business',
    price: '₦350,000',
    audience: 'For growing businesses that need storage plus more structured inventory management.',
    includesFrom: 'Everything in Essential, plus',
    includes: [
      'Reserved pallet capacity for the agreed billing period',
      'More detailed inventory tracking, including quantities received and released',
      'Intake and dispatch coordination',
      'Scheduled stock and inventory updates',
      'Prioritised booking and collection coordination',
    ],
    bestFor: 'Regular traders, aggregators, food distributors and growing agricultural businesses.',
  },
  {
    name: 'Business Plus',
    price: '₦500,000',
    audience: 'For businesses with more predictable storage and fulfilment needs.',
    includesFrom: 'Everything in Business, plus',
    includes: [
      'Priority access to agreed storage capacity',
      'Inbound and outbound handling coordination',
      'More frequent inventory reporting',
      'Planned collection and dispatch scheduling',
      'A designated point of contact for storage and operational coordination',
    ],
    bestFor:
      'Established distributors, larger traders, processors and businesses consolidating produce for buyers.',
  },
];
