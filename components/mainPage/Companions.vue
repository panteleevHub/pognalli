<template>
  <section class="companions">
    <div class="companions__decor">
      <div class="companions__container container">
        <div class="companions__text">
          <h2 class="companions__title section-title">Попутчики</h2>
          <p class="companions__desc">Все мы индивидуальны и у каждого свой взгляд на идеальный отдых. Одному нужен пляж и коктейль, а другому маршрут для хайкинга.</p>
          <p class="companions__excerpt">Теперь можно легко<br class="companions__excerpt-break"> найти единомышленников!</p>
        </div>
        <ul class="companions__list">
          <li v-for="{id, name, avatarUrl, countries, tags, transport, level} in companions" class="companions__item">
            <img
              :src="avatarUrl"
              class="companions__avatar"
              width="270"
              height="270"
              alt="Аватар пользователя"
            >
            <UserLevel
              :level="level"
              place="promo"
              color="#444"
              class="companions__level"
            />
            <UserCountries :countries="countries" place="promo" class="companions__countries" />
            <div class="companions__user-info">
              <NuxtLink :to="'companions/' + id" class="companions__user-name">
                {{ name }}
              </NuxtLink>
              <p class="companions__tags">{{ tags.join(' ') }}</p>
              <TransportIcons :transport="transport" place="promo" />
            </div>
          </li>
        </ul>
        <NuxtLink class="companions__more button" to="/companions">Показать всех</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import flagCzech from '@/assets/img/flag-czech-mobile.png';
import flagSeychelles from '@/assets/img/flag-seychelles-mobile.png';
import flagSriLanka from '@/assets/img/flag-sri-lanka-mobile.png';
import flagThailand from '@/assets/img/flag-thailand-mobile.png';
import flagBelgium from '@/assets/img/flag-belgium-mobile.png';

const companions = [
  {
    id: 1,
    name: 'Таня Фирсова',
    avatarUrl: 'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    countries: [
      {
        name: 'Шри-Ланка',
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
  },
  {
    id: 2,
    name: 'Петя Демин',
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
  },
];
</script>

<style lang="scss" scoped>
.companions {
  background-color: $basic-blue-pale;
}

.companions__decor {
  @include round-bottom;
  position: relative;
  background-image: url('@/assets/img/smolov-back.png'),
                    url('@/assets/img/rogovaya-back.png');
  background-size: 143px 143px, 71px 71px;
  background-position: 85% 35px, -15px 312px;
  background-color: $special-blue;
  background-repeat: no-repeat;

  @media (min-width: $tablet-width) {
    background-size: 143px 143px, 285px 285px;
    background-position: 40px 426px, 85% 80px;
  }

  @media (min-width: $desktop-width) {
    background-position: calc(50% - 105px) 135px, calc(50% - 385px) calc(100% - 80px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 35px;
    left: -20px;
    width: 132px;
    height: 132px;
    border-radius: 10px;
    background-color: $special-dark-blue;
    z-index: 1;

    @media (min-width: $tablet-width) {
      width: 212px;
      height: 212px;
      border-radius: 20px;
      top: 70px;
      left: 40px;
    }

    @media (min-width: $desktop-width) {
      left: calc(50% - 655px);
    }
  }
}

.companions__container {
  @include flex-column-center;
  padding-top: 68px;
  padding-bottom: 30px;

  @media (min-width: $tablet-width) {
    padding: 140px 75px 87px;
  }

  @media (min-width: $desktop-width) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 130px 60px 135px 130px;
  }
}

.companions__text {
  position: relative;
  @include flex-column;
  row-gap: 22px;
  color: $white;
  padding: 0 30px 0 25px;
  margin-bottom: 55px;
  z-index: 2;

  @media (min-width: $tablet-width) {
    align-self: start;
    width: 430px;
    row-gap: 40px;
    padding: 0;
    margin-bottom: 60px;
  }
}

.companions__title {
  @media (min-width: $tablet-width) {
    margin-bottom: 15px; 
  }
}

.companions__desc {
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  margin: 0;

  @media (min-width: $tablet-width) {
    font-size: 28px;
    line-height: 33px;
  }
}

.companions__excerpt {
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  margin: 0;

  @media (min-width: $tablet-width) {
    font-size: 21px;
    line-height: 24px;
  }
}

.companions__excerpt-break {
  display: none;

  @media (min-width: $tablet-width) {
    display: block;
  }
}

.companions__list {
  @include reset-list;
  display: grid;
  row-gap: 10px;
  margin-bottom: 20px;

  @media (min-width: $tablet-width) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 50px;
    margin-bottom: 80px;
  }

  @media (min-width: $desktop-width) {
    grid-column: 2 / -1;
    grid-row: 1 / 3;
    column-gap: 55px;
    margin-bottom: 0;
    padding-top: 13px;
  }
}

.companions__item {
  position: relative;
  background-color: $white;
  border-radius: 12px;

  @media (min-width: $tablet-width) {
    border-radius: 20px;
  }
}

.companions__avatar {
  border-radius: 12px 12px 0 0;
  
  @media (min-width: $tablet-width) {
    width: 285px;
    height: 285px;
    border-radius: 20px 20px 0 0;
  }
}

.companions__level {
  position: absolute;
  top: 17px;
  left: 17px;
}

.companions__countries {
  position: relative;
  top: -12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: -12px;
}

.companions__user-info {
  @include flex-column-center;
  row-gap: 15px;
  background-color: $white;
  padding: 13px 25px 20px;
  border-radius: 0 0 12px 12px;

  @media (min-width: $tablet-width) {
    border-radius: 0 0 22px 22px;
  }
}

.companions__user-name {
  font-size: 21px;
  line-height: 21px;
  font-weight: 700;
  color: $basic-blue-light;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.3;
  }
}

.companions__tags {
  max-width: 200px;
  line-height: 18px;
  font-weight: normal;
  text-align: center;
  color: $special-grey;
  margin: 0;
}

.companions__more {
  width: 270px;

  @media (min-width: $tablet-width) {
    width: 618px;
  }

  @media (min-width: $desktop-width) {
    width: 280px;
  }
}
</style>