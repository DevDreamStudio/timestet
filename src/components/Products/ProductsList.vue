<template>
  <div
    data-aos="fade-down"
    class="main__products-list"
    v-if="products && products.length"
  >
    <ProductsItem
      v-for="product in products"
      :key="product.id"
      class="main__products-list-slider-slide"
      :product="product"
    />
  </div>
</template>

<script setup>
import ProductsItem from "./ProductsItem.vue";
import { computed, onMounted } from "vue";
import { useProducts } from "@/store/Products.js";
import AOS from "aos";
import "@/components/Products/Products.scss";

const productStore = useProducts();
const products = computed(() => productStore.products);

onMounted(() => {
  AOS.refresh();
  productStore.savedQueryParams = {};
  productStore.getProducts({ limit: 12, offset: 0 });
});
</script>
