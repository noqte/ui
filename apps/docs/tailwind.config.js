/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
    './../../packages/ui/dist/**/*.{css,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        yekanBakh: ['Yekan Bakh', 'sans-serif']
      }
    }
  },
  plugins: [require('../../packages/ui/src/index.js'), require('@tailwindcss/typography')]
}
