/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns:{
        custom: 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    },
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
  },
  plugins: [],
}

