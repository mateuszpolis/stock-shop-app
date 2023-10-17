/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008391",
        secondary: "#000",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
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
