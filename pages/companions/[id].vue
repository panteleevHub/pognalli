<template>
  <main>
    <h1>Страница пользователя {{ params.id }}</h1>
  </main>
</template>

<script setup>
const { params } = useRoute();
</script>

<style lang="scss" scoped>

</style>