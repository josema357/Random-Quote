/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      page: 'rgb(var(--color-page) / <alpha-value>)',
      white: 'white',
      slate: 'rgb(240 241 242)'
    }
  },
  plugins: [],
}
