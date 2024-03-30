<template>
  <div id="app">
    <MainHeader />
    <NuxtPage />
    <MainFooter />
  </div>
</template>

<script setup>
const usersStore = useUsersStore();
const countriesStore = useCountriesStore();

await useAsyncData('promoUsers', () => usersStore.fetchPromoUsers());
await useAsyncData('countries', () => countriesStore.fetchCountries());
</script>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100%;
}
</style>
