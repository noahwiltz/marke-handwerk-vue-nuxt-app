<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<template>
  <div class="flex absolute w-full z-90">
    <NuxtLink class="z-90" to="/">
      <img
        class="min-w-[150px] sm:w-auto w-35 lg:ms-25 m-0 z-90"
        src="/marke-handwerk-logo.svg"
        alt="Logo"
      />
    </NuxtLink>
    <nav
      class="flex relative w-full h-26 items-center space-x-20 bg-black/30 sm:px-25 px-10"
    >
      <div class="flex w-full items-center space-x-20" id="nav-desktop">
        <NuxtLink
          to="/"
          class="text-lg text-white hover:underline duration-300 ease-in-out"
          >Startseite
        </NuxtLink>
        <NuxtLink
          to="/"
          class="text-lg text-white hover:underline duration-300 ease-in-out"
          >Markenversprechen
        </NuxtLink>
        <NuxtLink
          to="/"
          class="text-lg text-white hover:underline duration-300 ease-in-out"
          >Über mich
        </NuxtLink>
        <NuxtLink
          to="/"
          class="text-lg text-white hover:underline duration-300 ease-in-out"
          >Leistungen
        </NuxtLink>
        <div class="absolute right-25 flex items-center">
          <div class="[background-color:#1D341A] rounded p-3">
            <img src="/icons/call-icon.svg" alt="Call icon" />
          </div>
          <a class="text-white mx-4" href="tel:+491737943151"
            >+49 173 / 7943151</a
          >
          <NuxtLink
            to="/#kontakt"
            class="text-white uppercase [background-color:#1D341A] rounded p-3"
            >Kontakt
          </NuxtLink>
        </div>
      </div>
      <!-- Mobile Hamburger Icon -->
      <button
        class="absolute focus:outline-none sm:right-25 right-10 z-100"
        @click="menuOpen = !menuOpen"
        id="burger-menu"
      >
        <svg
          class="w-8 h-8 [color:#1D341A]"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else class="text-white" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
  </div>

  <!-- Mobile Dropdown -->
  <transition name="fade" class="z-50">
    <div
      v-if="menuOpen"
      class="absolute w-full h-full [background-color:#1D341A]/90 text-white flex flex-col items-center justify-start space-y-4 top-0 pt-30 md:hidden transition-all ease-in-out delay-300"
    >
      <NuxtLink to="/" @click="menuOpen = false">Startseite</NuxtLink>
      <NuxtLink to="/#markenversprechen" @click="menuOpen = false"
        >Markenversprechen</NuxtLink
      >
      <NuxtLink to="/#ueber-mich" @click="menuOpen = false">Über mich</NuxtLink>
      <NuxtLink to="/#leistungen" @click="menuOpen = false"
        >Leistungen</NuxtLink
      >
      <div class="flex items-center space-x-3 mt-4">
        <div class="bg-ci-primary rounded p-2">
          <img src="/icons/call-icon.svg" alt="Call icon" />
        </div>
        <a href="tel:+491737943151">+49 173 / 7943151</a>
      </div>
      <NuxtLink
        to="/#kontakt"
        class="bg-ci-primary px-4 py-2 rounded mt-2 uppercase"
        @click="menuOpen = false"
        >Kontakt</NuxtLink
      >
    </div>
  </transition>
</template>

<style>
#burger-menu {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (max-width: 1550px) {
  #nav-desktop {
    display: none;
  }
  #burger-menu {
    display: flex;
  }
}
</style>
