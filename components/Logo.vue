<template>
  <picture v-if="!isMenuOpened && isInHeader">
    <source media="(min-width: 1440px)" srcset="@/assets/img/logo-pognali-white-desktop.png">
    <source media="(min-width: 768px)" srcset="@/assets/img/logo-pognali-white-tablet.png">
    <img
    class="logo"
    src="@/assets/img/logo-pognali-white-mobile.png"
    width="96"
    height="15"
    alt="Логотип сайта &laquo;Погнали&raquo;"
    >
  </picture>
  <picture v-else>
    <source media="(min-width: 1440px)" srcset="@/assets/img/logo-pognali-blue-desktop.png">
    <source media="(min-width: 768px)" srcset="@/assets/img/logo-pognali-blue-tablet.png">
    <img
    class="logo"
    src="@/assets/img/logo-pognali-blue-mobile.png"
    width="96"
    height="15"
    alt="Логотип сайта &laquo;Погнали&raquo;"
    >
  </picture>
</template>

<script setup>
defineProps({
  isMenuOpened: {
    type: Boolean,
    required: false
  },
  isInHeader: {
    type: Boolean,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.logo {
  @media (min-width: $tablet-width) {
    width: 164px;
    height: 42px;
  }

  @media (min-width: $desktop-width) {
    width: 200px;
    height: 52px;
  }
}
</style>