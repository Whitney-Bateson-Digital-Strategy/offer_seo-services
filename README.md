# WBDS SEO services page

Astro build of the SEO & AI visibility service page. Every button opens the free audit request form in Airtable.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321/seo-services/
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Where things live

- `src/data/page.ts`: **edit here**. Every word on the page, plus the Airtable form link. The "cost of waiting" and "what's possible" sections are marked as draft copy.
- `src/pages/index.astro`: the page, assembled from the section components in `src/components/`.
- `src/components/Cost.astro`: the "what could search be worth" calculator. Starting values and assumptions are in `COST.calculator` in `page.ts`.
- `src/styles/global.css`: all styles (Whitney Bateson brand palette and fonts).
- `public/`: images and the closing-section video, copied from the SEO podcast series page.
- `astro.config.mjs`: `base` is the URL folder the page lives in (currently `/seo-services`).

## Airtable form

Paste the audit form's share link (`https://airtable.com/app…/shr…`) into `FORM.url`. Until then, the buttons point to `#`.

If the form has a field for the service someone is interested in, put its exact name in `FORM.servicePrefillField`. The buttons on the three service cards will then pre-fill it with "Local SEO", "Growth Content Engine" or "AI Visibility".
