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
      gridTemplateRows: {
        home_rows: "3fr 1fr",
        home_columns: "10fr 1fr",
      },
    },
  },
  plugins: [],
};
