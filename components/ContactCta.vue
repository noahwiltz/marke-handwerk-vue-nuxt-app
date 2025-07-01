<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center mt-18">
    <h2 class="text-5xl [color:#1D341A] font-semibold">
      Kostenloses Erstgespräch
    </h2>
    <p class="text-center text-xl font-extralight mt-5">
      Schreib mir eine Nachricht oder rufe mich an.
    </p>
    <NuxtLink
      to="/"
      class="text-white text-xl font-medium [background-color:#1D341A] rounded px-5 py-2 mt-8"
      >Termin vereinbaren
    </NuxtLink>
    <p class="text-center text-xl font-extralight mt-8">- oder -</p>
    <div class="flex items-center mt-8">
      <div class="[background-color:#1D341A] rounded p-3">
        <img src="/icons/call-icon.svg" alt="Call icon" />
      </div>
      <a
        class="[color:#1D341A] text-xl font-extralight mx-4"
        href="tel:+491737943151"
        >+49 173 / 7943151</a
      >
    </div>
  </div>
</template>
