<template>
  <main class="companions">
    <header class="companions__header">
      <h1 class="companions__title title">Попутчики</h1>
      <NuxtLink class="companions__link-home" to="/">На главную</NuxtLink>
    </header>
  </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.companions__header {
  @include round-bottom;
  padding: 45px 25px 13px;
  background-color: $dark-blue;
}

.companions__link-home {
  display: none;

  @media (min-width: $tablet-width) {
    display: block;
  }
}
</style>