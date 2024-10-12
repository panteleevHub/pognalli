export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const promoUsers = ref([]);

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

  return {
    users,
    promoUsers,
    fetchUsers,
    fetchPromoUsers,
  }
});