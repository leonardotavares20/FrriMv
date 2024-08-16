/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        hells_red: "#CE0000",
      },
      fontFamily: {
        futura_bt: ["Futura BT Condensed", "sans-serif"],
        futura_lt: ["Futura LT Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
