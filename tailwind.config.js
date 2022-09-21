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
        'main2': '#34343b',
        'secundary': '#e4aa48',
        'text': '#D4D4D4',
      },
      rotate: {
        '30': '30deg',
      },
      boxShadow: {
        'shadow': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fade: 'fade 3s 0s',
      },
    },
  },
  plugins: [],
}
