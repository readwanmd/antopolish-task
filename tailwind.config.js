/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#880808',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '2rem',
				},
			},
			fontFamily: {
				sanchez: ['Sanchez', 'serif'],
				inter: ['Inter', 'sans-serif'],
				miniver: ['Miniver', 'cursive'],
			},
		},
	},
	plugins: [],
};
