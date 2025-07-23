<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center mt-18">
    <h2
      class="sm:text-5xl text-2xl [color:#1D341A] font-semibold text-center mx-5"
    >
      Kostenloses Erstgespräch
    </h2>
    <p class="text-center sm:text-xl text-base font-extralight px-10 mt-5">
      Schreiben Sie mir eine Nachricht oder rufen Sie mich an, um einen Termin
      zu vereinbaren.
    </p>
    <NuxtLink
      to="/#contact"
      class="text-white sm:text-xl text-base font-medium [background-color:#1D341A] rounded px-5 py-2 mt-8"
      >Termin vereinbaren
    </NuxtLink>
    <p class="text-center sm:text-xl text-base font-extralight mt-8">
      - oder -
    </p>
    <div class="flex items-center mt-8">
      <div class="[background-color:#1D341A] rounded sm:p-3 p-2">
        <img class="w-5" src="/icons/call-icon.svg" alt="Call icon" />
      </div>
      <a
        class="[color:#1D341A] sm:text-xl text-base font-extralight mx-4"
        href="tel:+491737943151"
        >+49 173 / 7943151</a
      >
    </div>
  </div>
</template>
