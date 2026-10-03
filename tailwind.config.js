/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				bg: "rgb(var(--bg) / <alpha-value>)",
				surface: "rgb(var(--surface) / <alpha-value>)",
				fg: "rgb(var(--fg) / <alpha-value>)",
				muted: "rgb(var(--muted) / <alpha-value>)",
				subtle: "rgb(var(--subtle) / <alpha-value>)",
				line: "rgb(var(--line) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				ink: "#111111",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
				mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
			},
			transitionTimingFunction: {
				smooth: "cubic-bezier(0.2, 0.7, 0.2, 1)",
			},
		},
	},
	plugins: [],
};
