import { defineStore } from 'pinia';

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

  const initialUserData = {
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
  };

  const selectedUserData = ref(structuredClone(initialUserData));

  const setUserData = (payload) => {
    selectedUserData.value = payload;
  };

  return {
    selectedCountries,
    setCountry,
    removeCountry,
    resetCountriesFilter,
    selectedUserData,
    initialUserData,
    setUserData
  };
});