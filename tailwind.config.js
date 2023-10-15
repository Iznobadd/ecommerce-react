/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "480px",
        desktop: "1024px",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        text: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#004080",
        secondary: "#FFA800",
        accent: "#E74C3C",
        fond: "#F5F5F5",
        primaryContrast: "#0066A2",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
