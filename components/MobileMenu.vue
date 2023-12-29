<template>
  <div class="mobile-menu container" :class="isMenuOpened && 'mobile-menu--opened'">
    <div class="mobile-menu__top">
      <NuxtLink to="/">
        <Logo :isMenuOpened="isMenuOpened" :isInHeader="true" />
      </NuxtLink>
      <button
        @click="isMenuOpened = !isMenuOpened"
        class="mobile-menu__toggle"
        type="button"
        aria-label="Открыть меню"
      >
      </button>
      <UserNavigation :isFull="false" class="mobile-menu__authorization mobile-menu__authorization--top" />
    </div>
    <div v-if="isMenuOpened" class="mobile-menu__bottom">
      <AppNavigation v-model:close="isMenuOpened" />
      <UserNavigation :isFull="false" class="mobile-menu__authorization mobile-menu__authorization--bottom" />
      <Contacts place="header" class="mobile-menu__contacts" />
      <Socials place="header" class="mobile-menu__socials" />
    </div>
  </div>
</template>

<script setup>
const isMenuOpened = ref(false);
</script>

<style lang="scss" scoped>
.mobile-menu--opened {
  position: relative;
  background-color: $white;

  @media (min-width: $tablet-width) {
    padding: 0 40px;
  }
}

.mobile-menu__top {
  @include flex-base;
  padding: 20px 0;

  @media (min-width: $tablet-width) {
    padding: 40px 0;
  }
}

.mobile-menu__bottom {
  @include flex-column-center;
  position: absolute;
  top: 59px;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: inherit;

  @media (min-width: $tablet-width) {
    top: 130px;
    display: block;
    padding: 0 57px;
  }
}

.mobile-menu__toggle {
  display: block;
  width: 25px;
  height: 9px;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url('@/assets/img/menu-open.svg');
}

.mobile-menu--opened .mobile-menu__toggle {
  width: 19px;
  height: 19px;
  background-image: url('@/assets/img/menu-close.svg');
}

.mobile-menu__authorization--top {
  display: none;

  @media (min-width: $tablet-width) {
    display: block;
  }
}

.mobile-menu__authorization--bottom {
  display: block;
  min-width: 270px;

  @media (min-width: $tablet-width) {
    display: none;
  }
}

.mobile-menu__contacts {
  padding: 50px 0 28px;

  @media (min-width: $tablet-width) {
    padding: 90px 0 110px;
  }
}

.mobile-menu__socials {
  padding-bottom: 28px;

  @media (min-width: $tablet-width) {
    padding-bottom: 72px;
    margin: 0;
  }
}
</style>