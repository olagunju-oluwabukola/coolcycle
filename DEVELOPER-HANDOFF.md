# CoolCycle frontend handoff

Current preview: https://coolcycle-preview.emtukay.chatgpt.site/

## Stack and setup
React 19, Vite 6 and plain CSS. Use Node.js 22.12 or newer and npm. No API keys or account credentials are required to run the frontend.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Production frontend output: `dist/client`. `npm run build` also prepares an optional Cloudflare Worker/Sites wrapper in `dist/server`; other static hosts only need `dist/client`.

## Deploy on your own host
Deploy at the root of your domain. Serve real files from `dist/client`, and internally rewrite other HTML page requests to `/index.html` with a 200 response. Preserve the requested URL; do not redirect visitors to `/`. This is required for `/about/`, `/partners/`, service detail and hub detail routes to render the correct page on direct visits and refresh.

The handoff ZIP includes optional `vercel.json` and `netlify.toml` configurations for static deployment. Select the appropriate one for your host. A Netlify `_redirects` file is included under `public/` so the next build copies it into the frontend output. For Nginx, use `try_files $uri $uri/ /index.html;` in the application location. Check missing assets separately so invalid asset URLs do not return HTML.

After deployment, open and refresh Home, About, Partners, Services, one service detail and one hub detail. Test the mobile menu, FAQ disclosures and enquiry draft dialogs. All links use normal same-origin URLs.

## Where to edit
- `src/content.js`: service/hub data, site contacts, source copy, existing founder names and biographies.
- `src/App.jsx`: page sections, routing, forms, interaction hooks; `Team` adds Founder 3/4 placeholder entries and selects portrait assets.
- `src/styles.css`: colours, responsive layouts, typography, hover and scroll effects.
- `public/assets/`: local imagery, partner logos, fonts, icon SVGs and their supplied licences.
- `index.html`: page description, favicon and shared metadata.
- `worker/index.js`: optional Cloudflare asset fallback. It fetches `/` internally, avoiding the `/index.html` canonical redirect.

The source ZIP contains a neutral `.openai/hosting.json` for the optional build wrapper, without the existing Sites project ID. It contains no Git history, node_modules, access tokens, local QA screenshots or local runtime files. A fresh host deployment does not need a ChatGPT/Sites account.

## Client information still required
- Real WhatsApp number and contact email. Set `site.whatsapp` to international digits and replace the displayed contact placeholders.
- Verified names, coordinates, contacts, capacities and operating facts for the four hubs.
- Real founder/team photos; Founder 3/4 names, roles and biographies. All current portraits are generated fictional placeholders. Existing two named founders remain.
- Real facility/produce photos if the client wants authentic photography. Current concept images are generated.
- Confirmed future-service specifications and availability.
- Real contact delivery/backend if forms should send messages rather than prepare drafts.

Forms currently create/copy/download unsent enquiry drafts. They do not persist or email submissions. Do not display a received-message success state without implementing delivery. WhatsApp handoff becomes available when a real number is configured. Maps use Leaflet and external OpenStreetMap tiles and require internet access.

## Latest approved design
Team follows Figma node 29:1582: four portrait cards, two existing named founders plus two explicitly identified placeholders. Portraits have 8px corners; desktop uses four columns, tablet two, mobile one. About and Partners credits follow nodes 29:1482 and 29:5498: ZE-Gen and KAMIM only, occupying the first two tracks of a three-column desktop grid. Previous YSDN references/logo and Eweko partner credit are removed from these website sections per the latest requests/design.

Button default colours remain the original blue/white/green variants; enabled button hover and hero service-card hover use #0C1D2E with white text/icons. Homepage hero background has no frost effect. Other photos have frost hover. Container parallax and panel scroll effects respect reduced motion and have static mobile fallbacks.

## Source references
Figma: https://www.figma.com/design/nsgk5TFu5dlXcyVv37FwAo/Coolcycle
The project uses local copies of the design assets; no temporary Figma URLs are required at runtime.
