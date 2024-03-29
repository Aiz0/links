import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: 'https://links.aiz.moe',
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    tailwind(),
    icon({
      svgoOptions: {
        multipass: true,
        plugins: [
          "preset-default",
          "removeStyleElement",
          {
            name: "convertColors",
            params: {
              currentColor: true,
            },
          },
        ],
      },
    }),
    favicons({
      masterPicture: "./src/favicon.png",
      emitAssets: true,
    })
  ],
});
