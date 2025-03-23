// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "UBC BIOMOD",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      logo: {
        src: "./src/assets/logo.png",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Home",
          link: "/",
          badge: "Hidden",
        },
        {
          label: "Ideas",
          autogenerate: { directory: "ideas" },
        },
        {
          label: "ELSI",
          autogenerate: { directory: "elsi" },
        },
        {
          label: "Lab Notebook",
          autogenerate: { directory: "lab-notebook" },
          badge: {
            text: "Call to Action",
          },
        },
      ],
      components: {
        Header: "./src/components/overrides/Header.astro",
      },
    }),
    react(),
  ],
});
