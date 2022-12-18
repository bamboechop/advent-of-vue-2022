<template>
  <select
    v-model="selected"
    class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <template
      v-for="product of products"
      :key="`product-${product.id}`">
      <option :value="product">{{ product.id }} - {{ product.title }} - € {{ product.price.toFixed(2) }}</option>
    </template>
  </select>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits([`update:selected-product`]);
defineProps({ disabled: { default: false, type: Boolean }, products: Array });

const selected = ref()

watch(selected, newValue => {
  emit(`update:selected-product`, newValue);
});
</script>
