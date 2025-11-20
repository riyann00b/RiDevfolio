// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://riyan00b.github.io",
  base: "/RiDevfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
