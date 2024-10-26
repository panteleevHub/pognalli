<template>
  <main>
    <h1>Страница пользователя {{ user?.name }}</h1>
  </main>
</template>

<script setup>
const { params } = useRoute();
const usersStore = useUsersStore();

usersStore.fetchUser(params.id);

const { user } = storeToRefs(usersStore);
</script>

<style lang="scss" scoped>

</style>