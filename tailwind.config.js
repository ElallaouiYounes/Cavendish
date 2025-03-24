/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        antonSC: ["Anton SC", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        bagel: ["Bagel Fat One", "cursive"],
        shrikhand : ["Shrikhand", "sans-serif"],
      },
      colors: {
        creamy: "#fff5cf",
        orangy: "#ff671b",
      },
    },
  },
  plugins: [],
};
