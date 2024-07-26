/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#f0eded",
        dark_grey: "#333",
        custom: "#899DA3",
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },

      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        futura: ["Futura", "sans-serif"],
      },
    },
  },
  plugins: [],
};
