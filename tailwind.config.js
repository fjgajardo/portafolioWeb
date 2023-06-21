/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "negro": '#2d3047',
      "gris": '#484C70',
      "morado-l": "#a67db8",
      "morado-h": "#7e55d9",
      "verde": "#60d9b6",
      "blanco": "#EBF2FA",
      'blancoSecundario': '#F5F5F5',
      "blancoBlanco": "#ffffff",

    },
    extend: {

    },
  },
  plugins: [],
}
