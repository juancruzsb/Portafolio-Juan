// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			name: 'Poppins',
			cssVariable: '--font-poppins',
			provider: fontProviders.google(),
			weights: [400, 600, 700, 800],
			styles: ['normal'],
			fallbacks: ['sans-serif'],
		},
	],
});
