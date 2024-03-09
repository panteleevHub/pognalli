<template>
  <main class="companions">
    <PageHeader class="companions__header">Попутчики</PageHeader>
    <CountryFilter />
    <div class="companions__container container">
      <UserFilter class="companions__user-filter" />
      <Companions />
    </div>
  </main>
</template>

<script setup>
import CountryFilter from '@/components/companionsPage/CountryFilter.vue';
import UserFilter from '@/components/companionsPage/UserFilter.vue';
import Companions from '@/components/companionsPage/Companions.vue';
import flagCzech from '@/assets/img/flag-czech-mobile.png';
import flagSeychelles from '@/assets/img/flag-seychelles-mobile.png';
import flagSriLanka from '@/assets/img/flag-sri-lanka-mobile.png';
import flagThailand from '@/assets/img/flag-thailand-mobile.png';
import flagBelgium from '@/assets/img/flag-belgium-mobile.png';
import flagUSA from '@/assets/img/flag-usa.png';
import flagAus from '@/assets/img/flag-aus.png';
import flagDominika from '@/assets/img/flag-dominika.png';
import flagUK from '@/assets/img/flag-uk.png';
import flagGermany from '@/assets/img/flag-germany.png';

const usersStore = useUsersStore();

usersStore.setUsers([
  {
    id: 1,
    name: 'Таня Фирсова',
    age: 25,
    avatarUrl: 'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    countries: [
      {
        name: 'Шри-ланка',
        src: flagSriLanka,
        alt: 'Флаг Шри-Ланки'
      },
      {
        name: 'Сейшелы',
        src: flagSeychelles,
        alt: 'Флаг Сейшел'
      },
    ],
    tags: ['#ЗОЖ', '#ПП', '#Фитнес', '#пляж', '#авокадо', '#смузи'],
    transport: ['plane'],
    level: 99,
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    purpose: 'vacation',
    music: ['pop'],
  },
  {
    id: 2,
    name: 'Петя Демин',
    age: 45,
    avatarUrl: 'https://i.postimg.cc/HxKWKnjy/harps-joseph-unsplash.jpg',
    countries: [
      {
        name: 'Бельгия',
        src: flagBelgium,
        alt: 'Флаг Бельгии'
      },
      {
        name: 'Чехия',
        src: flagCzech,
        alt: 'Флаг Чехии'
      },
    ],
    tags: ['#бургер', '#бар', '#футбол', '#концерт', '#крафт'],
    transport: ['plane', 'auto', 'walk'],
    level: 80,
    likes: [1, 2, 3, 4, 5],
    purpose: 'vacation',
    music: ['rap', 'techno'],
  },
  {
    id: 3,
    name: 'Марк Смолов',
    age: 16,
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    countries: [
    {
        name: 'США',
        src: flagUSA,
        alt: 'Флаг США'
      },
      {
        name: 'Австралия',
        src: flagAus,
        alt: 'Флаг Австралии'
      },
      {
        name: 'Доминика',
        src: flagDominika,
        alt: 'Флаг Доминики'
      },
    ],
    tags: ['#рэп', '#тату', '#хайпбист', '#кроссовки', '#суприм'],
    transport: ['plane', 'bike'],
    level: 25,
    likes: [1],
    purpose: 'vacation',
    music: ['rap', 'rock'],
  },
  {
    id: 4,
    name: 'Лариса Роговая',
    age: 27,
    avatarUrl: 'https://i.postimg.cc/sXKQ5n5y/dmitry-rodionov-unsplash.jpg',
    countries: [
    {
        name: 'Великобритания',
        src: flagUK,
        alt: 'Флаг Великобритании'
      },
      {
        name: 'Германия',
        src: flagGermany,
        alt: 'Флаг Германии'
      },
    ],
    tags: ['#образование', '#карьера', '#учеба', '#линкедин'],
    transport: ['plane', 'auto'],
    level: 50,
    likes: [1, 2, 3, 4, 5, 6],
    purpose: 'study',
    music: [],
  },
  {
    id: 5,
    name: 'Таня Фирсова',
    age: 33,
    avatarUrl: 'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    countries: [
      {
        name: 'Шри-ланка',
        src: flagSriLanka,
        alt: 'Флаг Шри-Ланки'
      },
      {
        name: 'Таиланд',
        src: flagThailand,
        alt: 'Флаг Таиланда'
      },
      {
        name: 'Сейшелы',
        src: flagSeychelles,
        alt: 'Флаг Сейшел'
      },
    ],
    tags: ['#ЗОЖ', '#ПП', '#Фитнес', '#пляж', '#авокадо', '#смузи'],
    transport: ['plane'],
    level: 99,
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    purpose: 'work',
    music: ['pop', 'techno'],
  },
  {
    id: 6,
    name: 'Петя Демин',
    age: 58,
    avatarUrl: 'https://i.postimg.cc/HxKWKnjy/harps-joseph-unsplash.jpg',
    countries: [
      {
        name: 'Бельгия',
        src: flagBelgium,
        alt: 'Флаг Бельгии'
      },
      {
        name: 'Чехия',
        src: flagCzech,
        alt: 'Флаг Чехии'
      },
    ],
    tags: ['#бургер', '#бар', '#футбол', '#концерт', '#крафт'],
    transport: ['plane', 'auto', 'walk'],
    level: 80,
    likes: [1, 2, 3, 4, 5],
    purpose: 'work',
    music: ['rap', 'techno', 'rock'],
  },
  {
    id: 7,
    name: 'Марк Смолов',
    age: 43,
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    countries: [
      {
        name: 'США',
        src: flagUSA,
        alt: 'Флаг США'
      },
      {
        name: 'Австралия',
        src: flagAus,
        alt: 'Флаг Австралии'
      },
      {
        name: 'Доминика',
        src: flagDominika,
        alt: 'Флаг Доминики'
      },
    ],
    tags: ['#рэп', '#тату', '#хайпбист', '#кроссовки', '#суприм'],
    transport: ['plane', 'bike'],
    level: 25,
    likes: [1],
    purpose: 'vacation',
    music: ['rap'],
  },
  {
    id: 9,
    name: 'Таня Фирсова',
    age: 18,
    avatarUrl: 'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    countries: [
      {
        name: 'Таиланд',
        src: flagThailand,
        alt: 'Флаг Таиланда'
      },
      {
        name: 'Сейшелы',
        src: flagSeychelles,
        alt: 'Флаг Сейшел'
      },
    ],
    tags: ['#ЗОЖ', '#ПП', '#Фитнес', '#пляж', '#авокадо', '#смузи'],
    transport: ['plane'],
    level: 99,
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    purpose: 'study',
    music: ['pop', 'classic'],
  },
  {
    id: 10,
    name: 'Петя Демин',
    age: 55,
    avatarUrl: 'https://i.postimg.cc/HxKWKnjy/harps-joseph-unsplash.jpg',
    countries: [
      {
        name: 'Бельгия',
        src: flagBelgium,
        alt: 'Флаг Бельгии'
      },
      {
        name: 'Чехия',
        src: flagCzech,
        alt: 'Флаг Чехии'
      },
    ],
    tags: ['#бургер', '#бар', '#футбол', '#концерт', '#крафт'],
    transport: ['plane', 'auto', 'walk'],
    level: 80,
    likes: [1, 2, 3, 4, 5],
    purpose: 'work',
    music: [],
  },
  {
    id: 11,
    name: 'Марк Смолов',
    age: 29,
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    countries: [
    {
        name: 'США',
        src: flagUSA,
        alt: 'Флаг США'
      },
      {
        name: 'Австралия',
        src: flagAus,
        alt: 'Флаг Австралии'
      },
      {
        name: 'Доминика',
        src: flagDominika,
        alt: 'Флаг Доминики'
      },
    ],
    tags: ['#рэп', '#тату', '#хайпбист', '#кроссовки', '#суприм'],
    transport: ['plane', 'bike'],
    level: 25,
    likes: [1],
    purpose: 'vacation',
    music: ['techno', 'jazz'],
  },
  {
    id: 12,
    name: 'Таня Фирсова',
    age: 39,
    avatarUrl: 'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    countries: [
      {
        name: 'Шри-ланка',
        src: flagSriLanka,
        alt: 'Флаг Шри-Ланки'
      },
      {
        name: 'Таиланд',
        src: flagThailand,
        alt: 'Флаг Таиланда'
      },
      {
        name: 'Сейшелы',
        src: flagSeychelles,
        alt: 'Флаг Сейшел'
      },
    ],
    tags: ['#ЗОЖ', '#ПП', '#Фитнес', '#пляж', '#авокадо', '#смузи'],
    transport: ['plane'],
    level: 99,
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    purpose: 'study',
    music: ['classic', 'juzz'],
  },
  {
    id: 13,
    name: 'Петя Демин',
    age: 40,
    avatarUrl: 'https://i.postimg.cc/HxKWKnjy/harps-joseph-unsplash.jpg',
    countries: [
      {
        name: 'Бельгия',
        src: flagBelgium,
        alt: 'Флаг Бельгии'
      },
      {
        name: 'Чехия',
        src: flagCzech,
        alt: 'Флаг Чехии'
      },
    ],
    tags: ['#бургер', '#бар', '#футбол', '#концерт', '#крафт'],
    transport: ['plane', 'auto', 'walk'],
    level: 80,
    likes: [1, 2, 3, 4, 5],
    purpose: 'vacation',
    music: ['rap', 'techno', 'pop'],
  },
  {
    id: 14,
    name: 'Марк Смолов',
    age: 62,
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    countries: [
    {
        name: 'США',
        src: flagUSA,
        alt: 'Флаг США'
      },
      {
        name: 'Австралия',
        src: flagAus,
        alt: 'Флаг Австралии'
      },
      {
        name: 'Доминика',
        src: flagDominika,
        alt: 'Флаг Доминики'
      },
    ],
    tags: ['#рэп', '#тату', '#хайпбист', '#кроссовки', '#суприм'],
    transport: ['plane', 'bike'],
    level: 25,
    likes: [1],
    purpose: 'vacation',
    music: ['juzz', 'classic'],
  },
  {
    id: 15,
    name: 'Таня Фирсова',
    age: 57,
    avatarUrl: 'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    countries: [
      {
        name: 'Шри-ланка',
        src: flagSriLanka,
        alt: 'Флаг Шри-Ланки'
      },
      {
        name: 'Таиланд',
        src: flagThailand,
        alt: 'Флаг Таиланда'
      },
      {
        name: 'Сейшелы',
        src: flagSeychelles,
        alt: 'Флаг Сейшел'
      },
    ],
    tags: ['#ЗОЖ', '#ПП', '#Фитнес', '#пляж', '#авокадо', '#смузи'],
    transport: ['plane'],
    level: 99,
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    purpose: 'vacation',
    music: ['classic'],
  },
  {
    id: 16,
    name: 'Петя Демин',
    age: 20,
    avatarUrl: 'https://i.postimg.cc/HxKWKnjy/harps-joseph-unsplash.jpg',
    countries: [
      {
        name: 'Бельгия',
        src: flagBelgium,
        alt: 'Флаг Бельгии'
      },
      {
        name: 'Чехия',
        src: flagCzech,
        alt: 'Флаг Чехии'
      },
    ],
    tags: ['#бургер', '#бар', '#футбол', '#концерт', '#крафт'],
    transport: ['plane', 'auto', 'walk'],
    level: 80,
    likes: [1, 2, 3, 4, 5],
    purpose: 'vacation',
    music: ['rap', 'pop'],
  },
  {
    id: 17,
    name: 'Марк Смолов',
    age: 36,
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    countries: [
    {
        name: 'США',
        src: flagUSA,
        alt: 'Флаг США'
      },
      {
        name: 'Австралия',
        src: flagAus,
        alt: 'Флаг Австралии'
      },
      {
        name: 'Доминика',
        src: flagDominika,
        alt: 'Флаг Доминики'
      },
    ],
    tags: ['#рэп', '#тату', '#хайпбист', '#кроссовки', '#суприм'],
    transport: ['plane', 'bike'],
    level: 25,
    likes: [1],
    purpose: 'work',
    music: [],
  },
  {
    id: 18,
    name: 'Петя Демин',
    age: 25,
    avatarUrl: 'https://i.postimg.cc/HxKWKnjy/harps-joseph-unsplash.jpg',
    countries: [
      {
        name: 'Бельгия',
        src: flagBelgium,
        alt: 'Флаг Бельгии'
      },
      {
        name: 'Чехия',
        src: flagCzech,
        alt: 'Флаг Чехии'
      },
    ],
    tags: ['#бургер', '#бар', '#футбол', '#концерт', '#крафт'],
    transport: ['plane', 'auto', 'walk'],
    level: 80,
    likes: [1, 2, 3, 4, 5],
    purpose: 'study',
    music: ['techno'],
  },
  {
    id: 19,
    name: 'Марк Смолов',
    age: 18,
    avatarUrl: 'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    countries: [
    {
        name: 'США',
        src: flagUSA,
        alt: 'Флаг США'
      },
      {
        name: 'Австралия',
        src: flagAus,
        alt: 'Флаг Австралии'
      },
      {
        name: 'Доминика',
        src: flagDominika,
        alt: 'Флаг Доминики'
      },
    ],
    tags: ['#рэп', '#тату', '#хайпбист', '#кроссовки', '#суприм'],
    transport: ['plane', 'bike'],
    level: 25,
    likes: [1],
    purpose: 'vacation',
    music: ['rap', 'pop', 'rock'],
  },
]);

// await useAsyncData('users', () => usersStore.fetchUsers());

</script>

<style lang="scss" scoped>
.companions__header {
  position: relative;
  z-index: 2;
}

.companions__container {
  display: grid;
  row-gap: 28px;
  width: $mobile-width;
  padding-top: 25px;
  padding-bottom: 45px;

  @media (min-width: $tablet-width) {
    width: $tablet-width;
    padding-top: 43px;
    padding-bottom: 62px;
  }

  @media (min-width: $desktop-width) {
    grid-template-columns: 1fr auto;
    column-gap: 85px;
    width: $desktop-width;
    padding-top: 50px;
    padding-bottom: 77px;
  }
}

.companions__user-filter {
  @media (min-width: $desktop-width) {
    order: 1;
    align-self: start;
  }
}
</style>