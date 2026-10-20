# CoolCycle website

Marketing site for CoolCycle: solar-powered cold storage and ice for farmers and traders in Nigeria.
Built with React 19, Vite 6 and plain CSS.

## Requirements

Node.js 22.12 or newer, and npm.

## Install

```sh
npm install
```

## Run

```sh
npm run dev
```

Opens a local dev server. Enquiry forms post to the staging API unless `VITE_API_URL` is set.

## Build

```sh
cp .env.example .env     # then set VITE_API_URL to the API the live site should use
npm run build
```

The site is built into `dist/client`. Serve that folder from the root of your domain and rewrite
every other path to `/index.html` with a 200 response, so direct visits to `/about/` or
`/hubs/epe-cold-room/` work. `vercel.json`, `netlify.toml` and `public/_redirects` are included for
those hosts; for Nginx use `try_files $uri $uri/ /index.html;`.

`VITE_API_URL` is read at build time, so rebuild after changing it. The API must allow requests from
the site's domain (CORS).

## Other commands

```sh
npm run lint             # check the code
npm run format           # format the code with Prettier
npm run test:sites       # tests for the optional worker wrapper
```

## Where things are

- `src/data/` holds the site content: hubs, services, pricing packages, FAQs, contacts.
  The WhatsApp number is `whatsapp` in `src/data/site.js`.
- `src/pages/` has one file per page; `src/components/` holds the pieces they are built from.
- `src/lib/` has the WhatsApp link and enquiry API helpers.
- `src/styles/index.css` imports every stylesheet. Import order is cascade order, so keep it.
- `public/assets/` has images, fonts and partner logos.

## Enquiries and WhatsApp

- Call-to-action buttons open WhatsApp click-to-chat (`https://wa.me/<number>?text=...`) with a
  pre-filled message. No server is involved.
- The contact form (including partnership enquiries) and the hub request form send
  `POST /public/enquiries` to the CoolCycle API, with a required consent checkbox.
