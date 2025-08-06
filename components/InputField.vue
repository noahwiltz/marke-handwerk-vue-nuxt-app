<script setup>
const props = defineProps({
  modelValue: String,
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
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :type="props.type"
    :placeholder="props.title"
    :class="`${width} text-base text-gray-400 placeholder:text-white placeholder:opacity-30 focus-visible:outline-gray-300 focus-visible:outline-1 [background-color:#142412] rounded p-3 mt-3`"
  />
</template>
