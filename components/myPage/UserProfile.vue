<template>
  <form class="user-profile">
    <div class="user-profile__container container">
      <UserLevel
        :level="user.level"
        place="catalog"
        color="#edeff6"
      />
      <button @click="onLogout">Выйти</button>
    </div>
  </form>
</template>

<script setup>
const { signOut, data } = useAuth();

const usersStore = useUsersStore();
const { user } = storeToRefs(usersStore);

usersStore.fetchUser(data.value.user.id);

const onLogout = async () => {
  await signOut();
};
</script>

<style lang="scss" scoped>

</style>