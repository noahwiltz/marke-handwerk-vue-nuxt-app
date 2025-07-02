<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  link: String,
});
</script>

<template>
  <div>
    <div
      class="max-w-[430px] h-[300px] bg-cover bg-center rounded-t"
      :style="`background-image: url('${image}')`"
    ></div>
    <div
      class="max-w-[430px] flex flex-col justify-center items-center [background-color:#EFEFEF] rounded-br rounded-b pt-10 px-8 pb-12"
    >
      <h2 class="text-2xl font-medium">{{ title }}</h2>
      <p
        v-html="description"
        class="max-w-96 text-xl font-extralight text-center mt-10"
      ></p>
      <a class="text-xl font-medium underline mt-12" v-if="link" :href="link"
        >Mehr erfahren</a
      >
    </div>
  </div>
</template>
