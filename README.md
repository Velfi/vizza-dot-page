# Vizza Landing Page

Static React/Vite landing page for [vizza.page](https://vizza.page), deployed on Cloudflare Workers.

Vizza is a desktop collection of interactive GPU-accelerated visual simulations. The page is written as a pre-Steam landing page with a primary wishlist CTA for:

https://store.steampowered.com/app/4945920

The Steam page may redirect or remain unavailable until Valve publishes it, so the page includes fallback copy that sets that expectation.

## Stack

- React
- TypeScript
- Vite
- Hono Worker entry
- Cloudflare Workers static assets

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173).

## Build And Preview

Build the production site:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

Run TypeScript, build, and Wrangler dry-run checks:

```bash
npm run check
```

## Deployment

Deployment behavior is unchanged from the Cloudflare Workers setup. Wrangler serves the Vite client build from `dist/client` with SPA fallback handling configured in `wrangler.json`.

Deploy:

```bash
npm run build && npm run deploy
```

## Assets

Page screenshots live under `public/assets/screenshots/` and are referenced directly from the React app. Gallery images are lazy-loaded and given fixed intrinsic dimensions to avoid layout shift.

The current page uses available Particle Life, Slime Mold, and Flow screenshots plus the finished Steam capsule and library artwork in `public/assets/steam/`. See `ASSET_SHOPPING_LIST.md` for remaining trailer and capture recommendations.
