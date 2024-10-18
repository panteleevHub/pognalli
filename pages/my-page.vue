<template>
  <main class="my-page">
    <PageHeader class="my-page__header">{{ userName }}</PageHeader>
    <UserData />
  </main>
</template>

<script setup>
import UserData from '@/components/myPage/UserData.vue';

definePageMeta({
  middleware: 'auth',
});

const { data } = useAuth();

const userName = computed(() => data.value.user.name);
</script>

<style lang="scss" scoped>

</style>