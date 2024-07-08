<template>
  <div data-aos="fade-down" class="content">
    <h2 class="content-title">
      {{ props.title }}
    </h2>

    <div class="content-img">
      <img :style="{ height: height }"  v-lazy="img" alt="фотография" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "img", "height"]);
</script>
