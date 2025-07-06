<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <div
    class="bg-cover bg-center pt-110 px-25 pb-18"
    style="background-image: url('/images/hero-stage.png')"
  >
    <h1 class="text-8xl uppercase text-white font-semibold">{{ title }}</h1>
    <h2 class="text-5xl uppercase text-white font-extralight mt-2">
      {{ subTitle }}
    </h2>
  </div>
</template>
