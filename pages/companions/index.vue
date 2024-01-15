<template>
  <main class="companions">
    <PageHeader class="companions__header">Попутчики</PageHeader>
    <div class="companions__content">
      <CountryFilter />
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

.companions__content {
  display: grid;
  row-gap: 25px;
}
</style>