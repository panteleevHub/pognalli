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
          <button
            @click="onLikeClick(user)"
            class="user__like-button"
            :class="user.likes.includes(userId) && 'user__like-button--active'"
            type="button"
          >
          </button>
          <span>{{ user.likes.length }}</span>
        </div>
        <p class="user__tags">{{ user.tags.join(' ') }}</p>
        <div class="user__countries">
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

const userId = 21;

const users = reactive([
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
        name: 'Сейшелы',
        src: flagSeychelles,
        alt: 'Флаг Сейшел'
      },
    ],
    tags: ['#ЗОЖ', '#ПП', '#Фитнес', '#пляж', '#авокадо', '#смузи'],
    transport: ['plane'],
    level: 99,
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    likes: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    name: 'Марк Смолов',
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    countries: [
    {
        name: 'США',
        src: flagUSA,
        alt: 'Флаг США'
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
    likes: [1],
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
    likes: [1, 2, 3, 4, 5, 6],
  },
]);

const filtersStore = useFiltersStore();

const selectedCountries = reactive(filtersStore.selectedCountries);

const filteredUsers = computed(() => {
  if (selectedCountries.length === 0) return users;

  return users.filter(({countries}) => {
    return selectedCountries.some((el) => countries.find(({name}) => el === name));
  });
});

const onLikeClick = (user) => {
  // Запрос на сервер

  const userIdIndex = user.likes.indexOf(userId);

  userIdIndex === -1 ? user.likes.push(userId) : user.likes.splice(userIdIndex, 1);
}
</script>

<style lang="scss" scoped>
.users__list {
  @include reset-list;
  display: grid;
  row-gap: 10px;

  @media (min-width: $tablet-width) {
    row-gap: 40px;
  }

  @media (min-width: $desktop-width) {
    row-gap: 30px;
  }
}

.user {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 14px;
  background-color: $white;
  padding: 15px 20px 23px;
  border-radius: 20px;

  @media (min-width: $tablet-width) {
    grid-template-columns: 220px repeat(2, 1fr) auto;
    padding: 30px;
  }

  @media (min-width: $desktop-width) {
    position: relative;
    width: 950px;
    grid-template-columns: 340px repeat(2, 1fr) repeat(2, auto);
    padding: 43px;
    padding-left: 0;
  }
}

.user__avatar {
  grid-row: 1 / 3;

  @media (min-width: $tablet-width) {
    grid-row: 1 / 4;
    align-self: center;
    padding-right: 30px;
  }

  @media (min-width: $desktop-width) {
    position: absolute;
    padding-right: 55px;
  }
}

.user__avatar img {
  border-radius: 50%;

  @media (min-width: $tablet-width) {
    width: 190px;
    height: 190px;
    border-radius: 20px;
  }

  @media (min-width: $desktop-width) {
    width: 285px;
    height: 285px;
    border-radius: 20px 0 0 20px;
  }
}

.user__name {
  position: relative;
  left: -45px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: $basic-blue-light;
  margin-bottom: -14px;

  @media (min-width: $tablet-width) {
    position: static;
    grid-column: 2 / 4;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    padding-right: 30px;
  }
}

.user__likes {
  position: relative;
  left: -80px;
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: $basic-blue;
  text-transform: uppercase;

  @media (min-width: $tablet-width) {
    left: -15px;
    grid-row: 3 / 4;
    grid-column: 3 / 4;
    align-self: center;
    font-size: 20px;
    line-height: 20px;
  }

  @media (min-width: $desktop-width) {
    left: -10px;
  }
}

.user__like-button {
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: $light-grey url('@/assets/img/icon-heart-grey.svg') center no-repeat;
  background-size: 12px 12px;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    width: 50px;
    height: 50px;
    background-size: 20px 20px;
  }
}

.user__like-button--active {
  background-color: $light-red;
  background-image: url('@/assets/img/icon-heart-red.svg');
}

.user__tags {
  width: 185px;
  grid-column: 1 / -1;
  font-size: 15px;
  line-height: 18px;
  margin: 0;

  @media (min-width: $tablet-width) {
    width: 250px;
    min-height: 70px;
    grid-column: 2 / 4;
    font-size: 20px;
    line-height: 23px;
    color: $black;
    margin-bottom: 5px;
  }
}

.user__countries {
  grid-column: 1 / -1;

  @media (min-width: $tablet-width) {
    margin-top: 8px;
  }

  @media (min-width: $desktop-width) {
    grid-column: 4 / -1;
    grid-row: 1 / 3;
    margin-top: 0;
  }
}

.user__transport {
  @media (min-width: $tablet-width) {
    grid-column: 4 / -1;
    grid-row: 1 / 3;
  }

  @media (min-width: $desktop-width) {
    grid-column: 4 / -2;
    grid-row: 3 / 4;
    align-self: center;
    padding-right: 45px;
  }
}

.user__caption {
  display: block;
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

.user__caption--countries {
  margin-bottom: 18px;

  @media (min-width: $tablet-width) {
    padding-left: 50px;
  }
}

.user__caption--transport {
  margin-bottom: 16px;
}

.user__caption--level {
  text-align: center;
  margin-bottom: 10px;
}

.user__level {
  justify-self: end;

  @media (min-width: $tablet-width) {
    grid-column: 4 / -1;
    grid-row: 3 / 4;
  }

  @media (min-width: $desktop-width) {
    grid-column: -2 / -1;
  }
}

.user__invite {
  grid-column: 1 / -1;
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
  cursor: pointer;

  @media (min-width: $tablet-width) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    justify-self: start;
    align-self: center;
    width: auto;
    min-width: 150px;
    font-size: 20px;
    line-height: 20px;
    padding: 15px 22px;
  }
}
</style>