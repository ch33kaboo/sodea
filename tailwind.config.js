/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 42s linear infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 1 },
          "20%": { opacity: 1 },
          "21.5%": { opacity: 0 },
          "98.5%": { opacity: 0 },
          "100%": { opacity: 1 },
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
  plugins: [],
};
