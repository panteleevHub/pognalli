<template>
  <section class="rates">
    <div class="rates__container container">
      <h2 class="visually-hidden">Тарифы</h2>
      <p class="rates__caption section-title">Добавьте свой профиль</p>
      <ul class="rates__list">
        <li v-for="{id, rate, price, currency} in rates" class="rates__item">
          <span class="rates__name">
            {{ rate }}
            <span class="rates__count">{{ id }}</span>
          </span>
          <span>{{ price === 0 ? 'Бесплатно': `${price} ${currency}./мес`}}</span>
        </li>
      </ul>
      <NuxtLink class="rates__link" to="/">Показать тарифы для бизнеса</NuxtLink>
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
}

.rates__container {
  padding: 38px 25px 38px 50px;
}

.rates__caption {
  min-height: 100px;
  padding: 16px 130px 12px 0;
}

.rates__list {
  @include reset-list;
  padding: 30px 0;
}

.rates__item {
  @include flex-column;
  position: relative;
  font-size: 16px;
  line-height: 16px;
  font-weight: 300;
  padding-top: 4px;
  padding-bottom: 15px;
}

.rates__item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 82%;
  height: 1px;
  background-color: $light-grey;
}

.rates__item:last-child::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 82%;
  height: 1px;
  background-color: $light-grey;
}

.rates__name {
  @include flex-base;
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
}
</style>