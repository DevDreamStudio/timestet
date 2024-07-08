<template>
  <div>
    <swiper
      :loop="true"
      :spaceBetween="16"
      :speed="1000"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :modules="modules"
      class="main__split-slider"
      @swiper="onSwiper"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
    >
      <swiper-slide class="main__split-slider-slide">
        <div class="main__split-slider-slide-content">
          <ImgComparisonSlider
            @pointerdown="disableSwiper"
            @pointerup="enableSwiper"
            class="main__split-slider-slide-content-img"
          >
            <img
              loading="lazy"
              slot="first"
              src="@/assets/images/SplitTestSlider/Laser-resurfacing/laser-resurfacing-before.jpg"
            />
            <img
              loading="lazy"
              slot="second"
              src="@/assets/images/SplitTestSlider/Laser-resurfacing/laser-resurfacing-after.jpg"
            />

            <svg
              slot="handle"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <g filter="url(#filter0_b_3084_75)">
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="white"
                  fill-opacity="0.2"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="29.7"
                  stroke="white"
                  stroke-width="0.6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_3084_75"
                  x="-18.42"
                  y="-18.42"
                  width="96.84"
                  height="96.84"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.21" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_3084_75"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_3084_75"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div class="swiper-lazy-preloader"></div>
          </ImgComparisonSlider>

          <button v-if="isMobile" class="main__split-slider-slide-content-btn">
            узнать подробнее
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                d="M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"
              />
            </svg>
          </button>
          <div class="main__split-slider-slide-content-text">
            <div class="main__split-slider-slide-content-text-wrapper">
              <h4>Лазерная шлифовка</h4>

              <div
                class="main__split-slider-slide-content-text-wrapper-caption"
              >
                <p>
                  Эффективный метод коррекции возрастных изменений, шрамов после
                  акне и других кожных дефектов.
                </p>
              </div>
            </div>
            <div class="main__split-slider-slide-content-text-wrapper">
              <h4>Об услуге</h4>
              <div
                class="main__split-slider-slide-content-text-wrapper-caption"
              >
                <p>
                  Лазерное воздействие позволяет точно удалять верхние слои
                  кожи, стимулируя обновление и улучшение текстуры.
                </p>
                <p>
                  Процедура помогает уменьшить видимость морщин, пигментации и
                  повреждений, делая кожу гладкой и молодой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="main__split-slider-slide">
        <div class="main__split-slider-slide-content">
          <ImgComparisonSlider
            @pointerdown="disableSwiper"
            @pointerup="enableSwiper"
            class="main__split-slider-slide-content-img"
          >
            <img
              loading="lazy"
              slot="first"
              src="@/assets/images/SplitTestSlider/Laser-remove/laser-remove-before.jpg"
            />
            <img
              loading="lazy"
              slot="second"
              src="@/assets/images/SplitTestSlider/Laser-remove/laser-remove-after.jpg"
            />
            <svg
              slot="handle"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <g filter="url(#filter0_b_3084_75)">
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="white"
                  fill-opacity="0.2"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="29.7"
                  stroke="white"
                  stroke-width="0.6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_3084_75"
                  x="-18.42"
                  y="-18.42"
                  width="96.84"
                  height="96.84"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.21" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_3084_75"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_3084_75"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div class="swiper-lazy-preloader"></div>
          </ImgComparisonSlider>
          <button v-if="isMobile" class="main__split-slider-slide-content-btn">
            узнать подробнее
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                d="M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"
              />
            </svg>
          </button>
          <div class="main__split-slider-slide-content-text">
            <div class="main__split-slider-slide-content-text-wrapper">
              <h4>Лазерное удаление сосудов</h4>

              <div
                class="main__split-slider-slide-content-text-wrapper-caption"
              >
                <p>
                  Быстрый и безболезненный метод устранения видимых капилляров и
                  сосудистых звездочек на коже.
                </p>
              </div>
            </div>
            <div class="main__split-slider-slide-content-text-wrapper">
              <h4>Об услуге</h4>
              <div
                class="main__split-slider-slide-content-text-wrapper-caption"
              >
                <p>
                  Лазер создаёт сфокусированный световой луч, который точечно
                  воздействует на пораженные сосуды, не затрагивая здоровые
                  ткани.
                </p>
                <p>
                  Это способствует коагуляции крови внутри сосудов, в результате
                  чего они становятся менее заметными или полностью исчезают.
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="main__split-slider-slide">
        <div class="main__split-slider-slide-content">
          <ImgComparisonSlider
            @pointerdown="disableSwiper"
            @pointerup="enableSwiper"
            class="main__split-slider-slide-content-img"
          >
            <img
              loading="lazy"
              slot="first"
              src="@/assets/images/SplitTestSlider/Pigment/pigment-before.jpg"
            />
            <img
              loading="lazy"
              slot="second"
              src="@/assets/images/SplitTestSlider/Pigment/pigment-after.jpg"
            />
            <svg
              slot="handle"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <g filter="url(#filter0_b_3084_75)">
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="white"
                  fill-opacity="0.2"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="29.7"
                  stroke="white"
                  stroke-width="0.6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_3084_75"
                  x="-18.42"
                  y="-18.42"
                  width="96.84"
                  height="96.84"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.21" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_3084_75"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_3084_75"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div class="swiper-lazy-preloader"></div>
          </ImgComparisonSlider>
          <button v-if="isMobile" class="main__split-slider-slide-content-btn">
            узнать подробнее
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                d="M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"
              />
            </svg>
          </button>
          <div class="main__split-slider-slide-content-text">
            <div class="main__split-slider-slide-content-text-wrapper">
              <h4>Пигментирование</h4>

              <div
                class="main__split-slider-slide-content-text-wrapper-caption"
              >
                <p>
                  Эффективный метод борьбы с гиперпигментацией, включая
                  веснушки, пигментные пятна и мелазму.
                </p>
              </div>
            </div>
            <div class="main__split-slider-slide-content-text-wrapper">
              <h4>Об услуге</h4>
              <div
                class="main__split-slider-slide-content-text-wrapper-caption"
              >
                <p>
                  Лазерный луч точно нацеливается на пигмент, разрушая его
                  частицы, которые затем естественным образом выводятся из
                  организма.
                </p>
                <p>
                  Процедура улучшает тон кожи, делая её более равномерной и
                  молодой, при минимальном дискомфорте и периоде восстановления.
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import AOS from "aos";
import "swiper/css";
import "@/components/SplitPhoto/Split.scss";
const modules = ref([Autoplay]);
let swiperInstance = null;

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 481px)").matches;
};

onMounted(() => {
  AOS.refresh();
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const disableSwiper = () => {
  if (swiperInstance) {
    swiperInstance.allowTouchMove = false;
    swiperInstance.autoplay.stop();
  }
};

const enableSwiper = () => {
  if (swiperInstance) {
    swiperInstance.allowTouchMove = true;
    swiperInstance.autoplay.start();
  }
};
</script>
