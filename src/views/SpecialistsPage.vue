<template>
  <transition name="preloader">
    <Preloader v-if="!isLoaded" />
  </transition>
  <div class="main__specialists">
    <div data-aos="fade-down" class="main__specialists-info">
      <h2 class="main__specialists-info-title">специалисты</h2>
      <p class="main__specialists-info-descr">
        Наши профессионалы обладают глубокими знаниями и опытом в медицинской
        косметологии, а также привержены вашему благополучию.
      </p>
    </div>

    <SpecialistsSlider :specialistList="specialistList" />
    <ProMed />
    <Beautiful :beat="beatObj" />
    <Reviews />
    <Feedback />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useSpecialists } from "@/store/Specialists.js";
import SpecialistsSlider from "@/components/Specialists/SpecialistsSlider.vue";
import ProMed from "@/components/UI/ProMed.vue";
import Beautiful from "@/components/Beautiful/Beautiful.vue";
import Reviews from "@/components/Reviews/Reviews.vue";
import Feedback from "@/components/Feedback/Feedback.vue";
import img1 from "@assets/images/beat/specialist-page-1.jpg";
import img2 from "@assets/images/beat/specialist-page-2.jpg";
import AOS from "aos";

const isLoaded = ref(false);

const beatObj = ref({
  desc: "«Наши специалисты – это команда профессионалов, объединяющих науку и искусство для создания красоты. Мы применяем современные методы и заботимся о вашей гармонии, делая каждый момент неповторимо прекрасным».",
  reverse: false,
  img1: img1,
  img2: img2,
});

const specialist = useSpecialists();
const specialistList = computed(() => specialist.specialists);

onMounted(async () => {
  AOS.refresh();
  document.body.classList.add("no-scroll");
  try {
    await specialist.getSpecialists();
  } finally {
    isLoaded.value = true;
    document.body.classList.remove("no-scroll");
  }
});

onUnmounted(() => {
  if (isLoaded.value === false) {
    document.body.classList.remove("no-scroll");
  }
});
</script>
