<template>
  <section>
    <h2 class="visually-hidden">Список попутчиков</h2>
    <ul>
      <li
        v-for="user in filteredUsers"
        :key="user.id"
      >
        {{ user.name }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const users = [
  {
    id: 1,
    name: 'Таня Фирсова',
    countries: ['Шри-ланка', 'Таиланд', 'Сейшелы'],
  },
  {
    id: 2,
    name: 'Петя Демин',
    countries: ['Бельгия', 'Чехия'],
  },
  {
    id: 3,
    name: 'Марк Смолов',
    countries: ['Соединённые Штаты Америки', 'Австралия', 'Доминика'],
  },
  {
    id: 4,
    name: 'Лариса Роговая',
    countries: ['Великобритания', 'Германия'],
  },
];

const filtersStore = useFiltersStore();

const selectedCountries = reactive(filtersStore.selectedCountries);

const filteredUsers = computed(() => {
  if (selectedCountries.length === 0) return users;

  return users.filter(({countries}) => {
    return selectedCountries.some((el) => countries.includes(el));
  });
});
</script>

<style lang="scss" scoped>

</style>