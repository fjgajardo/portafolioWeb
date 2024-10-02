/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "negro": '#2d3047',
      "gris-2": '#e7e7ef',
      "gris-l": '#F3F3F7',
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
