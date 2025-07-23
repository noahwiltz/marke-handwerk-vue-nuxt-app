<script setup></script>

<template>
  <div
    class="w-full flex sm:flex-row flex-col justify-between items-start [background-color:#EFEFEF] pt-10 sm:px-25 p-10 pb-18"
  >
    <div>
      <h2 class="sm:text-3xl text-2xl font-semibold">Hilfe und Kontakt</h2>
      <div
        class="w-48 h-48 bg-cover bg-center rounded mt-7"
        style="background-image: url('/images/hero-stage.jpeg')"
      ></div>
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
          <img class="w-4" src="/icons/call-icon.svg" alt="Call icon" />
        </div>
        <a class="text-base mx-4" href="mailto:info@marke-handwerk.de"
          >info@marke-handwerk.de</a
        >
      </div>
    </div>
    <div>
      <h2 class="sm:text-3xl text-2xl font-semibold sm:mt-0 mt-10">
        Sie finden mich hier
      </h2>
      <div class="flex gap-x-5">
        <div class="w-fit [background-color:#1D341A] rounded p-3 mt-5">
          <a href="https://instagram.com/marke_handwerk" target="_blank"
            ><img src="/icons/call-icon.svg" alt="Call icon"
          /></a>
        </div>
        <div class="w-fit [background-color:#1D341A] rounded p-3 mt-5">
          <a href="mailto:info@marke-handwerk.de"
            ><img src="/icons/call-icon.svg" alt="Call icon"
          /></a>
        </div>
      </div>
    </div>
    <div>
      <h2 class="sm:text-3xl text-2xl font-semibold sm:mt-0 mt-10">
        Leistungen
      </h2>
      <p class="text-base mt-5">Marken-Check-Up</p>
      <p class="text-base mt-5">Lorem ipsum</p>
      <p class="text-base mt-5">Lorem ipsum</p>
      <p class="text-base mt-5">Lorem ipsum</p>
      <p class="text-base mt-5">Lorem ipsum</p>
    </div>
    <div>
      <h2 class="text-3xl font-semibold sm:mt-0 mt-10">Sitemap</h2>
      <p class="text-base mt-5">Startseite</p>
      <p class="text-base mt-5">Leistungen</p>
      <p class="text-base mt-5">Über mich</p>
      <p class="text-base mt-5">Impressum</p>
      <p class="text-base mt-5">Datenschutz</p>
    </div>
  </div>
</template>
