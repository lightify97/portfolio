/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: "1.25rem", sm: "2rem" },
			screens: { lg: "1120px" },
		},
		extend: {
			colors: {
				bg: "rgb(var(--bg) / <alpha-value>)",
				surface: "rgb(var(--surface) / <alpha-value>)",
				fg: "rgb(var(--fg) / <alpha-value>)",
				muted: "rgb(var(--muted) / <alpha-value>)",
				subtle: "rgb(var(--subtle) / <alpha-value>)",
				line: "rgb(var(--line) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
				serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
			},
			transitionTimingFunction: {
				smooth: "cubic-bezier(0.2, 0.7, 0.2, 1)",
			},
		},
	},
	plugins: [],
};
