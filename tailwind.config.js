/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './pages/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2e2e35',
        'secundary': '#e4aa48',
        'text': '#D4D4D4',
      },
      rotate: {
        '30': '30deg',
      },
      boxShadow: {
        'shadow': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
