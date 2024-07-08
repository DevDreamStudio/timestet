<template>
  <div data-aos="fade-down" class="beautiful">
    <div class="beautiful__wrap" :class="{ reverse: beat.reverse }">
      <div class="beautiful__img">
        <img v-lazy="beat.img1" alt="фотография" />
      </div>
      <div class="beautiful__img">
        <img v-lazy="beat.img2" alt="фотография" />
        <p class="beautiful__img-text">
          {{ beat.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  beat: Object,
});
</script>
