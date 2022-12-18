import { ref } from 'vue';

const products = ref([]);
const selectedProducts = ref([]);

export const useItemComparison = () => {
  return {
    products,
    selectedProducts,
  };
};
