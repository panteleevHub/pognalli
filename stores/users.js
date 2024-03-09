export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const currentPage = ref(1);

  const setUsers = (payload) => {
    users.value = payload;
  };

  // const fetchUsers = async () => {
  //   users.value = await 'api';
  // };

  const changeCurrentPage = (page) => {
    currentPage.value = page;
  };

  return {
    users,
    currentPage,
    setUsers,
    // fetchUsers,
    changeCurrentPage,
  }
});