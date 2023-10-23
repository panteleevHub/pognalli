<template>
  <div>
    <div :class="isMenuOpened ? 'mobile-menu mobile-menu--opened' : 'mobile-menu'">
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
        <AppNavigation />
        <UserNavigation :isFull="false" class="mobile-menu__authorization mobile-menu__authorization--bottom" />
        <address class="mobile-menu__contacts">
          <a class="mobile-menu__contact mobile-menu__contact--phone" href="tel:88005558628">8 800 555-86-28</a>
          <a class="mobile-menu__contact mobile-menu__contact--mail" href="mailto:mail@htmlacademy.ru">mail@htmlacademy.ru</a>
        </address>
        <Socials place="header" class="mobile-menu__socials" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isMenuOpened = ref(false);
</script>

<style lang="scss" scoped>
.mobile-menu--opened {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0 25px;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $tablet-width) {
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
  min-width: 270px;
  padding: 50px 0 28px;

  @media (min-width: $tablet-width) {
    padding: 90px 0 110px;
    margin: 0;
  }
}

.mobile-menu__contact {
  display: flex;
  min-height: 45px;
  padding-left: 60px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: $special-blue;
  align-items: center;

  @media (min-width: $tablet-width) {
    min-height: 68px;
    font-size: 28px;
    line-height: 28px;
    padding-left: 90px;
  }
}

.mobile-menu__contact--phone {
  background: 0 center url('@/assets/img/phone-icon.svg') no-repeat;

  @media (min-width: $tablet-width) {
    background-size: 68px 68px;
  }
}

.mobile-menu__contact--mail {
  background: 0 center url('@/assets/img/mail-icon.svg') no-repeat;
  
  @media (min-width: $tablet-width) {
    background-size: 68px 68px;
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