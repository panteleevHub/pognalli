<template>
  <main class="my-page">
    <PageHeader class="my-page__header">{{ userName }}</PageHeader>
    <UserProfile />
  </main>
</template>

<script setup>
import UserProfile from '@/components/myPage/UserProfile.vue';

definePageMeta({
  middleware: 'auth',
});

const { data } = useAuth();

const userName = computed(() => data.value.user.name);
</script>

<style lang="scss" scoped>

</style>