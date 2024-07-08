<template>
  <div class="stories">
    <div class="stories__wrapper">
      <div
        @click="openSlider(index)"
        v-for="(storiesCategory, index) in storiesList"
        :key="storiesCategory.id"
        class="stories__category"
      >
        <div class="stories__category-img">
          <img v-lazy="storiesCategory.image" alt="" />
        </div>

        <span class="stories__category-title">
          {{ storiesCategory.title }}</span
        >
      </div>
    </div>

    <StoriesSlider
      :index="currentIndex"
      :storiesList="storiesList"
      @closeSlider="closeSlider"
      v-if="isVisible"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStories } from "@/store/stories.js";
import StoriesSlider from "./StoriesSlider.vue";

const storiesStore = useStories();
const storiesList = computed(() => storiesStore.stories);
const currentIndex = ref(null);

const isVisible = ref(false);
const openSlider = (index) => {
  currentIndex.value = index;
  isVisible.value = true;
  document.body.classList.add("no-scroll");
};

const closeSlider = () => {
  isVisible.value = false;
  document.body.classList.remove("no-scroll");
};

onMounted(() => {
  storiesStore.getStories();
});
</script>
