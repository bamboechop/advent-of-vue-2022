<template>
  <div class="w-full h-full flex flex-col justify-center items-center text-center gap-12">
    <p v-christmas>Red + Green (default)</p>
    <p v-christmas:red>Red only</p>
    <p v-christmas:green>Green only</p>
    <p v-christmas="5">Slower Animation</p>
    <div v-loading-spinner></div>
    <div v-loading-circle></div>
    <div v-loading-circle="`#fc80a0`"></div>
    <CustomButton
      id="hallo-twitch-button"
      text="Hallo Twitch" />
    <button v-button="{ id: `hello-twitch-chat-button`, text: `Hello Twitch Chat` }">
      Hier ist mein Text
    </button>
    <a
      href="https://google.com"
      target="_blank"
      v-button="{ id: `hello-twitch-chat-button-link`, text: `Hello Twitch Chat` }"></a>
    <a
      class="custom-button"
      href="https://google.com"
      target="_blank">Test</a>
  </div>
</template>
<script setup>
import CustomButton from '@/CustomButton.vue'
</script>