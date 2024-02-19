/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: { max: "412px" },
				600: { max: "600px" },
				1025: { max: "1025px" },
				smheight: { raw: "(min-height: 667px)" }
			},
			fontFamily: {
				hrdtkn: ["var(--font-hrdtkn)"],
				badfennec: ["var(--font-badfennec)"],
				barcode: ["'Libre Barcode 128 Text'"],
				sans: ["Geo", "sans-serif"],
				serif: ["ui-serif"],
				mono: ["monospace"],
				display: ["Iceberg", "cursive"]
			},
			gridTemplateColumns: {
				layout1: "500px 500px"
			}
		},
		colors: {
			cblack: "#030301ff",
			background: "#eddcc6ff",
			midground: "#485768ff",
			accent2: "#ff4365ff",
			accent1: "#00d9c0ff"
		}
	},
	plugins: []
};
