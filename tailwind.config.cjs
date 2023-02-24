/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '720px',
      'lg': '976px',
      'xl': '1440px'
    },
    extend: {
      colors: {
        lightOrange: '#fcebc1',
        orange: '#f9bc0c',
        violet: '#453f9c',
        grey: '#8985a0',
        whiteOrange: '#fffdf9',
      }
    }
  },
  plugins: [],
}
