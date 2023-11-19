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
        red: "#dd9787",
        green: "#a6c48a",
        yellow: "#ffe599",
        darkRed: "#7a3333",
      },
      fontFamily: {
        header: ["Calistoga", "cursive"],
        body: ["Roboto", "sans-serif"],
      },
      spacing: {
        16: "16px",
        48: "48px",
        58: "58px",
        68: "68px",
      },
      backgroundImage: {
        homeImg: "url('../public/assets/bg-img.svg')",
      },
    },
  },
  plugins: [],
}
