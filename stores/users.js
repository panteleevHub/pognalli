export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const promoUsers = ref([]);

  const currentPage = ref(1);

  const fetchUsers = async () => {
    const { data } = await useFetch(API_ROUTES.Users);
    users.value = data.value;
  };

  const fetchPromoUsers = async () => {
    const { data } = await useFetch(API_ROUTES.PromoUsers);
    promoUsers.value = data.value;
  };

  const changeCurrentPage = (page) => {
    currentPage.value = page;
  };

  return {
    users,
    promoUsers,
    currentPage,
    fetchUsers,
    fetchPromoUsers,
    changeCurrentPage,
  }
});