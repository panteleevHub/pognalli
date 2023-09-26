<template>
  <div class="desktop-menu">
    <Logo :isMenuOpened="true" />
    <AppNavigation />
    <UserNavigation :isFull="true" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.desktop-menu {
  background-color: $dark-blue;
}
</style>