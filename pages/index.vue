<template>
  <main>
    <h1 class="visually-hidden">Сервис по поиску попутчиков для путешествий</h1>
    <Promo />
    <ServiceInfo />
    <Directions />
    <Companions />
    <Rates />
    <Registration />
    <Map />
  </main>
</template>

<script setup>
import Promo from '@/components/mainPage/Promo.vue';
import ServiceInfo from '@/components/mainPage/ServiceInfo.vue';
import Directions from '@/components/mainPage/Directions.vue';
import Companions from '@/components/mainPage/Companions.vue';
import Rates from '@/components/mainPage/Rates.vue';
import Registration from '@/components/mainPage/Registration.vue';
import Map from '@/components/mainPage/Map.vue';

const usersStore = useUsersStore();
const countriesStore = useCountriesStore();

await useAsyncData('promoUsers', () => usersStore.fetchPromoUsers());
await useAsyncData('countries', () => countriesStore.fetchCountries());
</script>

<style lang="scss" scoped>

</style>