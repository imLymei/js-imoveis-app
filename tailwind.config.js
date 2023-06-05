/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#e7646c',
					200: '#df2e38',
					300: '#ba1c25',
				},
				secondary: {
					100: '#8dbc8a',
					200: '#5d9c59',
					300: '#4a7d47',
				},
			},
		},
	},
	plugins: [],
};
