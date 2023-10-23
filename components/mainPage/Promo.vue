<template>
  <section class="promo">
    <div class="promo__container container">
      <h2 class="visually-hidden">Промо сайта</h2>
      <p class="promo__slogan title">В путешествие с крутыми попутчиками!</p>
      <UserNavigation :isFull="true" class="promo__user-nav" />
      <div class="promo__quote">
        <q>Лучшее приложение, что я видел в жизни!</q>
        <p class="promo__quote-author">Мурат Эльтазин главный редактор газеты «гаджетлайф»</p>
      </div>
    </div>
    <div class="promo__plan plan">
      <div class="container">
        <ol class="plan__list">
          <li class="plan__item">
            <div class="plan__item-wrapper">
              <span class="plan__name">Выберите направление</span>
              <span class="plan__number">1</span>              
            </div>
          </li>
          <li class="plan__item">
            <div class="plan__item-wrapper">
              <span class="plan__name">Изучите идеи путешественников</span>
              <span class="plan__number">2</span>             
            </div>
          </li>
          <li class="plan__item">
            <div class="plan__item-wrapper">
              <span class="plan__name">Находите тех, кто похож на вас</span>
              <span class="plan__number">3</span>            
            </div>
          </li>
          <li class="plan__item">
            <div class="plan__item-wrapper">
              <span class="plan__name">Путешествуйте вместе!</span>
              <span class="plan__number">4</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.promo {
  padding-top: 40px;
  background: $basic-blue url('@/assets/img/globe-back-desktop.png') center 105px no-repeat;
  background-size: 768px 320px;
}

.promo__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.promo__slogan {
  min-height: 300px;
  line-height: 40px;
  text-align: center;
  padding: 0 15px;
  margin: 0 0 45px;
}

.promo__user-nav {
  position: relative;
  top: 20px;
  
  @media (min-width: $tablet-width) {
    display: none;
  }
}

.promo__quote {
  min-width: 270px;
  padding: 48px 85px 109px 25px;
}

.promo__quote q {
  display: block;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  color: $white;
  margin-bottom: 18px;
}

.promo__quote-author {
  font-weight: 700;
  color: $white;
  padding: 0;
  margin: 0;
}

.plan {
  background-color: $special-blue;
}

.plan__list {
  @include reset-list;
  position: relative;
  top: -80px;
  margin-bottom: -40px;
}

.plan__item-wrapper {
  @include flex-base;
  column-gap: 30px;
  min-height: 80px;
  padding: 22px 20px 22px 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.plan__item:nth-child(4n+2),
.plan__item:nth-child(4n+1) .plan__item-wrapper {
  background-color: $special-orange;
}

.plan__item:nth-child(4n+3),
.plan__item:nth-child(4n+2) .plan__item-wrapper {
  background-color: $special-orange-light;
}

.plan__item:nth-child(4n+4),
.plan__item:nth-child(4n+3) .plan__item-wrapper {
  background-color: $special-yellow-dark;
}

.plan__item:nth-child(4n+5),
.plan__item:nth-child(4n+4) .plan__item-wrapper {
  background-color: $basic-yellow;
}

.plan__item:last-child,
.plan__item:last-child .plan__item-wrapper {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.plan__name {
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: $basic-blue;
}

.plan__number {
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: $white;
}
</style>