/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm : '480px',
      md : '720px',
      lg : '1080px',
      xl : '1440px'
    },
    extend: {},
  },
  plugins: [],
}
