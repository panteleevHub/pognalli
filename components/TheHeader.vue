<template>
  <header class="header">
    <div class="header__container container">
      <DesktopMenu class="header__desktop-menu" />
      <MobileMenu class="header__mobile-menu" />
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  background-color: $dark-blue;
}

.header__container {
  position: relative;
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