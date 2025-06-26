/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}", // wichtig für Variablen in Konfiguration
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        ci: {
          primary: "#1D341A",
          secondary: "#EFEFEF",
          highlight: "#1D341A",
          textlight: "#414141",
          textdark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
