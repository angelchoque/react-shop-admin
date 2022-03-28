const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    colors: {
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
