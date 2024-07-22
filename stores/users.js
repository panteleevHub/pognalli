export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const promoUsers = ref([]);

  const currentPage = ref(1);

  const fetchUsers = async () => {
    try {
      const { data } = await useFetch(API_ROUTES.Users);
      users.value = data.value;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPromoUsers = async () => {
    try {
      const { data } = await useFetch(API_ROUTES.PromoUsers);
      promoUsers.value = data.value;
    } catch (err) {
      console.log(err);
    }
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