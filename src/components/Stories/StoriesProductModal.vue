<template>
  <div class="stories-modal" v-if="productsList && productsList.length">
    <button @click="modalClose" class="stories-modal-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.7998 9.60039L11.9998 14.4004L7.19981 9.60039"
          stroke="#848484"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Скрыть
    </button>
    <div class="stories-modal-wrapper">
      <swiper
        :spaceBetween="24"
        :slidesPerView="`auto`"
        :loop="productsList && productsList.length > 6 ? true : false"
        class="stories-modal-slider"
      >
        <swiper-slide
          v-for="product in productsList"
          :key="product.id"
          class="stories-modal-slider-slide"
        >
          <ProductsItem :product="product.item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@/components/Stories/Stories.scss";
import ProductsItem from "@/components/Products/ProductsItem.vue";

const props = defineProps({
  productsList: {
    type: Array,
  },
});

const emit = defineEmits(["modalClose"]);
const modalClose = () => {
  emit("modalClose");
};
</script>
