<template>
  <section class="users">
    <h2 class="visually-hidden">Список попутчиков</h2>
    <p v-if="isEmpty" class="users__empty">Попутчики не найдены</p>
    <div v-else>
      <ul class="users__list">
        <li
          v-for="user in users"
          :key="user._id"
          class="users__item user"
        >
          <div class="user__avatar">
            <img
              :src="user.avatarUrl ? user.avatarUrl : profilePlaceholder"
              width="70"
              height="70"
              alt="Аватар пользователя"
            >
          </div>
          <NuxtLink :to="APP_ROUTES.Companion.replace(':id', user._id)" class="user__name">{{ user.name }}</NuxtLink>
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
          <div v-if="user.countries.length !== 0" class="user__countries">
            <span class="user__caption user__caption--countries">Хочет посетить:</span>
            <UserCountries :countriesIds="user.countries" place="catalog" />
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
    </div>
  </section>
</template>

<script setup>
import profilePlaceholder from '@/assets/img/profile-placeholder.png';

const props = defineProps({
  users: {
    type: Array,
    default: [],
    required: true,
  },

  isEmpty: {
    type: Boolean,
    default: true,
    required: true,
  }
});

const userId = 21; // Временно

const onLikeClick = (user) => {
  // Запрос на сервер

  const userIdIndex = user.likes.indexOf(userId);

  userIdIndex === -1 ? user.likes.push(userId) : user.likes.splice(userIdIndex, 1);
};
</script>

<style lang="scss" scoped>
.users__empty {
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  text-align: center;
  color: $basic-blue-light;
  margin: 0;
  margin-top: 15px;

  @media (min-width: $tablet-width) {
    font-size: 22px;
    line-height: 22px;
    margin-top: 20px;
  }

  @media (min-width: $desktop-width) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 32px;
    line-height: 32px;
    margin-top: 0;
  }
}

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
  grid-template-columns: 85px repeat(2, 1fr);
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
    grid-template-columns: 265px repeat(4, 1fr);
    column-gap: 10px;
    padding: 43px;
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
    padding-right: 45px;
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
    width: 220px;
    height: 220px;
  }
}

.user__name {
  grid-column: 2 / -1;
  position: relative;
  // left: -45px;
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
  left: -33px;
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
    column-gap: 7px;
    align-self: center;
    font-size: 20px;
    line-height: 20px;
  }

  @media (min-width: $desktop-width) {
    left: 0;
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
  grid-column: 1 / 3;

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