export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
        },
      ],
    },
  },
});
