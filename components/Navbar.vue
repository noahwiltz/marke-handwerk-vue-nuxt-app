<script setup></script>

<template>
  <div class="absolute w-full flex">
    <img class="w-auto ms-25" src="/marke-handwerk-logo.svg" alt="Logo" />
    <nav
      class="relative flex w-full h-26 items-center space-x-20 bg-black/30 px-25"
    >
      <NuxtLink
        to="/"
        class="text-lg text-white hover:underline duration-300 ease-in-out"
        >Startseite
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-lg text-white hover:underline duration-300 ease-in-out"
        >Deine Vorteile
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-lg text-white hover:underline duration-300 ease-in-out"
        >Leistungen
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-lg text-white hover:underline duration-300 ease-in-out"
        >Über mich
      </NuxtLink>
      <div class="absolute right-25 flex items-center">
        <div class="[background-color:#1D341A] rounded p-3">
          <img src="/icons/call-icon.svg" alt="Call icon" />
        </div>
        <a class="text-white mx-4" href="tel:+491737943151"
          >+49 173 / 7943151</a
        >
        <NuxtLink
          to="/#contact"
          class="text-white uppercase [background-color:#1D341A] rounded p-3"
          >Kontakt
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
