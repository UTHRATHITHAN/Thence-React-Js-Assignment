/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily:{
        grace: ['"Covered By Your Grace"', 'sans-seriff'],
        manrope: ['"manrope"', 'sans-seriff']
      }
    },
  },
  plugins: [],
}

