<template>
  <section>
    <h1 class="visually-hidden">Моя страница</h1>
    <button @click="onLogout">Выйти</button>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});

const { signOut } = useAuth();

const onLogout = async () => {
  await signOut();
};
</script>

<style lang="scss" scoped>

</style>