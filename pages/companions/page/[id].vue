<template>
  <main class="companions">
    <PageHeader class="companions__header">Попутчики</PageHeader>
    <CountryFilter />
    <div class="companions__container container">
      <UserFilter class="companions__user-filter" />
      <Companions :users="slicedUsers" :isEmpty="filteredUsers.length === 0" />
      <UserPagination
        v-if="isPaginationShow"
        :pages="pageCount"
        class="companions__pagination"
      />
    </div>
  </main>
</template>

<script setup>
import CountryFilter from '@/components/companionsPage/CountryFilter.vue';
import UserFilter from '@/components/companionsPage/UserFilter.vue';
import Companions from '@/components/companionsPage/Companions.vue';
import UserPagination from '@/components/companionsPage/UserPagination.vue';

definePageMeta({
  middleware: 'auth',
});

const usersStore = useUsersStore();
const filtersStore = useFiltersStore();

await useAsyncData('users', () => usersStore.fetchUsers());

const { selectedCountries, selectedUserData, initialUserData } = storeToRefs(filtersStore);
const { users } = storeToRefs(usersStore);

const { params } = useRoute();
const currentPage = ref(parseInt(params.id));

const USERS_ON_PAGE = 8;

const filteredUsersByCountries = computed(() => {
  if (selectedCountries.value.length === 0) return users.value;

  return users.value.filter(user => (
    selectedCountries.value.some((country) => (
      user.countries.find((countryId) => countryId === country.id)
    ))
  ))
});

const filteredUsers = computed(() => {
  if (JSON.stringify(selectedUserData.value) === JSON.stringify(initialUserData.value)) {
    return filteredUsersByCountries.value;
  }

  return filteredUsersByCountries.value.filter(user => {
    return (
      user.level >= selectedUserData.value.level.min &&
      user.level <= selectedUserData.value.level.max &&
      (user.age >= selectedUserData.value.age.min || user.age === 0) &&
      user.age <= selectedUserData.value.age.max &&
      (selectedUserData.value.purpose.length === 0 || selectedUserData.value.purpose.includes(user.purpose)) &&
      (selectedUserData.value.music.length === 0 || selectedUserData.value.music.some(genre => user.music.includes(genre))) &&
      (selectedUserData.value.transport.length === 0 ||
        selectedUserData.value.transport.some(transport => user.transport.includes(transport)))
    );
  });
});

const pageCount = computed(() => Math.ceil(filteredUsers.value.length / USERS_ON_PAGE));

const slicedUsers = computed(() => {
  const startOfSlice = (currentPage.value - 1) * USERS_ON_PAGE;
  const endOfSlice = Math.min(filteredUsers.value.length, currentPage.value * USERS_ON_PAGE);

  return filteredUsers.value.slice(startOfSlice, endOfSlice);
});

const isPaginationShow = computed(() => filteredUsers.value.length > USERS_ON_PAGE);

</script>

<style lang="scss" scoped>
.companions__header {
  position: relative;
  z-index: 2;
}

.companions__container {
  display: grid;
  row-gap: 28px;
  width: $mobile-width;
  padding-top: 25px;
  padding-bottom: 45px;

  @media (min-width: $tablet-width) {
    width: $tablet-width;
    padding-top: 43px;
    padding-bottom: 62px;
  }

  @media (min-width: $desktop-width) {
    grid-template-columns: 1fr auto;
    column-gap: 85px;
    width: $desktop-width;
    padding-top: 50px;
    padding-bottom: 77px;
  }
}

.companions__user-filter {
  @media (min-width: $desktop-width) {
    order: 1;
    align-self: start;
  }
}

.companions__pagination {
  @media (min-width: $desktop-width) {
    order: 2;
  } 
}
</style>