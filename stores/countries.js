import { defineStore } from 'pinia';

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref([]);

  const countriesList = computed(() => {
    if (countries.value.length === 0) return [];

    const arr = [];
  
    const sortedCountries = [...countries.value.sort()];
  
    sortedCountries.forEach((el) => {
      const obj = arr.findIndex(item => item.letter === el[0]);
  
      if (obj === -1) {
        arr.push({
          letter: el[0],
          countries: [el]
        });
      } else {
        arr[obj].countries.push(el);
      }
    });
  
    return arr;
  });

  const setCountries = (payload) => {
    countries.value = payload;
  };

  // const fetchCountries = async () => {
  //   countries.value = await 'api';
  // };

  return {
    countries,
    countriesList,
    setCountries,
  };
});