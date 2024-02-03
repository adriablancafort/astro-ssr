/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				brickoram: ["Brickoram"],
				inter: ["Inter"],
      		},
			colors: {
			'custom-red': '#ef233c',
			'custom-red-hover': '#f73b51',
      		},
		},
	},
	plugins: [],
}
