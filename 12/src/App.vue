<template>
  <div class="w-full h-full flex flex-col justify-center gap-8 items-center">
    <span class="text-3xl">Find Joseph's gift!</span>
    <label for="available-gifts-range-input">Amount of gifts available:</label>
    <input
      v-model.number="availableGifts"
      id="available-gifts-range-input"
      max="30"
      min="2"
      step="1"
      type="range" />
    <div class="flex justify-between w-full max-w-sm">
      <button
        class="border-2 border-black disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="currentStep === 1"
        type="button"
        @click="currentStep = 1">&lt;&lt;</button>
      <button
        class="border-2 border-black disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="currentStep === 1"
        type="button"
        @click="currentStep--">&lt;</button>
      <button
        class="border-2 border-black disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
        @click="currentStep++">&gt;</button>
      <button
        class="border-2 border-black disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
        @click="">&gt;&gt;</button>
    </div>
    <div class="app-grid">
      <template
        v-for="index of availableGifts"
        :key="`gift-${index}`">
        <div class="border-2 border-black present">
          {{ index }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

  const availableGifts = ref(2);
  const currentStep = ref(1);
</script>

<style>
  .app-grid {
    align-content: start;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(5, 1fr);
    height: 205px;
  }

  .present {
    height: 30px;
    text-align: center;
    width: 30px;
  }
</style>
