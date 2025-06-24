<script setup></script>

<template>
  <div class="flex">
    <img class="w-auto ms-24" src="/marke-handwerk-logo.svg" alt="Logo" />
    <nav class="flex w-full h-26 items-center space-x-20 bg-black/30 px-32">
      <NuxtLink to="/" class="text-md text-white">Startseite </NuxtLink>
      <NuxtLink to="/" class="text-lg text-white">Deine Vorteile </NuxtLink>
      <NuxtLink to="/" class="text-lg text-white">Leistungen </NuxtLink>
      <NuxtLink to="/" class="text-lg text-white">Über mich </NuxtLink>
      <div>
        <div class="bg-ci-primary rounded p-3">
          <img src="/icons/call-icon.svg" alt="Call icon" />
        </div>
      </div>
    </nav>
  </div>
</template>
