/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "240px",
      md: "540px",
      lg: "768px",
      xl: "1000px",
    },
    extend: {
      fontFamily: {
        timesNewRoman: ["timesNewRoman", "sans-serif"],
      },
      colors: {
        black: "#000000",
        neutralDark: "#201f1e",
        neutralPrimary: "#323130",
        neutralPrimaryAlt: "#3b3a39",
        neutralSecondary: "#605e5c",
        neutralTertiary: "#a19f9d",
        white: "#ffffff",

        /* Background */

        neutralTertiaryAlt: "#c8c8c8",
        neutralQuaternaryAlt: "#dadada",
        neutralLight: "#eaeaea",
        neutralLighter: "#f4f4f4",
        neutralLighterAlt: "#f8f8f8",
      },
    },
    variants: {
      extend: {
        content: ["before"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
