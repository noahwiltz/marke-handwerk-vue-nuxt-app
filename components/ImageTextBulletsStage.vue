<script setup>
defineProps({
  image: String,
  title: String,
  subTitle: String,
  description: String,
});
</script>

<template>
  <div class="flex flex-row px-25 mt-30">
    <div
      class="w-1/2 h-210 bg-cover bg-center rounded-lg"
      style="background-image: url('/images/hero-stage.png')"
    ></div>
    <div class="w-1/2 p-18">
      <h2 class="text-7xl font-semibold uppercase [color:#1D341A]">
        {{ title }}
      </h2>
      <h3 class="text-2xl font-medium mt-3">{{ subTitle }}</h3>
      <p v-html="description" class="text-xl font-extralight mt-5"></p>
      <div class="flex gap-x-5">
        <div class="flex flex-col gap-x-5">
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded p-6"></div>
            <p class="text-2xl font-medium ms-5">Markenentwicklung</p>
          </div>
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded p-6"></div>
            <p class="text-2xl font-medium ms-5">Visionär</p>
          </div>
        </div>
        <div class="flex flex-col gap-x-5">
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded p-6"></div>
            <p class="text-2xl font-medium ms-5">Brandmanager</p>
          </div>
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded p-6"></div>
            <p class="text-2xl font-medium ms-5">Markenstratege</p>
          </div>
        </div>
      </div>
      <!--div class="flex items-center mt-8">
        <div class="[background-color:#1D341A] rounded p-6"></div>
        <p class="text-2xl font-medium ms-5"></p>
      </div-->
      <!--div class="flex items-center mt-8">
        <div class="[background-color:#1D341A] rounded p-6"></div>
        <p class="text-2xl font-medium ms-5"></p>
      </div-->
    </div>
  </div>
</template>
