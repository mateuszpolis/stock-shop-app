/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
