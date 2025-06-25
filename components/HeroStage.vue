<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <div
    class="bg-cover bg-center px-32 pt-96 pb-28"
    style="background-image: url('/images/hero-stage.png')"
  >
    <h1 class="text-9xl uppercase text-white font-semibold">{{ title }}</h1>
    <h2 class="text-6xl uppercase text-white font-extralight mt-2">
      {{ subTitle }}
    </h2>
  </div>
</template>
