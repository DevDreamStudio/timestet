<template>
  <swiper
    :speed="800"
    :modules="modules"
    :pagination="pagination"
    :loop="false"
    v-if="stories && stories.length"
    @swiper="onSwiper"
    :autoplay="autoplayOptions"
    @reachEnd="onReachEnd"
    :allowTouchMove="false"
    :lazy="true"
    :lazyPreloadPrevNext="1"
    preloadImages="false"
    class="stories__story"
  >
    <div
      :class="[
        'stories__story-bullets',
        paginationClass,
        { 'is-visible': isActive },
      ]"
    ></div>

    <swiper-slide
      v-for="story in stories"
      :key="story.id"
      class="stories__story-slide"
    >
      <div class="stories__story-slide-content">
        <div class="stories__story-slide-content-img">
          <img loading="lazy" :src="story.video" :alt="story.title" />
          <div class="swiper-lazy-preloader"></div>
        </div>
        <button
          v-if="story.products && story.products.length"
          @click="openProductModal(story.products)"
          class="stories__story-slide-content-btn"
          :class="{ 'is-visible': isActive }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.7998 9.60039L11.9998 14.4004L7.19981 9.60039"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          использвуемые продукты
        </button>
      </div>
    </swiper-slide>

    <div class="stories__story-btns">
      <button @click="prevSlide" :disabled="isModalOpen"></button>
      <button @click="nextSlide" :disabled="isModalOpen"></button>
    </div>
  </swiper>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "@/components/Stories/Stories.scss";
const modules = ref([Pagination, Autoplay, Navigation]);

const props = defineProps({
  stories: {
    type: Array,
  },
  index: {
    type: Number,
  },
  activeIndex: {
    type: Number,
  },

  isModalOpen: {
    type: Boolean,
  },
});

const swiperInstance = ref(null);
const isActive = computed(() => props.index === props.activeIndex);

const autoplayOptions = ref(false);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  updateAutoplay(isActive.value);
};

const updateAutoplay = (isActive) => {
  if (swiperInstance.value) {
    if (isActive) {
      autoplayOptions.value = {
        delay: 3000,
        disableOnInteraction: true,
      };
      swiperInstance.value.params.autoplay = autoplayOptions.value;
      swiperInstance.value.autoplay.start();
    } else {
      swiperInstance.value.autoplay.stop();
    }
  }
};
const onReachEnd = () => {
  if (swiperInstance.value) {
    swiperInstance.value.autoplay.stop();
  }
};

watch(isActive, async (newVal) => {
  updateAutoplay(newVal);
});
const emit = defineEmits(["openProductModal"]);

function openProductModal(products) {
  emit("openProductModal", products);
}

const prevSlide = () => {
  if (isActive.value && swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const nextSlide = () => {
  if (isActive.value && swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const paginationClass = computed(() => `stories__story-bullets-${props.index}`);
const pagination = computed(() => ({
  el: `.${paginationClass.value}`,
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className}"></span>`;
  },
}));
</script>
