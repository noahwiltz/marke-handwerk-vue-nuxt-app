<script setup>
defineProps({
  title: String,
  description: String,
  img: String,
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center max-w-[370px] max-h-[400px] min-w-[370px] min-h-[370px] rounded-lg bg-white p-10 hover:scale-95 duration-300 ease-in-out cursor-pointer"
  >
    <div class="[background-color:#1D341A] rounded sm:p-6 p-4">
      <img class="sm:w-6 w-5 fill-black" :src="img" />
    </div>
    <h2 class="sm:text-2xl text-xl font-medium text-center mt-8">
      {{ title }}
    </h2>
    <p
      v-html="description"
      class="text-center sm:text-xl text-base font-extralight mt-5"
    ></p>
    <!--a class="font-extralight underline mt-8" href="">Mehr erfahren</a-->
  </div>
</template>
