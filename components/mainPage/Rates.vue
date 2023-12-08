<template>
  <section class="rates">
    <div class="rates__container container">
      <h2 class="visually-hidden">Тарифы</h2>
      <p class="rates__caption section-title">Добавьте свой профиль</p>
      <ul class="rates__list">
        <li v-for="{id, rate, price, currency} in rates" class="rates__item">
          <NuxtLink class="rates__name" to="/">
            {{ rate }}
            <span class="rates__count">{{ id }}</span>
          </NuxtLink>
          <span>{{ price === 0 ? 'Бесплатно': `${price} ${currency}./мес`}}</span>
        </li>
      </ul>
      <NuxtLink class="rates__link" to="/">
        <span class="rates__link-icon"></span>
        Показать тарифы для бизнеса
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const rates = [
  {
    id: 1,
    rate: 'Базовое размещение',
    price: 0,
    currency: 'руб'
  },
  {
    id: 2,
    rate: 'Вывод на первых позициях',
    price: 99,
    currency: 'руб'
  },
  {
    id: 3,
    rate: 'Кастомный цвет карточки',
    price: 59,
    currency: 'руб'
  },
];
</script>

<style lang="scss" scoped>
.rates {
  background: url('@/assets/img/icon-rates.png') calc(100% - 25px) 38px no-repeat;

  @media (min-width: $tablet-width) {
    background-position: calc(100% - 85px) calc(100% - 45px);
  }

  @media (min-width: $desktop-width) {
    background-image: url('@/assets/img/icon-rates-desktop.png');
    background-position: calc(50% + 550px) calc(100% - 256px);
  }
}

.rates__container {
  padding: 38px 25px 38px 50px;

  @media (min-width: $tablet-width) {
    padding: 74px 40px 64px;
  }

  @media (min-width: $desktop-width) {
    padding: 107px 60px 165px;
  }
}

.rates__caption {
  min-height: 100px;
  padding: 16px 130px 12px 0;

  @media (min-width: $tablet-width) {
    min-height: auto;
    padding: 0;
    margin-bottom: 40px;
    text-align: center;
  }

  @media (min-width: $desktop-width) {
    margin-bottom: 100px;
  }
}

.rates__list {
  @include reset-list;
  padding: 30px 0;

  @media (min-width: $tablet-width) {
    padding-right: 35px;
  }

  @media (min-width: $desktop-width) {
    padding-right: 272px;
  }
}

.rates__item {
  @include flex-column;
  position: relative;
  font-size: 16px;
  line-height: 16px;
  font-weight: 300;
  padding-top: 4px;
  padding-bottom: 15px;

  @media (min-width: $tablet-width) {
    @include flex-base;
    flex-direction: row;
    column-gap: 50px;
    font-size: 28px;
    line-height: 28px;
    padding: 0;
  }

  @media (min-width: $desktop-width) {
    column-gap: 150px;
  }
}

.rates__item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 44px;
  height: 1px;
  background-color: $light-grey;

  @media (min-width: $tablet-width) {
    left: 92px;
    right: 0;
  }
}

.rates__item:last-child::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 44px;
  height: 1px;
  background-color: $light-grey;

  @media (min-width: $tablet-width) {
    left: 92px;
    right: 0;
  }
}

.rates__name {
  @include flex-base;
  column-gap: 22px;
  color: inherit;

  @media (min-width: $tablet-width) {
    flex-direction: row-reverse;
  }
}

.rates__count {
  width: 34px;
  height: 34px;
  font-weight: 400;
  color: $white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: $tablet-width) {
    width: 68px;
    height: 68px;
    font-size: 28px;
    line-height: 28px;
  }
}

.rates__item:nth-child(3n+1) .rates__count {
  background-color: $special-orange;
}

.rates__item:nth-child(3n+2) .rates__count {
  background-color: $special-yellow-dark;
}

.rates__item:nth-child(3n+3) .rates__count {
  background-color: $basic-yellow;
}

.rates__link {
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: $blue;

  @media (min-width: $tablet-width) {
    display: flex;
    align-items: center;
    column-gap: 20px;
    max-width: 500px;
    font-size: 20px;
    line-height: 20px;
  }
}

.rates__link-icon {
  display: none;

  @media (min-width: $tablet-width) {
    display: block;
    width: 68px;
    height: 68px;
    background: $light-grey url('@/assets/img/icon-businessman.svg') center no-repeat;
    border-radius: 50%;
  }
}
</style>