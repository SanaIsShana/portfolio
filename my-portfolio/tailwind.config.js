/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: "#a3b899",
        lightGreen: "#dde6d5",
        dustyPink: "#fceee9",
      },
      fontFamily: {
        check: ["Calistoga", "cursive"],
      },
    },
  },
  plugins: [],
};
