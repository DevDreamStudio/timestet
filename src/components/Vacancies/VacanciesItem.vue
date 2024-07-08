<template>
  <div class="main__vacancies-item" v-if="vacancy">
    <div class="main__vacancies-item-img">
      <img  v-lazy="vacancy.image" alt="" />
    </div>

    <div class="main__vacancies-item-content">
      <h3 class="main__vacancies-item-content-title">{{ vacancy.title }}</h3>

      <div class="main__vacancies-item-content-text">
        <div class="main__vacancies-item-content-text-inner">
          <h4 class="main__vacancies-item-content-text-inner-title">
            Обязанности:
          </h4>

          <div
            class="main__vacancies-item-content-text-inner-caption"
            v-html="vacancy.responsibilities"
          ></div>
        </div>

        <div class="main__vacancies-item-content-text-inner">
          <h4 class="main__vacancies-item-content-text-inner-title">
            Требования:
          </h4>

          <div
            class="main__vacancies-item-content-text-inner-caption"
            v-html="vacancy.requirements"
          ></div>
        </div>
        <div class="main__vacancies-item-content-text-inner">
          <h4 class="main__vacancies-item-content-text-inner-title">
            Условия:
          </h4>

          <div
            class="main__vacancies-item-content-text-inner-caption"
            v-html="vacancy.conditions"
          ></div>
        </div>
      </div>

      <button @click="openModal" class="main__vacancies-item-content-btn">
        откликнуться
      </button>
      <ReviewsModal @closeModalRewiev="closeModalRewiev" v-if="isModalOpen" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import ReviewsModal from "@/components/UI/Modals/ReviewsModal.vue";
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.classList.add("no-scroll");
};

const closeModalRewiev = () => {
  isModalOpen.value = false;
  document.body.classList.remove("no-scroll");
};
const props = defineProps({
  vacancy: {
    type: Object,
  },
});
</script>
