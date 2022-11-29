<template>
  <p
    class="max-w-[50%] w-auto p-4 rounded-2xl"
    :class="cssClasses">
    {{ text }}
  </p>
</template>

<script setup>
  defineProps({
    cssClasses: String,
    text: String,
  });
</script>
