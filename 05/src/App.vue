<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
      <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
        <div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
          <img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 bg-white text-black p-2 rounded">TO: {{ to }}</div>
            <div class="mt-2 bg-white text-black p-2 rounded">FROM: {{ from }}</div>
          </div>
        </div>
      </div>
      <div class="print:hidden">
        <label class="block mt-4 bg-white text-black p-2 rounded">
          To:
          <input
            v-model="to"
            class="border-b-2 border-black"
            type="text" />
        </label>
        <label class="block mt-2 bg-white text-black p-2 rounded">
          From:
          <input
            v-model="from"
            class="border-b-2 border-black"
            type="text" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const from = ref(``);
const to = ref(``);
</script>
