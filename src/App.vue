<template>
  <div class="w-full bg-gray-300 h-full flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center gap-2 p-8 rounded-2xl w-1/2">
      <template v-if="!loading">
        <ChatBubble
          css-classes="bg-teal-800 text-white self-start"
          data-qa="setup"
          :text="joke.question" />
        <template v-if="joke.showAnswer">
          <ChatBubble
            css-classes="bg-teal-600 text-white self-end text-right"
            data-qa="delivery"
            :text="joke.answer" />
        </template>
        <div class="mt-6">
          <template v-if="!joke.showAnswer">
            <ChristmasButton
              text="Tell Me!"
              @click:button="joke.showAnswer = true" />
          </template>
          <template v-if="joke.showAnswer">
            <ChristmasButton
              text="Another"
              @click:button="fetchJoke" />
          </template>
        </div>
      </template>
      <template v-if="loading">
        <Spinner />
      </template>
    </div>
  </div>
</template>

<script setup>
import ChristmasButton from '@/ChristmasButton.vue'
import ChatBubble from '@/ChatBubble.vue'
import Spinner from '@/Spinner.vue'
import { ref } from 'vue'

  const joke = ref({
    answer: ``,
    question: ``,
    showAnswer: false,
  });
  const loading = ref(false);

  async function fetchJoke() {
    loading.value = true;
    joke.value = {
      answer: ``,
      question: ``,
      showAnswer: false,
    };
    const response = await fetch(`https://v2.jokeapi.dev/joke/christmas`);
    if(response.ok) {
      /**
       * @type { { delivery: string; error: boolean; setup: string; } } jokeObject
       */
      const jokeObject = await response.json();
      if(jokeObject.error) {
        alert(`Couldn't parse joke. Please reload!`);
        return;
      }
      joke.value.answer = jokeObject.delivery;
      joke.value.question = jokeObject.setup;
    } else {
      alert(`Something went wrong!`);
    }
    loading.value = false;
  }

  fetchJoke();
</script>
