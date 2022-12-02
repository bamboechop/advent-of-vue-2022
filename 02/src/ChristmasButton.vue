<template>
  <button
    class="bg-red-700 border-4 border-white rounded-2xl px-12 py-2 text-white"
    type="button"
    @click="emit(`click:button`)">
    {{ text }}
  </button>
</template>

<script setup>
  const emit = defineEmits([`click:button`]);
  defineProps({
    text: String,
  });
</script>
