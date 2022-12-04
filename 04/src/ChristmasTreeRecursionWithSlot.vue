<template>
  <div>
    <template v-if="size > 0">
      <ChristmasTreeRecursionWithSlot :size="size - 1">
        <template #tree>
          <div class="flex flex-row justify-center">
            <template v-for="n of size">
              <div class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center" />
            </template>
          </div>
        </template>
      </ChristmasTreeRecursionWithSlot>
    </template>
    <slot name="tree"></slot>
  </div>
</template>

<script setup lang="ts">
/*
 * This component implements the intended solution of this puzzle by recursively calling itself over and over again to
 * build the Christmas tree and providing a named slot as mentioned by the hints.md.
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
