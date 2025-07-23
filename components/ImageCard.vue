<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  link: String,
});
</script>

<template>
  <div class="hover:scale-95 duration-300 ease-in-out">
    <div
      class="sm:max-w-[430px] max-w-[330px] sm:h-[300px] h-[200px] bg-cover bg-center rounded"
      :style="`background-image: url('${image}')`"
    ></div>
    <div
      class="sm:max-w-[430px] max-w-[330px] flex flex-col justify-center items-center [background-color:#EFEFEF] rounded-br rounded-b pt-10 px-8 pb-12"
    >
      <h2 class="sm:text-2xl text-xl font-medium text-center">{{ title }}</h2>
      <p
        v-html="description"
        class="max-w-96 sm:text-xl text-base font-extralight text-center mt-10"
      ></p>
      <a
        class="sm:text-xl text-lg font-medium underline mt-12"
        v-if="link"
        :href="link"
        >Mehr erfahren</a
      >
    </div>
  </div>
</template>
