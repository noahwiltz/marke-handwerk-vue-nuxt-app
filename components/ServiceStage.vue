<script setup>
import { ref, onMounted } from "vue";

const sliderRef = ref(null);
let isDown = false;
let startX;
let scrollLeft;

onMounted(() => {
  const slider = sliderRef.value;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("cursor-grabbing");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; // Scroll speed factor
    slider.scrollLeft = scrollLeft - walk;
  });
});
</script>

<template>
  <div class="mb-10" id="leistungen"></div>
  <div class="sm:p-25 p-10">
    <TitleDivider
      title="Meine Leistungen"
      subTitle="Mit meiner Dienstleistung zu nachhaltigem Markenerfolg."
      description="Wir schauen uns die Substanz für Ihre Marke gemeinsam an.<br> Das verschafft mir einen Überblick darüber, wo ich ansetzen kann."
    />
    <div class="relative w-fit group mx-auto mt-10 2xl:hidden">
      <div
        class="text-md font-semibold [color:#1D341A] group-hover:opacity-100 opacity-90 transition-opacity duration-300"
      >
        - Zum Swipen wischen -
      </div>
    </div>
    <div class="flex gap-3 mt-18 overflow-x-auto cursor-grab" ref="sliderRef">
      <ImageCard
        image="/images/hero-stage.jpeg"
        title="Marken-Check-Up"
        description="<br>Vermittlung eines generellen und korrekten Markenverständnisses. Beispiele für erfolgreiche Marken im Handwerk. <br><br>"
        link="awd"
        class="min-w-[350px] shrink-0"
      />
      <ImageCard
        image="/images/hero-stage.jpeg"
        title="Markenstrategie-Entwicklung"
        description="<li>Brand Touchpoints / Markenkontaktpunkte</li><li>Markenkern</li><li>Markenwerte</li><li>Markenpersönlichkeit</li><br>Entwicklung von Markenkontaktpunkten an denen Kunden mit Ihrer Marke in Berührung kommen können und sollen. Ableitung von Markenkern, werten und persönlichkeit. Sowie die Festlegung von Kennzahlen zur späteren Markenerfolgsmessung"
        link="awd"
        class="min-w-[350px] shrink-0"
      />
      <ImageCard
        image="/images/hero-stage.jpeg"
        title="Markenaufbau"
        description="Workshops zur Entwicklung Ihrer Markenidentität, die das Führungspersonal mit einbezieht. Ableitung von konkreten Maßnahmen."
        link="awd"
        class="min-w-[350px] shrink-0"
      />
      <ImageCard
        image="/images/hero-stage.jpeg"
        title="Markenstrategie-Umsetzung"
        description="Konsistente und kohärente Führung der Marke über alle Kanäle hinweg, sowohl verbal als auch visuell, entlang des Kundenerlebnisses. <br><br>"
        link="awd"
        class="min-w-[350px] shrink-0"
      />
    </div>
  </div>
</template>
