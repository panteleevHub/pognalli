export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const promoUsers = ref([]);
  const user = ref({});

  const fetchUsers = async () => {
    try {
      const { data } = await useFetch(API_ROUTES.Users, { method: 'GET' });
      users.value = data.value;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPromoUsers = async () => {
    try {
      const { data } = await useFetch(API_ROUTES.PromoUsers, { method: 'GET' });
      promoUsers.value = data.value;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUser = async (userId) => {
    try {
      const { data, error } = await useFetch(API_ROUTES.User.replace(':id', userId), { method: 'GET' });

      if (error.value) {
        showError({
          statusCode: error.value.statusCode,
          statusMessage: error.value.statusMessage
        })
      }

      user.value = data.value;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    users,
    promoUsers,
    user,
    fetchUsers,
    fetchPromoUsers,
    fetchUser
  }
});