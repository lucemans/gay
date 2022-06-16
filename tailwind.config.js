/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: '#121212'
        }
      }
    },
  },
  plugins: [],
}