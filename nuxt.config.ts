export default defineNuxtConfig({
  ssr: false, // ← Deaktiviert Server-Side-Rendering = statisch
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
});
