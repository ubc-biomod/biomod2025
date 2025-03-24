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
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/global.css",
      ],
      logo: {
        src: "./src/assets/logo.png",
        replacesTitle: true,
      },
      sidebar: [
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
        {
          label: "Sponsors",
          link: "/sponsors",
          badge: "Hidden",
        },
      ],
      components: {
        Header: "./src/components/overrides/Header.astro",
        Pagination: "./src/components/overrides/Pagination.astro",
      },
    }),
    react(),
  ],
});
