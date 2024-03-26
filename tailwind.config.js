/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'blue': '#55C0CF',
        'brown': '#2C1E1E',
        'black': '#000000',
        'orange': '#FFA646',
        'yellow': '#FFD543',
        'grey': '#616161',
      },
      fontFamily: {
        'fjalla': ['Fjalla One'],
      },
    },
  },
  plugins: [],
}

