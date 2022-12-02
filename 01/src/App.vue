<template>
  <div class="app w-full h-full flex flex-col gap-5 justify-center items-center test-div">
    <h1 class="text-4xl font-bold">
      Gift Search Bar
    </h1>
    <input
      v-model="searchTerm"
      class="p-2 border-2 border-gray-dark"
      placeholder="Start typing..."
      type="text" />
    <ul class="list-disc app__list">
      <template
        v-for="product of products"
        :key="`product-${product.id}`">
        <li class="app__list-item">
          <img
            :alt="product.title"
            class="app__image"
            :src="product.image" />
          <p>{{ product.id }} - <strong>{{ product.title }}</strong> - {{ product.price.toFixed(2) }}€</p>
        </li>
      </template>
      <template v-if="!loading && products.length === 0">
        <template v-if="searchTerm === ``">
          <li>Enter something above to search for your desired products. 🙂</li>
        </template>
        <template v-if="searchTerm !== ``">
          <li>Nothing found for "{{ searchTerm }}". 😢</li>
        </template>
      </template>
    </ul>
    <Spinner v-if="loading" />
  </div>
</template>

<script setup>
import Spinner from '@/Spinner.vue'
import { refDebounced } from '@vueuse/core'
import { ref, watch } from 'vue';

const loading = ref(false);
const products = ref([]);
const searchTerm = ref('');
const searchTermDebounced = refDebounced(searchTerm, 300);

const findProducts = async term => {
  products.value = [];
  if(searchTerm.value === ``) {
    return;
  }

  loading.value = true;
  const response = await fetch(`https://dummyjson.com/products/search?q=${term}`);
  if(response.ok) {
    const apiProductInfo = await response.json();
    products.value.push(...apiProductInfo.products.map(product => ({
      id: product.id,
      image: product.thumbnail,
      price: product.price,
      title: product.title,
    })));
  } else {
    alert(`Something went wrong!`);
  }
  loading.value = false;
};

watch(searchTermDebounced, newTerm => findProducts(newTerm));
</script>

<style>
  .app__list {
    max-height: 50vh;
    overflow-y: auto;
  }

  .app__list-item {
    display: grid;
    gap: 10px;
    grid-template-columns: 100px 1fr;
  }
</style>
