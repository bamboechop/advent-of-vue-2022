<script setup>
import { ref } from 'vue'
import IconUp from '@/components/icons/IconUp.vue'
import IconDown from '@/components/icons/IconDown.vue'
import IconLeft from '@/components/icons/IconLeft.vue'
import IconRight from '@/components/icons/IconRight.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
const open = ref(false)
const el = ref(null)
const button = ref(null)
onClickOutside(el, () => (open.value = false))

onKeyStroke('i', e => {
  e.preventDefault()
  open.value = !open.value
  open.value ? button.value.focus() : button.value.blur()
})
</script>
<template>
  <div class="absolute right-5" ref="el">
    <button ref="button" class="absolute right-0" @click="open = !open"><IconInfo /></button>

    <aside v-show="open" class="mt-5 shadow-md bg-gray-100 mr-5 p-3 text-gray-600">
      <h3 class="font-bold mb-5 p-1 border-b-[1px] border-gray-300">Keyboard Shortcuts</h3>
      <ul>
        <li><span class="key">␣</span> Play</li>
        <li>
          <span class="key"><IconUp /></span>
          <span class="key"><IconDown /></span>
          Volume
        </li>
        <li>
          <span class="key"><IconLeft /></span>
          <span class="key"><IconRight /></span>
          Seek
        </li>
        <li>
          <span class="key">⇧</span>
          <span class="key"><IconLeft /></span>,
          <span class="key">⇧</span>
          <span class="key"><IconRight /></span>
          Skip
        </li>
        <li>
          <span class="key">i</span>
          Keyboard Shortcuts
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
li {
  margin-bottom: 10px;
}
.key {
  @apply bg-white p-1 border-gray-200 border-[1px] rounded inline-block;
  width: 2rem;
  text-align: center;
  transform: scale(0.8);
}
li svg {
  width: 14px;
  @apply w-3 inline;
}
</style>
