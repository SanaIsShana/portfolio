/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: "#a3b899",
        darkOlive: "#667b68",
        lightGreen: "#dde6d5",
        dustyPink: "#fceee9",
      },
      fontFamily: {
        header: ["Calistoga", "cursive"],
        body: ["Roboto", "sans-serif"],
      },
      spacing: {
        67: "58px",
        48: "48px",
      },
    },
  },
  plugins: [],
}
