<template>
  <div class="w-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <NCItemSelect
        :products="products"
        @update:selected-product="selectedProducts[0] = $event" />
      <NCItemSelect
        :disabled="selectedProducts.length === 0"
        :products="products"
        @update:selected-product="selectedProducts[1] = $event" />
    </div>
    <NCComparisonSummary :selected-products="selectedProducts" />
  </div>
</template>

<script setup>
import NCComparisonSummary from '@/non-composable-solution/components/NCComparisonSummary.vue';
import { onMounted, ref } from 'vue';
import NCItemSelect from '@/non-composable-solution/components/NCItemSelect.vue';

const products = ref([]);
const selectedProducts = ref([`a`]);

onMounted(async () => {
  try {
    const apiResponse = await window.fetch(`https://dummyjson.com/products?limit=100&select=id,price,title`);
    if(apiResponse.ok) {
      const parsedResponse = await apiResponse.json();
      products.value = parsedResponse.products;
    } else {
      alert(`Something went wrong fetching the products!`);
    }
  } catch(err) {
    alert(`Something went spectacularly wrong - ${err.message}`);
  }
});
</script>
