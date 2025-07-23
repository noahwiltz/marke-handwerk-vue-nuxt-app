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
      <div
        class="sm:w-12 w-5 h-fit [background-color:#1D341A] sm:p-1 p-0.5 mx-5"
      ></div>
      <h2
        class="xl:text-6xl md:text-4xl text-xl text-center uppercase [color:#1D341A] font-semibold"
      >
        {{ title }}
      </h2>
      <div
        class="sm:w-12 w-5 h-fit [background-color:#1D341A] sm:p-1 p-0.5 mx-5"
      ></div>
    </div>
    <h3 class="xl:text-3xl md:text-2xl text-base text-center mx-5 mt-3">
      {{ subTitle }}
    </h3>
    <p
      v-html="description"
      class="max-w-3xl sm:text-xl text-base font-extralight text-center mx-5 mt-5"
    ></p>
  </div>
</template>
