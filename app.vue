<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
  height: 100%;
}
</style>
