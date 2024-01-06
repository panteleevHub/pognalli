<template>
  <div class="slider" :class="'slider--' + place">
    <div class="slider__buttons">
      <button
        v-for="{letter} in countriesList"
        @click="activeButton = letter"
        :key="letter"
        class="slider__button"
        :class="activeButton === letter && 'slider__button--active'"
        type="button"
      >
        {{ letter }}
      </button>
    </div>
    <div class="slider__slide">
      <button
        v-for="country in activeSlide.countries"
        :key="country"
        class="slider__country"
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

  return arr;
});

const activeButton = ref('А');
const activeSlide = computed(() => countriesList.value.find(slide => slide.letter === activeButton.value));
</script>

<style lang="scss" scoped>
.slider--companions {
  @media (min-width: $tablet-width) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 110px;
  }
}

.slider__buttons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  min-height: 205px;
}
.slider--companions .slider__buttons {
  margin-bottom: 15px;

  @media (min-width: $tablet-width) {
    width: 350px;
    align-self: start;
    row-gap: 20px;
  }
}

.slider__button {
  display: block;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0;
  border: none;
  color: $basic-blue-light;
  background-color: $white;
  outline: 1px solid $basic-grey-light;
  cursor: pointer;
}

.slider__button--active {
  color: $white;
  background-color: $basic-blue-light;
  outline: 1px solid $basic-blue-light;
}

.slider--companions .slider__button {
  @media (min-width: $tablet-width) {
    width: auto;
    height: auto;
    font-size: 60px;
    line-height: 60px;
    font-weight: 700;
    color: rgba($special-blue, 0.3);
    background-color: transparent;
    outline: none;
  }
}

.slider--companions .slider__button--active {
    @media (min-width: $tablet-width) {
      color: $special-blue;
    }
  }

.slider__country {
  display: block;
  font-family: inherit;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: $special-grey;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>