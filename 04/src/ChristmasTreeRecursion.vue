<template>
  <div>
    <template v-if="size > 1">
      <ChristmasTreeRecursion :size="size - 1" />
    </template>
    <div class="flex flex-row justify-center">
      <template v-for="n of size">
        <div class="relative rounded-full bg-light-green w-16 h-16 -m-2 flex justify-center items-center" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
/*
 * This component implements the intended solution of this puzzle by recursively calling itself over and over again to
 * build the Christmas tree.
 *
 * See IMPLEMENTATION_DETAILS.md for more information.
 */

withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>
