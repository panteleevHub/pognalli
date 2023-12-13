<template>
  <div>
    <div class="desktop-menu">
      <Logo :isInHeader="true" />
      <AppNavigation />
      <UserNavigation :isFull="true" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.desktop-menu {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  column-gap: 40px;
  padding: 47px 0 11px;
}
</style>