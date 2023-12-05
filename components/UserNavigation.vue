<template>
  <div class="user-nav">
    <ul v-if="isFull" class="user-nav__contacts">
      <li class="user-nav__item user-nav__item--phone">
        <a href="#"></a>
      </li>
      <li class="user-nav__item user-nav__item--email">
        <a href="#"></a>
      </li>
    </ul>
    <NuxtLink class="user-nav__authorization user-nav__authorization--full" to="/login">Авторизация</NuxtLink>
  </div>
</template>

<script setup>
const { isFull } = defineProps({
  isFull: {
    type: Boolean,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.user-nav {
  display: flex;
}

.user-nav__contacts {
  @include reset-list;
  display: flex;
}

.user-nav__item {
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

.user-nav__item--phone {
  background-color: $special-orange;
  background-image: url('@/assets/img/icon-phone.svg');
}

.user-nav__item--email {
  background-color: $special-yellow-dark;
  background-image: url('@/assets/img/icon-mail.svg');
}

.user-nav__authorization {
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
}

.user-nav__authorization--full {
  @media (max-width: $pre-tablet-width) {
    min-width: 190px;
    padding: 10px;
    margin: 0;
  }
}
</style>