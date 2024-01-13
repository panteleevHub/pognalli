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

  return {
    selectedCountries,
    setCountry,
    removeCountry,
    resetCountriesFilter,
  };
});