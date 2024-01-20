<template>
  <main class="companions">
    <PageHeader class="companions__header">Попутчики</PageHeader>
    <CountryFilter />
    <div class="companions__container container">
      <Companions />
    </div>
  </main>
</template>

<script setup>
import CountryFilter from '@/components/companionsPage/CountryFilter.vue';
import Companions from '@/components/companionsPage/Companions.vue';
</script>

<style lang="scss" scoped>
.companions__header {
  position: relative;
  z-index: 2;
}

.companions__container {
  display: grid;
  row-gap: 28px;
  width: 320px;
  padding-top: 25px;
  padding-bottom: 45px;

  @media (min-width: $tablet-width) {
    width: $tablet-width;
    padding-top: 43px;
    padding-bottom: 62px;
  }

  @media (min-width: $desktop-width) {
    width: 950px;
    padding-top: 50px;
    padding-bottom: 77px;
  }
}
</style>