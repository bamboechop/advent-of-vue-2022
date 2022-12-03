<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="daysRoundedUntilChristmas" />
          <CountdownSegment label="hours" :number="hoursRoundedUntilChristmas" />
          <CountdownSegment label="minutes" :number="minutesRoundedUntilChristmas" />
          <CountdownSegment label="seconds" :number="secondsRoundedUntilChristmas" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import { computed } from 'vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'

const now = useNow()
const christmas = new Date('12/25/2022 21:10')

const daysUntilChristmas = computed(() => (christmas.getTime() - now.value.getTime()) / (1000 * 60 * 60 * 24));
const daysRoundedUntilChristmas = computed(() => prefixNumberWithZero(Math.floor(daysUntilChristmas.value)));

const hoursUntilChristmas = computed(() => 24 * (daysUntilChristmas.value - daysRoundedUntilChristmas.value));
const hoursRoundedUntilChristmas = computed(() => prefixNumberWithZero(Math.floor(hoursUntilChristmas.value)));

const minutesUntilChristmas = computed(() => 60 * (hoursUntilChristmas.value - hoursRoundedUntilChristmas.value));
const minutesRoundedUntilChristmas = computed(() => prefixNumberWithZero(Math.floor(minutesUntilChristmas.value)));

const secondsUntilChristmas = computed(() => 60 * (minutesUntilChristmas.value - minutesRoundedUntilChristmas.value));
const secondsRoundedUntilChristmas = computed(() => prefixNumberWithZero(Math.floor(secondsUntilChristmas.value)));

/*
 * the code below would work as well, however there is one issue
 * when Christmas is configured to be at 00:00:00 the day and hour
 * countdown are off by 1. After over 2 hours of playing around
 * with various calculation methods to display the data for the
 * countdown I decided on stream to call it a day and leave the
 * code below in but commented out in favor of the solution above
 * which does not have this off by 1 error. I'm pretty sure this
 * error could be fixed in the code below to also work as expected,
 * I just couldn't find the motivation to play around any longer. :)
 */
/*
const minusOneNeeded = computed(() => christmas.getTime() % (1000 * 60 * 60 * 24) < now.value.getTime() % (1000 * 60 * 60 * 24));

const days = computed(() => {
  const calc = christmas.getDate() - now.value.getDate();
  return prefixNumberWithZero(minusOneNeeded.value ? calc - 1 : calc);
});
const hours = computed(() => {
  const calc = christmas.getHours() - now.value.getHours() - (minusOneNeeded.value ? 1 : 0);
  return prefixNumberWithZero(calc >= 0 ? calc : 24 + calc);
});
const minutes = computed(() => {
  const calc = christmas.getMinutes() - now.value.getMinutes() - 1;
  return prefixNumberWithZero(calc >= 0 ? calc : 60 + calc);
});
const seconds = computed(() => {
  const calc = christmas.getSeconds() - now.value.getSeconds() - 1;
  return prefixNumberWithZero(calc >= 0 ? calc : 60 + calc);
});
*/

function prefixNumberWithZero(number) {
  if(number < 10) {
    return `0${number}`;
  }
  return number.toString();
}
</script>
