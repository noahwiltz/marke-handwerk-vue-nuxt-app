<script setup>
import { ref } from "vue";

const position = ref("");
</script>

<template>
  <div class="mb-10" id="kontakt"></div>
  <TitleDivider
    title="Kontakt aufnehmen"
    subTitle="Treten Sie mit mir in Kontakt für ein unverbindliches Kennenlernen!"
    description="Ich melde mich schnellstmöglich bei Ihnen zurück und wir schauen gemeinsam welche Leistungen für Sie in Frage kommen."
  />
  <form>
    <div class="flex sm:p-25 p-0 pt-18" id="form-container">
      <div
        class="w-full lg:w-1/2 [background-color:#1D341A] bg-ci-primary rounded-l-md sm:p-18 p-10 pb-20"
      >
        <p class="sm:text-2xl text-xl text-white font-medium mb-2">
          Geben Sie mir <span class="font-semibold">Ihre Kontaktdaten:</span>
        </p>
        <InputField title="Firmenname" required />
        <div class="flex gap-x-3">
          <InputField title="Vorname" width="w-1/2" />
          <InputField title="Nachname" width="w-1/2" required />
        </div>
        <select
          v-model="position"
          class="w-full text-gray-400 placeholder:text-white placeholder:opacity-30 focus-visible:outline-gray-300 focus-visible:outline-1 [background-color:#142412] rounded p-3 mt-3"
          id="company"
        >
          <option value="" hidden>Position Im Unternehmen</option>
          <option value="Inhaber & Geschäftsführer">
            Inhaber & Geschäftsführer
          </option>
          <option value="Geschäftsführer">Geschäftsführer</option>
          <option value="Inhaber">Inhaber</option>
        </select>
        <!--p class="text-2xl text-white font-medium mt-5 mb-2">
          <span class="font-semibold">Wann </span>kann ich Sie am besten
          erreichen?
        </p>
        <InputField title="Wähle einen Tag und die passende Uhrzeit aus" /-->
        <p class="sm:text-2xl text-xl text-white font-medium mt-5 mb-2">
          <span class="font-semibold">Wie </span>kann ich Dich am besten
          erreichen?
        </p>
        <InputField title="Telefonnummer" type="tel" />
        <InputField title="Deine E-Mail-Adresse" type="email" required />
        <input
          type="submit"
          value="Anfrage absenden"
          class="block sm:text-lg text-base font-medium bg-white rounded cursor-pointer px-5 py-2 mx-auto mt-10"
        />
      </div>
      <div
        class="sm:w-1/2 w-full flex flex-col items-center [background-color:#EFEFEF] rounded-r-md p-20 pt-18"
      >
        <div
          class="w-full max-w-[400px] sm:h-[400px] h-[330px] bg-cover bg-center rounded"
          style="background-image: url('/images/about-me.jpeg')"
        ></div>
        <div class="flex flex-col jusitfy-center items-center mt-10">
          <p class="sm:text-2xl text-xl font-semibold">Yannick Zabywalski</p>
          <p class="sm:text-xl text-lg font-normal">Ihr Ansprechpartner</p>
          <div class="ms-15">
            <div class="flex items-center mt-10">
              <div class="[background-color:#1D341A] rounded sm:p-3 p-2">
                <img class="w-5" src="/icons/call-icon.svg" alt="Call icon" />
              </div>
              <a class="text-base mx-4" href="tel:+491737943151"
                >+49 173 / 7943151</a
              >
            </div>
            <div class="flex items-center mt-5">
              <div class="[background-color:#1D341A] rounded sm:p-3 p-2">
                <img class="w-5" src="/icons/call-icon.svg" alt="Call icon" />
              </div>
              <a class="text-base mx-4" href="mailto:info@marke-handwerk.de"
                >info@marke-handwerk.de</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style>
@media screen and (max-width: 1300px) {
  #form-container {
    flex-direction: column;
  }
}
</style>
