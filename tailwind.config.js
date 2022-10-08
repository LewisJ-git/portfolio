/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            screens: {
                '600': {'max': '600px'},
                '1025': {'max': '1025px'},
            },
            fontFamily: {
                'sans': ['Archivo', 'sans-serif'],
                'serif': ['ui-serif'],
                'mono': ['"Space Mono"', 'monospace'],
                'display': ['Rajdhani', 'cursive'],
            },
        },
    },
    plugins: [],
}
