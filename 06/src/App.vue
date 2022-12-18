<template>
  <div class="w-full h-full flex flex-col gap-4 justify-center items-center">
    <h1 class="text-2xl font-bold">Non composable solution</h1>
    <NonComposableSolution />
    <hr class="border-b-8 w-full border-black" />
    <h1 class="text-2xl font-bold">Composable solution</h1>
    <ComposableSolution />
  </div>
</template>

<script setup>
import ComposableSolution from '@/composable-solution/ComposableSolution.vue';
import NonComposableSolution from '@/non-composable-solution/NonComposableSolution.vue';
</script>
