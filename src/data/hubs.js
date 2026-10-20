// Hub details come from the client's content answers. `power` falls back to
// "Solar-powered" when a hub has no specific power note. `contact` is left out
// until a contact person is supplied; the page hides empty rows.
export const hubs = [
  {
    slug: 'epe-cold-room',
    name: 'Epe Cold Room',
    type: 'Cold room',
    location: 'Epe, Lagos State',
    address: 'Opposite Ora Estate, Mojoda, Epe, Lagos State',
    capacity: '6 tonnes',
    service: 'Cold storage',
    phone: '0707 367 8864',
    description:
      'Our first pilot opened in Epe, Lagos in June 2024. The site has a 6-tonne cold room, an office space and a 20ft sorting area.',
    image: 'hero-cold-room.webp',
  },
  {
    slug: 'ikeja-cold-room',
    name: 'Ikeja Cold Room',
    type: 'Cold room',
    format: 'Containerised cold-storage facility',
    location: 'Ikeja, Lagos State',
    address: 'Jara Mall, beside the local airport, Ikeja, Lagos State',
    capacity: '20 tonnes',
    temperature: 'Down to -25°C',
    power: 'Solar and battery system with grid connectivity, supporting 24-hour operation',
    service: 'Cold storage',
    phone: '0707 367 8864',
    description:
      'A containerised cold-storage facility that runs around the clock on solar and battery power, and can be expanded as demand grows.',
    image: 'container-concept.webp',
  },
  {
    slug: 'ibeju-lekki-cold-room',
    name: 'Ibeju-Lekki Cold Room',
    type: 'Cold room',
    format: 'Solar-powered cold-storage facility',
    location: 'Eleko, Ibeju-Lekki, Lagos State',
    address: 'Eleko, Ibeju-Lekki, Lagos State',
    capacity: '10 tonnes',
    power: 'Solar and battery system designed for 24-hour operation',
    service: 'Cold storage',
    phone: '0707 367 8864',
    description: 'A 10-tonne solar-powered cold-storage facility in Eleko, Ibeju-Lekki.',
    image: 'small-cold-stop.webp',
  },
  {
    slug: 'ijebu-ode-cold-room',
    name: 'Ijebu Ode Cold Room',
    type: 'Cold room',
    location: 'Ijebu Ode, Ogun State',
    address: 'Ijebu Chambers of Commerce, GRA, Ijebu Ode, Ogun State',
    capacity: '15 tonnes cold room and 5 tonnes blast freezer',
    power: 'Solar and battery system designed for 24-hour operation',
    service: 'Cold storage',
    phone: '0707 367 8864',
    description: 'A 15-tonne cold room and a 5-tonne blast freezer in Ijebu Ode, Ogun State.',
    image: 'solar-freezer.webp',
  },
  {
    slug: 'badagry-cold-room',
    name: 'Badagry Cold Room',
    type: 'Cold room',
    location: 'Badagry, Lagos State',
    address: 'Ajido-ASCON-Topo-Badagry Road, Yenawa, Ajido Town, Badagry LGA, Lagos State',
    capacity: '6 tonnes',
    power: 'Solar and battery system designed for 24-hour operation',
    service: 'Cold storage',
    phone: '0707 367 8864',
    description: 'A 6-tonne solar-powered cold room in Ajido, Badagry.',
    image: 'cold-room-closeup.webp',
  },
  {
    slug: 'yabatech-cold-storage',
    name: 'YabaTech Cold Storage',
    type: 'Cold room',
    location: 'Odoragunshin, Epe, Lagos State',
    address:
      'Yaba College of Technology (YABATECH) Epe Campus, Odoragunshin, Epe, Lagos State (Plus Code: MX7P+6CF)',
    capacity: '5 tonnes',
    service: 'Cold storage',
    phone: '0707 367 8864',
    description: 'A 5-tonne cold storage facility at the YABATECH Epe Campus.',
    image: 'farmer-produce.webp',
  },
  {
    slug: 'epe-ice-plant',
    name: 'Epe Ice Plant',
    type: 'Ice',
    location: 'Epe, Lagos State',
    address:
      'Giwa Sadiku Olanrewaju Family Land, off Obafemi Awolowo Way, Oke-Oyinbo, Epe, Lagos State (opposite the police station, after the magistrate court)',
    capacity: '400 blocks per day',
    service: 'Ice',
    phone: '0707 367 8864',
    mapUrl: 'https://maps.app.goo.gl/99iCbxosrwXb5dKz8?g_st=iw',
    description: 'Buy ice to keep produce cool in transit.',
    image: 'ice-service.webp',
  },
];

const coldRooms = hubs.filter((h) => h.type === 'Cold room').length;
const icePlants = hubs.filter((h) => h.type === 'Ice').length;

// Used wherever the site says how many hubs there are, so the numbers never drift.
export const hubCounts = {
  total: hubs.length,
  coldRooms,
  icePlants,
  summary: `${coldRooms} cold rooms and ${icePlants} ice plant${icePlants === 1 ? '' : 's'}`,
};
