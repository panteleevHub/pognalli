<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li v-for="link in links" class="main-nav__item">
        <NuxtLink
          @click="emit('update:close', false)"
          :to="link.ref"
          class="main-nav__link"
          activeClass="main-nav__link--active">
            {{ link.title }}
          </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const emit = defineEmits(['update:close']);

const links = [
  {
    ref: '/',
    title: 'О сервисе'
  },
  {
    ref: '/directions',
    title: 'Направления'
  },
  {
    ref: '/companions',
    title: 'Попутчики'
  },
];
</script>

<style lang="scss" scoped>
.main-nav {
  padding: 50px 0;

  @media (min-width: $tablet-width) {
    padding: 55px 0;
  }

  @media (min-width: $desktop-width) {
    padding: 0;
  }
}

.main-nav__list {
  @include reset-list;
  text-align: center;

  @media (min-width: $tablet-width) {
    text-align: left;
  }

  @media (min-width: $desktop-width) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px 34px;
    padding-left: 105px;

    &::before {
      position: absolute;
      left: 0;
      content: "";
      width: 60px;
      height: 2px;
      background-color: $white;
    }
  }
}

.main-nav__link {
  font-size: 30px;
  font-weight: 500;
  line-height: 35px;
  text-transform: uppercase;
  color: $special-blue;

  @media (min-width: $tablet-width) {
    font-size: 60px;
    line-height: 71px;
  }

  @media (min-width: $desktop-width) {
    font-size: 20px;
    line-height: 20px;
    color: $white;
  }

  &:hover,
  &:focus {
    color: $basic-yellow;
  }

  &:active {
    opacity: 0.3;
  }
}

.main-nav__link--active {
  color: $basic-yellow;
}
</style>