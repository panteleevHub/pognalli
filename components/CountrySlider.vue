<template>
  <div class="slider">
    <ul class="slider__buttons">
      <li class="slider__button"></li>
    </ul>
    <ul class="slider__slides">
      <li class="slider__slide"></li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  countries: {
    type: Array,
    default: [],
    required: true,
  }
});
</script>

<style lang="scss" scoped>
.slider__buttons,
.slider__slides {
  @include reset-list;
}
</style>