<script setup>
defineProps({
  title: String,
  type: {
    type: String,
    default: "text",
  },
  width: {
    type: String,
    default: "w-full",
  },
});
</script>

<template>
  <input
    :class="`${width} text-gray-400 placeholder:text-white placeholder:opacity-30 focus-visible:outline-gray-300 focus-visible:outline-1 [background-color:#142412] rounded p-3 mt-3`"
    :type="type"
    :placeholder="`${title}`"
    id="company"
  />
</template>
