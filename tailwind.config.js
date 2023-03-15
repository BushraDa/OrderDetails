/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./CheckOrder/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom_yellow: {
          50: '#FFBA08',
          100: '#FCA311',
          200: '#FAA307'
        },
        custom_blue: {
          100: '#14213D',
          200: '#03071E'
        },
        custom_grey: {
          50: '#f5f3f4',
          100: '#E5E5E5',
          200: '#8d99ae'
        },
        custom_red: {
          50: '#D00000',
          100: '#BF0603',
          200: '#9D0208',
          300: '#6A040F',
          400: '#370617'
        }
      }
    },
  },
  plugins: [],
}
