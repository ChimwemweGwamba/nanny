/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ['Poppins'],
    },
    extend: {
      colors: {
        primary: '#B78D5A',
        primary2: '#F0F0F0',
        secondary: '#67432F',
        secondary2: '#8C969E',
      },
    },
  },
  plugins: [],
}