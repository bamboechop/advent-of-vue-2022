<script setup>
import CComparsionSummary from '@/composable-solution/components/CComparsionSummary.vue';
import CItemSelect from '@/composable-solution/components/CItemSelect.vue';
</script>

<template>
  <div class="w-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <CItemSelect />
      <CItemSelect />
    </div>
    <CComparsionSummary />
  </div>
</template>
