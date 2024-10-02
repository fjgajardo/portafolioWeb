/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "negro": 'rgb(var(--negro))',
      "gris-2": 'rgb(var(--gris-2))',
      "gris-l": 'rgb(var(--gris-l))',
      "gris": 'rgb(var(--gris))',
      "morado-l": 'rgb(var(--morado-l))',
      "morado-h": 'rgb(var(--morado-h))',
      "verde": 'rgb(var(--verde))',
      "blanco": 'rgb(var(--blanco))',
      'blancoSecundario': 'rgb(var(--blancoSecundario))',
      "blancoBlanco": 'rgb(var(--blancoBlanco))',
      "blancoFijo": 'rgb(var(--blancoFijo))',

    },
    extend: {

    },
  },
  plugins: [],
}
