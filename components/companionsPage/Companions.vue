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
          <img
            :src="user.avatarUrl"
            width="70"
            height="70"
            alt="Аватар пользователя"
          >
        </div>
        <NuxtLink :to="'/companions/' + user.id" class="user__name">{{ user.name }}</NuxtLink>
        <div class="user__likes">
          <button type="button"></button>
          <span>{{ user.likes }}</span>
        </div>
        <p class="user__tags">{{ user.tags.join(', ') }}</p>
        <div class="user__contries">
          <span class="user__caption user__caption--countries">Хочет посетить:</span>
          <UserCountries :countries="user.countries" place="catalog" />
        </div>
        <div class="user__transport">
          <span class="user__caption user__caption--transport">Транспорт:</span>
          <TransportIcons :transport="user.transport" place="catalog" />
        </div>
        <div class="user__level">
          <span class="user__caption user__caption--level">Левел:</span>
          <UserLevel :level="user.level" color="#fff" place="catalog" />
        </div>
        <button class="user__invite" type="button">Позвать!</button>
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
    avatarUrl: 'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
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
    likes: 1500000,
  },
  {
    id: 2,
    name: 'Петя Демин',
    avatarUrl: 'https://i.postimg.cc/HxKWKnjy/harps-joseph-unsplash.jpg',
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
    likes: 1500,
  },
  {
    id: 3,
    name: 'Марк Смолов',
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
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
    likes: 170,
  },
  {
    id: 4,
    name: 'Лариса Роговая',
    avatarUrl: 'https://i.postimg.cc/sXKQ5n5y/dmitry-rodionov-unsplash.jpg',
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
    likes: 23,
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
.users__list {
  @include reset-list;
  display: grid;
  row-gap: 10px;
}

.user {
  background-color: $white;
  padding: 15px 20px 23px;
  border-radius: 20px;
}

.user__name {
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: $basic-blue-light;

  @media (min-width: $tablet-width) {
    font-size: 30px;
    line-height: 30px;
  }
}

.user__likes {
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: $basic-blue;
  text-transform: uppercase;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 20px;
  }
}

.user__tags {
  font-size: 15px;
  line-height: 18px;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 23px;
    color: $black;
  }
}

.user__caption {
  font-size: 15px;
  line-height: 16px;
  text-transform: lowercase;

  &:not(.user__caption--countries) {
    @media (min-width: $tablet-width) {
      display: none;
    }
  }

  @media (min-width: $desktop-width) {
    display: none;
  }
}

.user__invite {
  font-family: "Blogger Sans";
  width: 100%;
  font-size: 17px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  color: $basic-blue;
  background-color: $basic-yellow;
  padding: 12px 20px;
  border-radius: 25px;
  border: none;

  @media (min-width: $tablet-width) {
    width: auto;
    min-width: 150px;
    font-size: 20px;
    line-height: 20px;
    padding: 15px 22px;
  }
}
</style>