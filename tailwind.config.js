/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}, './index.html'"],
  theme: {
    extend: {
      fontFamily: {
        quantico: ["Quantico", "serif"],
        jersey: ["'Jersey 10'", "serif"],
        jersey25: ["'Jersey 25'", "serif"],
        roboto: ["Roboto", "serif"],
        khdam: ["'Kdam Thmor Pro'", "serif"],
        inter: ["'Inter Tight'", "serif"],
        montserrat: ["Montserrat", "serif"],
        interBold: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
