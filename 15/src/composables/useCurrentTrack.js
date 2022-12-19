import { usePlaylist } from '@/composables/usePlaylist'
import { useMediaControls } from '@vueuse/core'
import { nextTick, computed, ref } from 'vue'

const el = ref(document.createElement('AUDIO'))

const { current: currentTrack, state } = usePlaylist()
const { playing, currentTime, duration, volume } = useMediaControls(el, {
  src: currentTrack,
})

export function useCurrentTrack() {
  function play(song = null) {
    if (song) state.value = song
    playing.value = false
    nextTick(() => {
      playing.value = true
    })
  }

  function prettifyTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  const progress = computed(() => {
    if(currentTime.value <= 0) {
      return 0;
    } else {
      return Math.round((currentTime.value / duration.value) * 100);
    }
  })

  function pause() {
    playing.value = false;
  }

  function ff() {
    if(duration.value - currentTime.value < 10) {
      currentTime.value = duration.value;
    } else {
      currentTime.value += 10;
    }
  }

  function rewind() {
    if(currentTime.value < 10) {
      currentTime.value = 0;
    } else {
      currentTime.value -= 10;
    }
  }

  const durationPretty = computed(() => {
    return prettifyTime(duration.value)
  })
  const currentTimePretty = computed(() => {
    return prettifyTime(currentTime.value)
  })

  const timeDisplay = computed(() => {
    return `${currentTimePretty.value} - ${durationPretty.value}`
  })

  return {
    pause,
    play,
    ff,
    rewind,
    timeDisplay,
    progress,
    currentTrack,
    playing,
    currentTime,
    duration,
    volume,
  }
}
