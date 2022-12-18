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
  import { useItemComparison } from '../composables/itemComparison'

  const { products, selectedProducts } = useItemComparison();

  const selected = ref();

  watch(selected, (newValue, oldValue) => {
    selectedProducts.value = selectedProducts.value.filter(item => item.id !== oldValue?.id);
    selectedProducts.value.push(newValue);
  });
</script>
