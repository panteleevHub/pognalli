<template>
  <section class="users">
    <h2 class="visually-hidden">Список попутчиков</h2>
    <ul class="users__list">
      <li
        v-for="user in filteredUsers"
        :key="user.id"
        class="users__item user"
      >
        <div class="user__avatar">
          <!-- <img :src="" width="70" height="70" :alt=""> -->
        </div>
        <NuxtLink>{{ user.name }}</NuxtLink>
        <div class="user__likes">
          <button type="button"></button>
          <span></span>
        </div>
        <p class="user__tags"></p>
        <UserCountries :countries="user.countries" place="catalog" class="user__contries" />
        <TransportIcons :transport="user.transport" place="catalog" class="user__transport" />
        <UserLevel :level="user.level" color="#fff" place="catalog" class="user__level" />
        <button class="user__invite" type="button">Позвать</button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import flagCzech from '@/assets/img/flag-czech-mobile.png';
import flagSeychelles from '@/assets/img/flag-seychelles-mobile.png';
import flagSriLanka from '@/assets/img/flag-sri-lanka-mobile.png';
import flagThailand from '@/assets/img/flag-thailand-mobile.png';
import flagBelgium from '@/assets/img/flag-belgium-mobile.png';
import flagUSA from '@/assets/img/flag-usa.png';
import flagAus from '@/assets/img/flag-aus.png';
import flagDominika from '@/assets/img/flag-dominika.png';
import flagUK from '@/assets/img/flag-uk.png';
import flagGermany from '@/assets/img/flag-germany.png';

const users = [
  {
    id: 1,
    name: 'Таня Фирсова',
    avatar: {},
    countries: [
      {
        name: 'Шри-ланка',
        src: flagSriLanka,
        alt: 'Флаг Шри-Ланки'
      },
      {
        name: 'Таиланд',
        src: flagThailand,
        alt: 'Флаг Таиланда'
      },
      {
        name: 'Сейшельские Острова',
        src: flagSeychelles,
        alt: 'Флаг Сейшел'
      },
    ],
    tags: ['#ЗОЖ', '#ПП', '#Фитнес', '#пляж', '#авокадо', '#смузи'],
    transport: ['plane'],
    level: 99,
  },
  {
    id: 2,
    name: 'Петя Демин',
    countries: [
      {
        name: 'Бельгия',
        src: flagBelgium,
        alt: 'Флаг Бельгии'
      },
      {
        name: 'Чехия',
        src: flagCzech,
        alt: 'Флаг Чехии'
      },
    ],
    tags: ['#бургер', '#бар', '#футбол', '#концерт', '#крафт'],
    transport: ['plane', 'auto', 'walk'],
    level: 80,
  },
  {
    id: 3,
    name: 'Марк Смолов',
    countries: [
    {
        name: 'Соединённые Штаты Америки',
        src: flagUSA,
        alt: 'Флаг Соединённых Штатов Америки'
      },
      {
        name: 'Австралия',
        src: flagAus,
        alt: 'Флаг Австралии'
      },
      {
        name: 'Доминика',
        src: flagDominika,
        alt: 'Флаг Доминики'
      },
    ],
    tags: ['#рэп', '#тату', '#хайпбист', '#кроссовки', '#суприм'],
    transport: ['plane', 'bike'],
    level: 25,
  },
  {
    id: 4,
    name: 'Лариса Роговая',
    countries: [
    {
        name: 'Великобритания',
        src: flagUK,
        alt: 'Флаг Великобритании'
      },
      {
        name: 'Германия',
        src: flagGermany,
        alt: 'Флаг Германии'
      },
    ],
    
    tags: ['#образование', '#карьера', '#учеба', '#линкедин'],
    transport: ['plane', 'auto'],
    level: 50,
  },
];

const filtersStore = useFiltersStore();

const selectedCountries = reactive(filtersStore.selectedCountries);

const filteredUsers = computed(() => {
  if (selectedCountries.length === 0) return users;

  return users.filter(({countries}) => {
    return selectedCountries.some((el) => countries.find(({name}) => el === name));
  });
});
</script>

<style lang="scss" scoped>
.users {
  width: 270px;
  margin: 0 auto;
  padding-bottom: 45px;
}

.users__list {
  @include reset-list;
  display: grid;
  row-gap: 10px;
}

.user {
  background-color: $white;
}
</style>