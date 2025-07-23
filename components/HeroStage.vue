<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <div
    class="bg-cover bg-center sm:pt-110 pt-80 sm:px-25 px-10 pb-18"
    style="background-image: url('/images/hero-stage.jpeg')"
  >
    <h1
      class="xl:text-8xl md:text-5xl text-3xl uppercase text-white font-semibold"
    >
      {{ title }}
    </h1>
    <h2 class="lg:text-5xl :text-2xl text-white font-extralight mt-2">
      {{ subTitle }}
    </h2>
  </div>
</template>
