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
    <a class="user-nav__authorization user-nav__authorization--full" href="#">Авторизация</a>
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
.user-nav__contacts {
  @include reset-list;
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
</style>