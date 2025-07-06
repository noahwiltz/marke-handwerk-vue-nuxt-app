<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center min-w-[370px] max-w-[370px] max-h-[400px] rounded-lg bg-white p-10 hover:scale-95 duration-300 ease-in-out cursor-pointer"
  >
    <div class="[background-color:#1D341A] rounded p-8">
      <img class="w-6 fill-black" src="/icons/call-icon.svg" alt="" />
    </div>
    <h2 class="text-2xl mt-8">{{ title }}</h2>
    <p
      v-html="description"
      class="text-center text-xl font-extralight mt-5"
    ></p>
    <a class="font-extralight underline mt-8" href="">Mehr erfahren</a>
  </div>
</template>
