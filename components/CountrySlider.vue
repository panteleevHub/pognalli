<template>
  <div class="slider" :class="'slider--' + place">
    <ul class="slider__buttons">
      <li 
        v-for="{letter} in countriesList"
        :key="letter"
        class="slider__button"
        :class="activeButton === letter && 'slider__button--active'"
      >
        <button @click="activeButton = letter" type="button">{{ letter }}</button>
      </li>
    </ul>
    <div class="slider__slide">
      <button
        v-for="country in activeSlide.countries"
        :key="country"
        type="button"
      >
        {{ country }}
      </button>
    </div>
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
  const arr = [];

  const sortedCountries = [...props.countries.sort()];

  sortedCountries.forEach((el) => {
    const obj = arr.findIndex(item => item.letter === el[0]);

    if (obj === -1) {
      arr.push({
        letter: el[0],
        countries: [el]
      });
    } else {
      arr[obj].countries.push(el);
    }
  });

  return arr.sort((a, b) => a.letter.localeCompare(b.letter));
});

const activeButton = ref('А');
const activeSlide = computed(() => countriesList.value.find(slide => slide.letter === activeButton.value));
</script>

<style lang="scss" scoped>
.slider__buttons {
  @include reset-list;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.slider--companions .slider__buttons {
  margin-bottom: 15px;
}

.slider__button button {
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0;
  border: none;
  color: $basic-blue-light;
  background-color: $white;
  cursor: pointer;
}

.slider__button--active button {
  color: $white;
  background-color: $basic-blue-light;
}

.slider__slide button {
  display: block;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: $special-grey;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>