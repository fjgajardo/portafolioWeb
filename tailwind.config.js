/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "negro": 'var(--negro)',
      "gris-2": 'var(--gris-2)',
      "gris-l": 'var(--gris-l)',
      "gris": 'var(--gris)',
      "morado-l": "var(--morado-l)",
      "morado-h": "var(--morado-h)",
      "verde": 'var(--verde)',
      "blanco": 'var(--blanco)',
      'blancoSecundario': 'var(--blancoSecundario)',
      "blancoBlanco": 'var(--blancoBlanco)',

    },
    extend: {

    },
  },
  plugins: [],
}
