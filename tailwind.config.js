/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1530px" },
        xl: { max: "1240px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "576px" },
        xs: { max: "475px" },
      },
      fontFamily: {
        inter: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
