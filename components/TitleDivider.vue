<script setup>
defineProps({
  title: String,
  subTitle: String,
  description: String,
});
</script>

<template>
  <div>
    <div class="w-5 [background-color:#1D341A] p-1"></div>
    <h2 class="text-6xl uppercase text-white font-extralight mt-2">
      {{ title }}
    </h2>
    <h3>{{ subTitle }}</h3>
    <p class="max-w-96">{{ description }}</p>
  </div>
</template>
