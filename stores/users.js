export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const currentPage = ref(1);

  const fetchUsers = async () => {
    const { data } = await useFetch(API_ROUTES.Users);
    users.value = data.value;
  };

  const changeCurrentPage = (page) => {
    currentPage.value = page;
  };

  return {
    users,
    currentPage,
    fetchUsers,
    changeCurrentPage,
  }
});