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
        futura_lt_bold: ["Futura LT Condensed Bold", "sans-serif"],
      },
      gridTemplateRows: {
        home_rows: "50px 5fr 1fr",
        column_row: "90% 10%",
        home_columns: "9fr 1fr",
      },
    },
  },
  plugins: [],
};
