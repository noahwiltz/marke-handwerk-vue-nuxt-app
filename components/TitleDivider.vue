<script setup>
defineProps({
  title: String,
  subTitle: String,
  description: String,
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex justify-center items-center">
      <div class="w-12 h-fit [background-color:#1D341A] p-1 mx-5"></div>
      <h2 class="text-6xl uppercase [color:#1D341A] font-semibold">
        {{ title }}
      </h2>
      <div class="w-10 h-fit [background-color:#1D341A] p-1 mx-5"></div>
    </div>
    <h3 class="text-3xl mt-3">{{ subTitle }}</h3>
    <p class="max-w-3xl text-xl font-extralight text-center mt-5">
      {{ description }}
    </p>
  </div>
</template>
