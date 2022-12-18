<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ t(`happyHolidays`) }}
        <span class="i-twemoji-world-map"></span>
      </div>
      <i18n-t
        class="flex justify-center max-w-350px mt-4 w-full whitespace-pre"
        keypath="christmasIsComing"
        tag="div">
        <template #date>
          {{ d(christmasDate, `long`) }}
        </template>
        <template #time>
          <span class="text-green">{{ t(`day`, daysUntilChristmas) }}</span>
        </template>
      </i18n-t>
      <div class="flex items-center justify-between max-w-250px mt-8 w-full">
        <select v-model="locale">
          <template v-for="locale of locales">
            <option :value="locale">{{ locale }}</option>
          </template>
        </select>
        <p>{{ flagEmoji }} {{ t(`language`) }}</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'

// See the README about tricky timezone issues!
// I figured since this is i18n-friendly, we'd wanna
// make sure the timezones were right :-)
const christmasDate = new Date('2022/12/25')

const { d, locale, t } = useI18n();
const locales = ref([`en`, `de`, `ja-JP`]);

// This calculation will only really work when used between the 1st and 25th of December 2022. ;)
// See 03 for a better implementation of the days until Christmas
const daysUntilChristmas = computed(() => christmasDate.getDate() - new Date().getDate());

const flagEmoji = computed(() => {
  switch(locale.value) {
    case `de`:
      return `🇩🇪`;
    case `en`:
      return `🇺🇸`;
    case `ja-JP`:
      return `🇯🇵`;
    default:
      return `x`;
  }
});
</script>

<style scoped>
.icon-button {
  @apply text-xl
    w-32px
    h-32px
    rounded-full
    border-1
    border-transparent
    bg-transparent
    cursor-pointer
    duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>
