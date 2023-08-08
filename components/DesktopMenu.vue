<template>
  <div class="desktop-menu">
    <Logo />
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