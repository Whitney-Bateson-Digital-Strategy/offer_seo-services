import { defineConfig } from "astro/config";

// `base` is the folder the page is served from on offers.whitneybateson.com.
// Change it if the page lives somewhere else (and the deploy's server-dir to match) before going live.
// Vercel previews serve the site from the root of their own domain, so builds there use "/".
export default defineConfig({
  site: "https://offers.whitneybateson.com",
  base: process.env.VERCEL ? "/" : "/seo-services",
  output: "static",
});
