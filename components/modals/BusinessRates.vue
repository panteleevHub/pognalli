<template>
  <section class="business-rates">
    <h2 class="business-rates__title section-title">Бизнес-тарифы</h2>
    <div class="business-rates__container container">
      <dl class="business-rates__list">
        <div v-for="rate in businessRates" class="business-rates__item">
          <dt>
            <NuxtLink to="/">{{ rate.rate }}</NuxtLink>
          </dt>
          <dd>{{ rate.price }} {{ rate.currency }}./{{ rate.unit }}</dd>
        </div>
        <div class="business-rates__item">
          <dt>
            <NuxtLink to="/">Ваш продакт-плейсмент</NuxtLink>
          </dt>
          <dd>Индивидуально</dd>
        </div>
      </dl>
    </div>
    <button @click="$emit('update:close', false)" class="business-rates__close" type="button">Закрыть окно</button>
  </section>
</template>

<script setup>
defineEmits(['update:close']);

const businessRates = [
  {
    id: 1,
    rate: 'Реклама у блоггера',
    price: 300000,
    currency: 'руб',
    unit: 'пост',
  },
  {
    id: 2,
    rate: 'Накрутка подписчиков',
    price: 1,
    currency: 'руб',
    unit: 'шт',
  },
  {
    id: 3,
    rate: 'Лайки от ботов',
    price: 20,
    currency: 'коп',
    unit: 'лайк',
  },
];
</script>

<style lang="scss" scoped>
.business-rates {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 270px;
  background-color: $white;
  padding-top: 35px;
  border-radius: 20px;
  box-shadow: 0px 2px 8px 0px rgba(29, 46, 91, 0.14);

  @media (min-width: $tablet-width) {
    width: 688px;
    padding-top: 55px;
    box-shadow: 0px 4px 22px 0px rgba(29, 46, 91, 0.18);
  }

  @media (min-width: $desktop-width) {
    width: 750px;
  } 
}

.business-rates__title {
  text-align: center;
  padding: 0 25px;
  margin-bottom: 30px;

  @media (min-width: $tablet-width) {
    padding: 0 90px;
    margin-bottom: 47px;
  }
}
.business-rates__container {
  @media (min-width: $tablet-width) {
    padding: 0 90px;
  }

  @media (min-width: $desktop-width) {
    padding: 0 60px;
  }
}

.business-rates__list {
  margin: 0;
  margin-bottom: 35px;

  @media (min-width: $tablet-width) {
    margin-bottom: 52px;
  }
}

.business-rates__item {
  position: relative;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  padding: 11px 0;

  @media (min-width: $tablet-width) {
    @include flex-base;
    column-gap: 30px;
    font-size: 22px;
    line-height: 28px;
    padding: 14px 0;
  }

  @media (min-width: $desktop-width) {
    column-gap: 50px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $black;
    opacity: 0.05;
  }

  &:last-of-type::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $black;
    opacity: 0.05; 
  }
}

.business-rates__item a {
  color: inherit;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

.business-rates__item dd {
  margin: 0;
}

.business-rates__close {
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: $basic-blue-light;
  background-color: $special-grey-light;
  padding: 20px;
  border: none;
  border-radius: 0 0 20px 20px;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    font-size: 24px;
    text-transform: none;
    padding: 40px;
  }

  @media (min-width: $desktop-width) {
    padding: 42px;
  }

  &:hover,
  &:focus {
    background-color: $basic-blue-pale;
  }

  &:active {
    color: rgba($basic-blue-light, 0.3);
  }
}
</style>