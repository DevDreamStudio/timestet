<template>
  <div class="stories__inner">
    <button @click="closeSlider" class="stories__inner-close">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 1L1 15M15 15L1 1"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <swiper
      :initialSlide="index"
      :space-between="100"
      :effect="'coverflow'"
      :modules="modules"
      @slideChange="onSlideChange"
      :allowSlideNext="!isModalOpen"
      :allowSlidePrev="!isModalOpen"
      :centeredSlides="true"
      :allow-touch-move="false"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 1,
      }"
      :slides-per-view="`auto`"
      @swiper="onSwiper"
      class="stories__inner-slider"
    >
      <swiper-slide
        v-for="(storiesCategory, index) in storiesList"
        :key="storiesCategory.id"
        class="stories__inner-slider-slide"
      >
        <button
          @click="prevSlide(index)"
          :class="{ 'is-visible': activeIndex === index }"
          class="stories__inner-slider-slide-prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M30 12L18 24L30 36"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          :class="{ 'is-visible': activeIndex === index }"
          class="stories__inner-slider-info"
        >
          <div class="stories__inner-slider-info-img">
            <img :src="storiesCategory.image" alt="" />
          </div>
          <div class="stories__inner-slider-info-text">
            <span class="stories__inner-slider-info-text-category">{{
              storiesCategory.title
            }}</span>
            <span class="stories__inner-slider-info-text-title">Title</span>
          </div>
        </div>

        <Story
          @openProductModal="handleProductModal"
          :index="index"
          :activeIndex="activeIndex"
          :stories="storiesCategory.stories"
          :isModalOpen="isModalOpen"
        />

        <button
          @click="nextSlide(index)"
          :class="{ 'is-visible': activeIndex === index }"
          class="stories__inner-slider-slide-next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M18 12L30 24L18 36"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </swiper-slide>
    </swiper>

    <StoriesProductModal
      v-if="productsList"
      :productsList="productsList"
      @modalClose="modalClose"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "@/components/Stories/Stories.scss";
import Story from "./Story.vue";
import StoriesProductModal from "./StoriesProductModal.vue";

const modules = ref([EffectCoverflow]);
const props = defineProps({
  storiesList: {
    type: Array,
  },
  index: {
    type: Number,
  },
});

const productsList = ref(null);
const activeIndex = ref(props.index);
const isModalOpen = ref(false);
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex;
};

const handleProductModal = (products) => {
  productsList.value = products;
  isModalOpen.value = true;
};

const modalClose = () => {
  productsList.value = null;
  isModalOpen.value = false;
};

const emit = defineEmits(["closeSlider"]);
const closeSlider = () => {
  emit("closeSlider");
};

const prevSlide = (index) => {
  if (swiperInstance.value && activeIndex.value === index) {
    swiperInstance.value.slidePrev();
  }
};

const nextSlide = (index) => {
  if (swiperInstance.value && activeIndex.value === index) {
    swiperInstance.value.slideNext();
  }
};
</script>
