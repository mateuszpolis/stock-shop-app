/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
      red: colors.red,
      white: colors.white,
      black: colors.black,
      yellow: colors.yellow,
      transparent: colors.transparent,
      current: colors.current,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      violet: colors.violet,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      lime: colors.lime,
      amber: colors.amber,
      orange: colors.orange,
      ...colors,
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Serif", "serif"],
      mono: ["Inter", "sans-serif"],
      display: ["Audiowide", "cursive"],
      body: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
