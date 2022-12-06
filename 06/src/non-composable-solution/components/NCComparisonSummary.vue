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
import { ref, watch } from 'vue';

  const props = defineProps({ dummy: Object, selectedProducts: Array });

  const cheapItem = ref(null);
  const expensiveItem = ref(null);
  const itemAmount = ref(0);

  watch(props.selectedProducts, () => {
    if(props.selectedProducts.length === 2) {
      if(props.selectedProducts[0].price < props.selectedProducts[1].price) {
        cheapItem.value = props.selectedProducts[0];
        expensiveItem.value = props.selectedProducts[1];
      } else {
        cheapItem.value = props.selectedProducts[1];
        expensiveItem.value = props.selectedProducts[0];
      }
      itemAmount.value = Math.round(expensiveItem.value.price / cheapItem.value.price);
    }
  }, { deep: true });
</script>
