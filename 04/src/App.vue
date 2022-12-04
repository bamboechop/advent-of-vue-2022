<template>
  <div class="w-full h-full flex justify-center items-center gap-8">
    <div class="flex flex-col items-center justify-center gap-8">
      <h2>Christmas tree with recursion</h2>
      <ChristmasTreeRecursion :size="7" />
    </div>
    <div class="flex flex-col items-center justify-center gap-8">
      <h2>Christmas tree with recursion and named slot</h2>
     <ChristmasTreeRecursionWithSlot :size="7" />
    </div>
    <div class="flex flex-col items-center justify-center gap-8">
      <h2>Christmas tree with loops</h2>
      <ChristmasTreeWithLoops :size="7" />
    </div>
  </div>
</template>

<script setup>
import ChristmasTreeRecursion from '@/ChristmasTreeRecursion.vue'
import ChristmasTreeRecursionWithSlot from '@/ChristmasTreeRecursionWithSlot.vue'
import ChristmasTreeWithLoops from '@/ChristmasTreeWithLoops.vue'
</script>
