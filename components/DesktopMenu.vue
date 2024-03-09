<template>
  <div class="desktop-menu">
    <div class="desktop-menu__container container">
      <NuxtLink to="/">
        <Logo :isInHeader="true" />
      </NuxtLink>
      <AppNavigation />
      <UserNavigation :isFull="true" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.desktop-menu__container {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  column-gap: 40px;
  padding: 47px 60px 11px;
}
</style>