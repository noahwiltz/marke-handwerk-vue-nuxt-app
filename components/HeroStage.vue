<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <div
    class="relative bg-cover bg-center sm:pt-110 pt-80 sm:px-25 px-10 pb-18 overflow-hidden"
    style="background-image: url('/images/hero-stage.jpeg')"
  >
    <!-- Overlay via ::before -->
    <div
      class="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-black/50 before:to-black/20 before:z-10"
    ></div>

    <!-- Text mit hohem z-Index -->
    <div class="relative z-20">
      <h1
        class="xl:text-8xl md:text-5xl text-3xl uppercase text-white font-semibold"
      >
        {{ title }}
      </h1>
      <h2 class="lg:text-5xl text-2xl text-white font-extralight mt-2">
        {{ subTitle }}
      </h2>
    </div>
  </div>
</template>
