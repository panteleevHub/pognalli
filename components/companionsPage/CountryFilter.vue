<template>
  <section class="filter" :class="isFilterOpened && 'filter--opened'">
    <div class="filter__top">
      <div class="filter__top-container container">
        <h2 class="filter__title">Фильтрация по странам</h2>
        <button @click="isFilterOpened = !isFilterOpened" class="filter__toggle" type="button">
          <span v-if="!isFilterOpened" class="filter__show">Показать</span>
          <span v-else class="filter__hide">Свернуть</span>
        </button>
        <!-- <span class="filter__selected-countries">{{ filtersStore.selectedCountries.join(', ') }}</span> -->
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
                :key="country"
                class="filter__country"
              >
                <input
                  @click="onCountryClick"
                  :value="country"
                  :id="country"
                  :checked="selectedCountries.includes(country)"
                  type="checkbox"
                />
                <label :for="country">{{ country }}</label>
              </div>
            </div>
          </li>
        </ul>
        <button @click="onCloseFilterClick" class="filter__reset" type="button">
          <span>Сбросить фильтр</span>
        </button>
        <button @click="isFilterOpened = !isFilterOpened" class="filter__close" type="button">
          <span>Свернуть</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const countriesStore = useCountriesStore();
const filtersStore = useFiltersStore();

const countriesList = reactive(countriesStore.countriesList);
const selectedCountries = reactive(filtersStore.selectedCountries);

countriesStore.setCountries([
  'Афганистан',
  'Албания',
  'Антарктика',
  'Алжир',
  'Американское Самоа',
  'Андора',
  'Ангола',
  'Антигуа и Барбуда',
  'Азербайджан',
  'Аргентина',
  'Австралия',
  'Австрия',
  'Багамские Острова',
  'Бахрейн',
  'Бангладеш',
  'Армения',
  'Барбадос',
  'Бельгия',
  'Бермудские Острова',
  'Бутан',
  'Боливия',
  'Босния и Герцеговина',
  'Ботсвана',
  'Остров Буве',
  'Бразилия',
  'Белиз',
  'Британская территория в Индийском океане',
  'Соломоновы Острова',
  'Британские Виргинские острова',
  'Бруней',
  'Болгария',
  'Мьянма',
  'Бурунди',
  'Беларусь',
  'Камбоджа',
  'Камерун',
  'Канада',
  'Кабо-Верде',
  'Каймановы острова',
  'Шри-Ланка',
  'Чад',
  'Чили',
  'Китайская Народная Республика',
  'Остров Рождества',
  'Кокосовые острова',
  'Колумбия',
  'Коморы',
  'Майотта',
  'Республика Конго',
  'Демократическая Республика Конго',
  'Острова Кука',
  'Коста-Рика',
  'Хорватия',
  'Куба',
  'Кипр',
  'Чехия',
  'Бенин',
  'Дания',
  'Доминика',
  'Доминиканская Республика',
  'Эквадор',
  'Сальвадор',
  'Экваториальная Гвинея',
  'Эфиопия',
  'Эритрея',
  'Эстония',
  'Фарерские острова',
  'Фолклендские острова',
  'Южная Георгия и Южные Сандвичевы острова',
  'Фиджи',
  'Финляндия',
  'Аландские острова',
  'Франция',
  'Французская Гвиана',
  'Французская Полинезия',
  'Французские Южные и Антарктические территории',
  'Джибути',
  'Габон',
  'Грузия',
  'Гамбия',
  'Палестина',
  'Германия',
  'Гана',
  'Гибралтар',
  'Кирибати',
  'Греция',
  'Гренландия',
  'Гренада',
  'Гваделупа',
  'Гуам',
  'Гватемала',
  'Гвинея',
  'Гайана',
  'Республика Гаити',
  'Остров Херд и острова Макдональд',
  'Ватикан',
  'Гондурас',
  'Гонконг',
  'Венгрия',
  'Исландия',
  'Индия',
  'Индонезия',
  'Иран',
  'Ирак',
  'Ирландия',
  'Израиль',
  'Италия',
  'Кот-д’Ивуар',
  'Ямайка',
  'Япония',
  'Казахстан',
  'Иордания',
  'Кения',
  'КНДР',
  'Республика Корея',
  'Кувейт',
  'Киргизия',
  'Лаос',
  'Ливан',
  'Лесото',
  'Латвия',
  'Либерия',
  'Ливия',
  'Лихтенштейн',
  'Литва',
  'Люксембург',
  'Макао',
  'Мадагаскар',
  'Малави',
  'Малайзия',
  'Мальдивы',
  'Мали',
  'Мальта',
  'Мартиника',
  'Мавритания',
  'Маврикий',
  'Мексика',
  'Монако',
  'Монголия',
  'Молдавия',
  'Черногория',
  'Монтсеррат',
  'Марокко',
  'Мозамбик',
  'Оман',
  'Намибия',
  'Науру',
  'Непал',
  'Нидерланды',
  'Кюрасао',
  'Аруба',
  'Синт-Мартен',
  'Бонэйр, Синт-Эстатиус и Саба',
  'Новая Каледония',
  'Вануату',
  'Новая Зеландия',
  'Никарагуа',
  'Нигер',
  'Нигерия',
  'Ниуэ',
  'Норфолк',
  'Норвегия',
  'Северные Марианские острова',
  'Внешние малые острова США',
  'Микронезия',
  'Маршалловы Острова',
  'Палау',
  'Пакистан',
  'Панама',
  'Папуа — Новая Гвинея',
  'Парагвай',
  'Перу',
  'Филиппины',
  'Острова Питкэрн',
  'Польша',
  'Португалия',
  'Гвинея-Бисау',
  'Восточный Тимор',
  'Пуэрто-Рико',
  'Катар',
  'Реюньон',
  'Румыния',
  'Россия',
  'Руанда',
  'Сен-Бартелеми',
  'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
  'Сент-Китс и Невис',
  'Ангилья',
  'Сент-Люсия',
  'Сен-Мартен (Франция)',
  'Сен-Пьер и Микелон',
  'Сент-Винсент и Гренадины',
  'Сан-Марино',
  'Сан-Томе и Принсипи',
  'Саудовская Аравия',
  'Сенегал',
  'Сербия',
  'Сейшельские Острова',
  'Сьерра-Леоне',
  'Сингапур',
  'Словакия',
  'Словения',
  'Сомали',
  'Южно-Африканская Республика',
  'Зимбабве',
  'Испания',
  'Южный Судан',
  'Судан',
  'Западная Сахара',
  'Суринам',
  'Шпицберген и Ян-Майен',
  'Свазиленд',
  'Швеция',
  'Швейцария',
  'Сирия',
  'Таджикистан',
  'Таиланд',
  'Того',
  'Токелау',
  'Тонга',
  'Тринидад и Тобаго',
  'Объединённые Арабские Эмираты',
  'Тунис',
  'Турция',
  'Туркмения',
  'Теркс и Кайкос',
  'Тувалу',
  'Уганда',
  'Украина',
  'Республика Македония',
  'Египет',
  'Великобритания',
  'Гернси',
  'Джерси',
  'Остров Мэн',
  'Танзания',
  'Соединённые Штаты Америки',
  'Виргинские Острова',
  'Буркина-Фасо',
  'Уругвай',
  'Узбекистан',
  'Венесуэла',
  'Уоллис и Футуна',
  'Самоа',
  'Замбия',
]);

// await useAsyncData('countries', () => countriesStore.fetchCountries());

const isFilterOpened = ref(false);

const onCountryClick = (evt) => {
  if (evt.target.checked) {
    filtersStore.setCountry(evt.target.value);
  } else {
    filtersStore.removeCountry(evt.target.value);
  }
};

const onCloseFilterClick = () => {
  filtersStore.resetCountriesFilter();
  isFilterOpened.value = false;
};
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
  @include flex-base;
  flex-wrap: wrap;
  column-gap:  20px;
  padding-top: 47px;
  padding-bottom: 15px;
  padding-right: 30px;

  @media (min-width: $tablet-width) {
    column-gap: 50px;
    padding: 100px 75px 60px;
  }

  @media (min-width: $desktop-width) {
    padding-left: 80px;
    padding-right: 80px;
  }
}

.filter__title,
.filter__close,
.filter__toggle,
.filter__reset {
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

.filter__reset {
  width: 100%;
  text-align: center;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-bottom: 20px;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    margin-bottom: 40px;
  }
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