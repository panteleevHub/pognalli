<template>
  <header class="header">
    <DesktopMenu class="header__desktop-menu" />
    <MobileMenu class="header__mobile-menu" />
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  background-color: $dark-blue;
}

.header__desktop-menu {
  display: none;

  @media (min-width: $desktop-width) {
    display: block;
  }
}

.header__mobile-menu {
  display: block;

  @media (min-width: $desktop-width) {
    display: none;
  }
}
</style>