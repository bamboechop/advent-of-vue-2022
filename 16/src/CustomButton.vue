<template>
  <button
    class="custom-button"
    :disabled="disabled"
    :id="id"
    :type="type">
    {{ text }}
  </button>
</template>

<script setup>
  /*
   * Added additionally during stream to explain how I do custom button components
   * at the moment as a comparison to the v-button directive which does a similar thing
   */

  defineProps({
    disabled: { default: false, type: Boolean },
    id: String,
    text: String,
    type: { default: `button`, type: String },
  });
</script>