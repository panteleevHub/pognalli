<template>
  <main class="companions">
    <PageHeader class="companions__header">Попутчики</PageHeader>
    <CountryFilter />
    <div class="companions__container container">
      <UserFilter class="companions__user-filter" />
      <Companions />
    </div>
  </main>
</template>

<script setup>
import CountryFilter from '@/components/companionsPage/CountryFilter.vue';
import UserFilter from '@/components/companionsPage/UserFilter.vue';
import Companions from '@/components/companionsPage/Companions.vue';

const usersStore = useUsersStore();
const countriesStore = useCountriesStore();

await useAsyncData('users', () => usersStore.fetchUsers());
await useAsyncData('countries', () => countriesStore.fetchCountries());

</script>

<style lang="scss" scoped>
.companions__header {
  position: relative;
  z-index: 2;
}

.companions__container {
  display: grid;
  row-gap: 28px;
  width: $mobile-width;
  padding-top: 25px;
  padding-bottom: 45px;

  @media (min-width: $tablet-width) {
    width: $tablet-width;
    padding-top: 43px;
    padding-bottom: 62px;
  }

  @media (min-width: $desktop-width) {
    grid-template-columns: 1fr auto;
    column-gap: 85px;
    width: $desktop-width;
    padding-top: 50px;
    padding-bottom: 77px;
  }
}

.companions__user-filter {
  @media (min-width: $desktop-width) {
    order: 1;
    align-self: start;
  }
}
</style>