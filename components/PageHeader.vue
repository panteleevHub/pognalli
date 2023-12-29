<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="header__title title"><slot></slot></h1>
      <NuxtLink class="header__link-home" to="/">На главную</NuxtLink>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  @include round-bottom;
  background-color: $dark-blue;
}

.header__container {
  padding-top: 45px;
  padding-bottom: 13px;
  
  @media (min-width: $tablet-width) {
    @include flex-base;
    column-gap: 50px;
    padding: 100px 75px 80px;
  }

  @media (min-width: $desktop-width) {
    padding: 120px 125px 80px;
  }
}

.header__link-home {
  display: none;

  @media (min-width: $tablet-width) {
    display: block;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: $white;
    padding-top: 10px;
    padding-right: 60px;
    background: url('@/assets/img/icon-arrow-bend.svg') right 10px no-repeat;
  }
}
</style>