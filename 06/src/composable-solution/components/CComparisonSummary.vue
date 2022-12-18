<template>
  <p
    v-if="cheapItem && expensiveItem"
    class="mx-5 text-center">
    <template v-if="cheapItem.id !== expensiveItem.id">
      You can get <strong>{{ itemAmount }}</strong> <em>{{ cheapItem.title }}</em> for about the same price as a single <em>{{ expensiveItem.title }}</em>
    </template>
    <template v-if="cheapItem.id === expensiveItem.id">
      These are the same items!
    </template>
  </p>
</template>

<script setup>
  import { useItemComparison } from '@/composable-solution/composables/itemComparison';
  import { ref, watch } from 'vue';

  const cheapItem = ref(null);
  const expensiveItem = ref(null);
  const itemAmount = ref(0);

  const { selectedProducts } = useItemComparison();

  watch(selectedProducts, newValue => {
    if(newValue.length === 2) {
      if(newValue[0].price < newValue[1].price) {
        cheapItem.value = newValue[0];
        expensiveItem.value = newValue[1];
      } else {
        cheapItem.value = newValue[1];
        expensiveItem.value = newValue[0];
      }
      itemAmount.value = Math.round(expensiveItem.value.price / cheapItem.value.price);
    }
  });
</script>
