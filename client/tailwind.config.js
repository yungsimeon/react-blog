/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Keep your existing content configuration
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
      // You can add or override Material Tailwind defaults here if needed
    },
  },
  plugins: [
    // Add Material Tailwind plugins if needed
    // For example, if you need specific Material Tailwind plugins, add them here
  ],
});
