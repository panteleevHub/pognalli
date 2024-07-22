export const useCountriesStore = defineStore('countries', () => {
  const countries = ref([]);

  const countriesList = computed(() => {
    if (countries.value.length === 0) return [];

    const arr = [];
  
    countries.value.forEach((el) => {
      const objId = arr.findIndex(item => item.letter === el.name[0]);
  
      if (objId === -1) {
        arr.push({
          letter: el.name[0],
          countries: [{id: el._id, name: el.name}]
        });
      } else {
        arr[objId].countries.push({id: el._id, name: el.name});
      }
    });
  
    return arr;
  });

  const fetchCountries = async () => {
    const { data } = await useFetch(API_ROUTES.Countries);
    countries.value = data.value;
  };

  return {
    countries,
    countriesList,
    fetchCountries,
  };
});