<script setup>
defineProps({
  image: String,
  title: String,
  subTitle: String,
  description: String,
});
</script>

<template>
  <div class="flex px-10 mt-30" id="image-text-bullets-container">
    <div
      class="sm:w-1/2 w-full sm:h-210 h-100 bg-cover bg-center rounded-lg"
      style="background-image: url('/images/about-me.jpeg')"
    ></div>
    <div class="sm:w-1/2 w-full sm:p-18 p-10">
      <h2 class="sm:text-7xl text-3xl font-semibold uppercase [color:#1D341A]">
        {{ title }}
      </h2>
      <h3 class="sm:text-2xl text-xl font-medium mt-3">{{ subTitle }}</h3>
      <p
        v-html="description"
        class="sm:text-xl text-base font-extralight mt-5"
      ></p>
      <div class="flex sm:flex-row flex-col gap-x-5">
        <div class="flex flex-col gap-x-5">
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded sm:p-6 p-4"></div>
            <p class="sm:text-2xl text-xl font-medium ms-5">
              Markenentwicklung
            </p>
          </div>
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded sm:p-6 p-4"></div>
            <p class="sm:text-2xl text-xl font-medium ms-5">Visionär</p>
          </div>
        </div>
        <div class="flex flex-col gap-x-5">
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded sm:p-6 p-4"></div>
            <p class="sm:text-2xl text-xl font-medium ms-5">Brandmanager</p>
          </div>
          <div class="flex items-center mt-8">
            <div class="[background-color:#1D341A] rounded sm:p-6 p-4"></div>
            <p class="sm:text-2xl text-xl font-medium ms-5">Markenstratege</p>
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

<style>
@media screen and (max-width: 992px) {
  #image-text-bullets-container {
    flex-direction: column;
  }
}
</style>
