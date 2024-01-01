<template>
  <div class="slider">
    <ul class="slider__buttons">
      <li 
        v-for="(value, key) in countriesList"
        :class="activeSlide === key ? 'slider__button slider__button--active' : 'slider__button'"
      >
        <button @click="activeSlide = key" type="button">{{ key }}</button>
      </li>
    </ul>
    <ul class="slider__slides">
      <li
        v-for="(value, key) in countriesList"
        :class="activeSlide === key ? 'slider__slide slider__slide--active' : 'slider__slide'"
      >
        <button v-for="country in value" type="button">{{ country }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  countries: {
    type: Array,
    default: [],
    required: true,
  },
  place: {
    type: String,
    default: '',
    required: true,
  }
});

const countriesList = computed(() => {
  const obj = {};

  props.countries.forEach((el) => {
    const key = el[0];

    if (obj[key]) {
      obj[key] = [...obj[key], el];
    } else {
      obj[key] = [el];
    }
  });

  return obj;
});

const activeSlide = ref('А');
</script>

<style lang="scss" scoped>
.slider__buttons,
.slider__slides {
  @include reset-list;
}

.slider__button--active button {
  color: $white;
  background-color: $basic-blue-light;
}

.slider__slide {
  display: none;
}

.slider__slide--active {
  display: block;
}
</style>