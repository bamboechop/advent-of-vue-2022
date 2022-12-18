<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in localPresents"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>
      <div class="flex justify-center mt-8">
        <button
          type="button"
          @click="sorted = !sorted">
          Toggle sort
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import presents from './presents.json'

  const sorted = ref(false);

  const localPresents = computed(() => [...presents].sort((a, b) => {
    if(sorted.value) {
      if(a.dimensions.height * a.dimensions.width > b.dimensions.height * b.dimensions.width) {
        return 1;
      }
      if(a.dimensions.height * a.dimensions.width < b.dimensions.height * b.dimensions.width) {
        return -1;
      }
      return 0;
    }
    return a.id - b.id;
  }));
</script>
