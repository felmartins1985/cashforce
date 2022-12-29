/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'cash': '0px 10px 30px rgba(225, 229, 236, 0.5)',
      },
    }
  },
  plugins: [],
}
