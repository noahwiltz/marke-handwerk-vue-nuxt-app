/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
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
