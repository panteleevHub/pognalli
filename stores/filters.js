export const useFiltersStore = defineStore('filters', () => {
  const selectedCountries = ref([]);

  const setCountry = (country) => {
    selectedCountries.value.push(country);
  }

  const removeCountry = (country) => {
    const countryId = selectedCountries.value.indexOf(country);

    if (countryId !== -1) {
      selectedCountries.value.splice(countryId, 1);
    }
  }

  const resetCountriesFilter = () => {
    selectedCountries.value.splice(0, selectedCountries.value.length);
  }

  const initialUserData = ref({
    purpose: [],
    music: [],
    transport: [],
    age: {
      min: 1,
      max: 100
    },
    level: {
      min: 1,
      max: 100,
    },
  });

  const selectedUserData = ref(getDeepObjectCopy(initialUserData.value));

  const setUserData = (payload) => {
    selectedUserData.value = payload;
  };

  const resetUserFilter = () => {
    selectedUserData.value = getDeepObjectCopy(initialUserData.value);
  }

  return {
    selectedCountries,
    setCountry,
    removeCountry,
    resetCountriesFilter,
    selectedUserData,
    initialUserData,
    setUserData,
    resetUserFilter,
  };
});