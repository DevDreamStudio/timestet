<template>
  <div data-aos="fade-down" class="main__product-desc" v-if="productData && productData.description">
    <h4 class="main__product-desc-title">описание</h4>
    <p class="main__product-desc-text">
      {{ productData.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  productData: {
    type: Object,
  },
});
</script>
