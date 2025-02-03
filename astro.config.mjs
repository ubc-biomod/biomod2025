// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	  },
    integrations: [starlight({
        title: 'My Docs',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), react()],
});