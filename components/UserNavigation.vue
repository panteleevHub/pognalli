<template>
  <div class="user-nav">
    <ul v-if="isFull" class="user-nav__contacts">
      <li class="user-nav__item user-nav__item--phone">
        <NuxtLink :to="APP_ROUTES.Main"></NuxtLink>
      </li>
      <li class="user-nav__item user-nav__item--email">
        <NuxtLink :to="APP_ROUTES.Main"></NuxtLink>
      </li>
    </ul>
    <NuxtLink
      v-if="status === 'unauthenticated'"
      @click="emit('update:close', false)"
      class="user-nav__authorization user-nav__authorization--full"
      :to="APP_ROUTES.Login"
    >
      Авторизация
    </NuxtLink>
    <NuxtLink
      v-if="status === 'authenticated'"
      @click="emit('update:close', false)"
      :to="APP_ROUTES.MyPage"
      class="user-nav__user user-nav__user--full"
    >
      {{ getUserName() }}
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  isFull: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:close']);

const { data, status } = useAuth();

const getUserName = () => {
  if (!data.value.user) return 'Unknown';

  return data.value.user.name.split(' ')[0];
};
</script>

<style lang="scss" scoped>
.user-nav {
  display: flex;
}

.user-nav__contacts {
  @include reset-list;
  display: flex;
}

.user-nav__item a {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: $desktop-width) {
    width: 50px;
    height: 50px;
  }
}

.user-nav__item--phone a {
  background-color: $special-orange;
  background-image: url('@/assets/img/icon-phone.svg');

  &:hover,
  &:focus {
    background-color: $special-orange-dark;
  }

  &:active {
    opacity: 0.3;
  }
}

.user-nav__item--email a {
  background-color: $special-yellow-dark;
  background-image: url('@/assets/img/icon-mail.svg');

  &:hover,
  &:focus {
    background-color: $special-orange;
  }

  &:active {
    opacity: 0.3;
  }
}

.user-nav__authorization,
.user-nav__user {
  display: block;
  max-width: 300px;
  margin: 0 auto;
  padding: 15px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: $basic-blue;
  background-color: $basic-yellow;
  border-radius: 25px;

  @media (min-width: $tablet-width) {
    min-width: 188px;
    font-size: 20px;
  }

  &:hover,
  &:focus {
    background-color: $special-yellow-dark;
  }

  &:active {
    opacity: 0.3;
  }
}

.user-nav__user {
  text-transform: capitalize;
  letter-spacing: 0.1vw;
}

.user-nav__authorization--full,
.user-nav__user--full {
  @media (max-width: $pre-tablet-width) {
    min-width: 190px;
    padding: 10px;
    margin: 0;
  }
}
</style>