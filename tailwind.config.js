/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Rock Salt",
      secundary: "RocknRoll One",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        black: "#000000",
        eerie: "#1B1B1B",
        jet: "#2d2d2d",
        pumpkin: "#FF812D",
      },
      backgroundImage: {
        home: "url('/home-tapes.png')",
        about: "url('/about-studio.png')",
        services: "url('/services-mic.png')",
      },
    },
  },
  plugins: [],
};
