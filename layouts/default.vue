<template>
  <div class="page">
    <MainHeader />
    <slot />
    <MainFooter />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100%;
}
</style>