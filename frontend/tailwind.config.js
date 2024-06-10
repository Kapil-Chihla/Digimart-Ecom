/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lightGrey: '#f7f7f7',
        darkGrey: '#333333',
        primaryBlue: '#1E3A8A',
        orange: '#FFA500',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        // custom colors
        primary: {
          blue: '#2874f0',
          lightGreen: '#14be47',
          green: '#388e3c',
          yellow: '#ff9f00',
          orange: '#fb641b',
          darkBlue: '#172337',
          grey: '#878787',
          lightGrey: '#f2f2f2',
        },
      },
    },
  },
  plugins: [],
}
