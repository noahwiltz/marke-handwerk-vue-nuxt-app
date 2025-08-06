<script setup>
import { NuxtLink } from "#components";
</script>

<template>
  <div
    class="w-full flex justify-between items-start [background-color:#EFEFEF] pt-10 sm:px-25 p-10 pb-18"
    id="footer-container"
  >
    <div>
      <h2 class="sm:text-3xl text-2xl font-semibold">Hilfe und Kontakt</h2>
      <!--div
        class="w-48 h-48 bg-cover bg-center rounded mt-7"
        style="background-image: url('/images/about-me.jpeg')"
      ></div-->
      <p class="text-lg font-medium mt-5">Yannick Zabywalski</p>
      <p class="text-base">Marken- und Strategieberater</p>
      <div class="flex items-center mt-5">
        <div class="[background-color:#1D341A] rounded p-2">
          <img class="w-4" src="/icons/call-icon.svg" alt="Call icon" />
        </div>
        <a class="text-base mx-4" href="tel:+491737943151">+49 173 / 7943151</a>
      </div>
      <div class="flex items-center mt-5">
        <div class="[background-color:#1D341A] rounded p-2">
          <img class="w-4" src="/icons/mail-icon.svg" alt="Mail icon" />
        </div>
        <a class="text-base mx-4" href="mailto:info@marke-handwerk.de"
          >info@marke-handwerk.de</a
        >
      </div>
    </div>
    <div>
      <h2 class="sm:text-3xl text-2xl font-semibold xl:mt-0 mt-10">
        Sie finden mich hier
      </h2>
      <div class="flex gap-x-5">
        <div class="w-fit [background-color:#1D341A] rounded p-3 mt-5">
          <a href="https://instagram.com/marke_handwerk" target="_blank">
            <img
              class="sm:w-6 w-4"
              src="/public/icons/instagram-icon.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-col">
        <h2 class="sm:text-3xl text-2xl font-semibold xl:mt-0 mt-10">
          Leistungen
        </h2>
        <NuxtLink class="text-base mt-5" to="/#leistungen"
          >Marken-Check-Up</NuxtLink
        >
        <NuxtLink class="text-base mt-5" to="/#leistungen"
          >Markenstrategie-Entwicklung</NuxtLink
        >
        <NuxtLink class="text-base mt-5" to="/#leistungen"
          >Markenaufbau</NuxtLink
        >
        <NuxtLink class="text-base mt-5" to="/#leistungen"
          >Markenstrategie-Umsetzung</NuxtLink
        >
      </div>
    </div>
    <div>
      <div class="flex flex-col">
        <h2 class="sm:text-3xl text-2xl font-semibold xl:mt-0 mt-10">
          Sitemap
        </h2>
        <NuxtLink class="text-base mt-5" to="/">Startseite</NuxtLink>
        <NuxtLink class="text-base mt-5" to="/#leistungen">Leistungen</NuxtLink>
        <NuxtLink class="text-base mt-5" to="/#ueber-mich">Über Mich</NuxtLink>
        <NuxtLink class="text-base mt-5" to="/impressum">Impressum</NuxtLink>
        <NuxtLink class="text-base mt-5" to="/datenschutz"
          >Datenschutz</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 1280px) {
  #footer-container {
    flex-direction: column;
  }
}
</style>
