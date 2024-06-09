/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        btn_orange: "#DA8E23",
        font_black: "#131414",
        footer_bg: "#02150D",
        green_60: "#96CCCC",
        fade_green_landing: "#EAF8F8",
        dark_green_90: "#045634",
        outline_orange: "#FD891C",
      },
      boxShadow: {
        custom1: "0px 12px 16px -4px #10182814",
        orangeShadow: " 0px 4px 18.1px -1px #DA8E234A;",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(180deg, #261A09 0%, #061515 100%)",
        "light-gradient": "linear-gradient(180deg, #008080 0%, #23A6A6 100%) ",
      },
    },
  },
  plugins: [],
};
