/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 42s linear infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 1, display: "flex", "z-index": 3 },
          "20%": { opacity: 1, display: "flex", "z-index": 19 },
          "98.5%": { opacity: 0, display: "none", "z-index": 2 },
          "21.5%": { opacity: 0, display: "none", "z-index": 2 },
          "100%": { opacity: 1, display: "flex", "z-index": 3 },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
};
