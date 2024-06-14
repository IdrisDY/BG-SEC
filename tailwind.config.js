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
        light_mainTxt: "#002616",
        light_subhead: "#0B1E1E",
        light_gray_50: "#475467",
        hero_section_bg: "#EFF9F9",
        outline_orange: "#FD891C",
        onboard_green: "#008080",
        default_steps: "#83796B",
        aside_onboard: "#171B1B",
      },
      boxShadow: {
        custom1: "0px 12px 16px -4px #10182814",
        orangeShadow: " 0px 4px 18.1px -1px #DA8E234A;",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(180deg, #261A09 0%, #061515 100%)",
        "light-gradient": "linear-gradient(180deg, #008080 0%, #23A6A6 100%) ",
      },
      keyframes: {
        spinner: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
        dropdown: {
          "0%": { opacity: 0.7, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        'marquee': {
          " 0%" : { transform: "translateX(100%)"} ,
           "100% ": {transform: "translateX(-100%)"},
         },
   
      },
      animation: {
        spinner: "spinner .5s linear infinite",
        dropdown: "dropdown .5s ease-in-out",
        marquee:"marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
};
