<template>
  <div>
    <template v-for="n of size">
      <div class="flex flex-row justify-center">
        <template v-for="x of n">
          <div class="relative rounded-full bg-dark-green w-16 h-16 -m-2 flex justify-center items-center" />
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
/*
 * This component implements the another solution of this puzzle by just looping twice based on the size prop provided.
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
