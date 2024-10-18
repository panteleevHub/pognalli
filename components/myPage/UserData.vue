<template>
  <form class="user-data">
    <div class="user-data__container container">
      <button @click="onLogout">Выйти</button>
    </div>
  </form>
</template>

<script setup>
const { signOut } = useAuth();

const onLogout = async () => {
  await signOut();
};
</script>

<style lang="scss" scoped>

</style>