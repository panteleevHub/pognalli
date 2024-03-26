<template>
  <section class="filter" :class="isFilterOpened && 'filter--opened'">
    <div class="filter__top">
      <div class="filter__top-container container">
        <h2 class="filter__title">Фильтрация по странам</h2>
        <button @click="isFilterOpened = !isFilterOpened" class="filter__toggle" type="button">
          <span v-if="!isFilterOpened" class="filter__show">Показать</span>
          <span v-else class="filter__hide">Свернуть</span>
        </button>
        <span v-if="selectedCountries.length !== 0" class="filter__selected-countries">{{ countriesPrint }}</span>
        <button
          v-if="selectedCountries.length !== 0"
          @click="onResetFilterClick"
          class="filter__reset"
          type="button"
        >
          <span>Сбросить фильтр</span>
        </button>
      </div>
    </div>
    <div v-if="isFilterOpened" class="filter__bottom">
      <div class="filter__bottom-container container">
        <CountrySlider
          place="companions"
          class="filter__slider"
        />
        <ul class="filter__countries">
          <li v-for="{letter, countries} in countriesList">
            <span class="filter__letter">{{ letter }}</span>
            <div class="filter__countries-list">
              <div
                v-for="country in countries"
                :key="country.id"
                class="filter__country"
              >
                <input
                  @click="onCountryClick(country, $event)"
                  :value="country.name"
                  :id="country.id"
                  :checked="selectedCountries.find(({id}) => id === country.id)"
                  type="checkbox"
                />
                <label :for="country.id">{{ country.name }}</label>
              </div>
            </div>
          </li>
        </ul>
        <button @click="onCloseFilterClick" class="filter__close" type="button">
          <span>Свернуть</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const countriesStore = useCountriesStore();
const filtersStore = useFiltersStore();

const { countriesList } = storeToRefs(countriesStore);
const { selectedCountries } = storeToRefs(filtersStore);

const isFilterOpened = ref(false);

const onCountryClick = (country, evt) => {
  if (evt.target.checked) {
    filtersStore.setCountry(country);
  } else {
    filtersStore.removeCountry(country);
  }
};

const onCloseFilterClick = () => {
  isFilterOpened.value = false;
  window.scrollTo(0, 0);
};

const onResetFilterClick = () => {
  filtersStore.resetCountriesFilter();
  isFilterOpened.value = false;
};

const countriesPrint = computed(() => selectedCountries.value.map(({name}) => name).join(', '));

onMounted(() => {
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape' && isFilterOpened.value) {
      onCloseFilterClick();
    }
  })
});
</script>

<style lang="scss" scoped>
.filter {
  position: relative;
  top: -30px;
  margin-bottom: -30px;

  @media (min-width: $tablet-width) {
    top: -40px;
    margin-bottom: -40px;
  }
}

.filter__top {
  @include round-bottom;
  background-color: $light-grey;
}

.filter--opened .filter__top {
  @media (max-width: $pre-desktop-width) {
    border-radius: 0;
  }
}

.filter__top-container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 15px 20px;
  padding-top: 47px;
  padding-bottom: 15px;
  padding-right: 30px;

  @media (min-width: $tablet-width) {
    gap: 30px 50px;
    padding: 100px 75px 60px;
  }

  @media (min-width: $desktop-width) {
    padding-left: 80px;
    padding-right: 125px;
  }
}

.filter__title,
.filter__close,
.filter__toggle {
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: $special-blue;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 20px;
  }
}

.filter__title {
  padding-left: 27px;
  background: url('@/assets/img/icon-filter.svg') left center no-repeat;

  @media (min-width: $tablet-width) {
    padding-left: 45px;
    background-size: 23px 15px;
  }
}

.filter__toggle {
  width: 17px;
  height: 17px;
  padding: 0;
  border: 0;
  background: transparent url('@/assets/img/filter-expand.svg') center no-repeat;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    width: auto;
    height: auto;
    padding-right: 50px;
    background-position: right center;
    background-size: 30px 6px;
  }
}

.filter--opened .filter__toggle {
  background-image: url('@/assets/img/filter-close.svg');

  @media (min-width: $tablet-width) {
    background-size: 22px 22px;
  }
}

.filter__show,
.filter__hide {
  display: none;

  @media (min-width: $tablet-width) {
    display: block;
  }
}

.filter__selected-countries {
  grid-column: 1 / -1;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1px;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 24px;
  }
}

.filter__reset {
  grid-column: 1 / -1;
  font-size: 15px;
  line-height: 17px;
  font-weight: 700;
  color: $special-blue;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    font-size: 18px;
    line-height: 18px;
  }
}

.filter__bottom {
  @include round-bottom;
  position: absolute;
  z-index: 5;
  width: 100%;
  background-color: $light-grey;

  @media (min-width: $desktop-width) {
    background-color: $basic-blue-pale;
  }
}

.filter__bottom-container {
  padding-top: 15px;
  padding-bottom: 28px;
  
  @media (min-width: $tablet-width) {
    padding: 0 75px 80px;
  }

  @media (min-width: $desktop-width) {
    padding: 30px 60px 100px;
  }
}

.filter__slider {
  width: 220px;
  margin: 0 auto;
  margin-bottom: 28px;

  @media (min-width: $tablet-width) {
    width: 620px;
    margin-bottom: 80px;
  }

  @media (min-width: $desktop-width) {
    display: none;
  }
}

.filter__countries {
  display: none;

  @media (min-width: $desktop-width) {
    @include reset-list;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 50px;
    padding: 0 36px;
    margin-bottom: 60px;
  }
}

.filter__countries li {
  @include flex-column;
  row-gap: 30px;
}

.filter__letter {
  font-size: 60px;
  line-height: 60px;
  font-weight: 700;
  color: $special-blue;
}

.filter__countries-list {
  @include flex-column;
}

.filter__country label{
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  color: $special-grey;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.filter__country input {
  display: none;
}

.filter__country input:checked + label {
  font-weight: 500;
  color: $basic-blue-light;
}

.filter__close {
  width: 100%;
  text-align: center;
  background-color: $grayish-blue;
  border: 0;
  border-radius: 20px;
  padding: 12px 20px 10px;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    padding: 42px;
  }
}

.filter__close span {
  padding-left: 25px;
  background: url('@/assets/img/filter-close.svg') left center no-repeat;
  background-size: 14px 14px;

  @media (min-width: $tablet-width) {
    padding-left: 40px;
    background-size: 22px 22px;
  }
}
</style>