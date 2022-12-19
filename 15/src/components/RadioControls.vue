<template>
  <div class="w-full relative rounded bg-gray-800 text-white">
    <input
      :value="currentTime"
      @input="currentTime = $event.target.value"
      class="progress rounded h-1 w-full hover:bg-gray-500 absolute top-0"
      :max="duration"
      type="range" />
    <div class="flex sm:justify-center items-center">
      <button class="pl-5" @click="prev()" title="Previous Song">
        <IconChevronLeft />
      </button>

      <button @click="rewind()" title="Rewind">
        <IconBackward />
      </button>

      <button
        @click="playing ? pause() : play()"
        class="bg-green rounded-full w-12 h-12 scale-150 mx-5"
        :title="playing ? 'Pause' : 'Play'"
      >
        <Transition>
          <IconPause class="absolute top-[50%] left-[50%]" style="transform: translate(-50%, -50%)" v-if="playing" />
          <IconPlay class="absolute top-[50%] left-[50%]" style="transform: translate(-50%, -50%)" v-else />
        </Transition>
      </button>

      <button @click="ff()" title="Fast Forward">
        <IconForward />
      </button>
      <button @click="next()" title="Next Song">
        <IconChevronRight />
      </button>
    </div>
    <input
      :value="volume * 100"
      @input="volume = $event.target.value / 100"
      class="absolute right-5 w-24 top-[50%] volume-range"
      style="transform: translateY(-50%)"
      type="range"
    />
    <div class="hidden sm:block absolute left-5 w-24 top-[50%] whitespace-nowrap" style="transform: translateY(-50%)">
      {{ timeDisplay }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import IconBackward from '@/components/icons/IconBackward.vue'
import IconForward from '@/components/icons/IconForward.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPause from '@/components/icons/IconPause.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import { useCurrentTrack } from '@/composables/useCurrentTrack'
import { usePlaylist } from '@/composables/usePlaylist'
const { duration, play, pause, rewind, ff, currentTime, playing, timeDisplay, volume, progress } = useCurrentTrack()
const { next, prev } = usePlaylist()

const progressGradient = computed(() => {
  return `linear-gradient(90deg, rgba(66, 184, 131, 1) 0%, rgba(0, 48, 255, 1) ${(currentTime.value / duration.value) * 100}%, transparent ${
    (currentTime.value / duration.value) * 100
  }%)`;
})

const volumneGradient = computed(() => {
  return `linear-gradient(90deg, rgba(66, 184, 131, 1) 0%, rgba(66, 184, 131, 1) ${volume.value * 100}%, transparent ${
    volume.value * 100
  }%)`
})
</script>

<style scoped>
.progress {
  background: v-bind(progressGradient);
  cursor: pointer;
}

.progress::-webkit-slider-thumb {
  opacity: 0;
}

input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  height: 4px;
  border-radius: 3px;
}

input[type="range"].volume-range {
  background: v-bind(volumneGradient);
  border: rgba(66, 184, 131, 1) 1px solid;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: white;
  border-radius: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
  transform: translate(-50%, -50%) scale(1) !important;
}

.v-enter-from,
.v-leave-to {
  transform: translate(-50%, -50%) scale(0.3) !important;
  opacity: 0;
}
div svg {
  transition: 0.3s ease all;
}
div svg:hover {
  opacity: 0.7;
}
</style>
