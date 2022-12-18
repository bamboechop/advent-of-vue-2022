<template>
  <div class="flex flex-col items-center mt-24 min-h-screen w-full">
    <h1 class="mt-8 text-xl font-bold">Drag the presents under the tree!</h1>
    <ChristmasTree
      :presents="underTheTree"
      class="mt-16"
      @dragenter.prevent
      @dragover.prevent
      @drop="onDrop" />
    <div
      v-if="presents.length > 0"
      class="pt-32 mt-32 bg-gray-100 w-full justify-center flex-1">
      <div class="flex items-end justify-center" v-auto-animate>
        <ChristmasPresent
          v-for="present of presents"
          :key="present"
          :name="present"
          draggable="true"
          @dragstart="startDrag($event, present)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ChristmasPresent from './components/ChristmasPresent.vue'
  import ChristmasTree from './components/ChristmasTree.vue'
  import { ref } from 'vue'

  type TPresent = 'small-red-gift' | 'blue-gift' | 'tall-red-gift';

  const presents = ref<TPresent[]>(['small-red-gift', 'blue-gift', 'tall-red-gift'])
  const underTheTree = ref<TPresent[]>([])

  const startDrag = (evt: DragEvent, present: TPresent): void => {
    evt.dataTransfer.setData(`present`, present);
  }

  const onDrop = (evt: DragEvent): void => {
    const presentData = evt.dataTransfer.getData(`present`) as TPresent;
    presents.value = presents.value.filter(present => present !== presentData);
    underTheTree.value.push(presentData);
  }
</script>
