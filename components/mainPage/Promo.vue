<template>
  <section class="promo">
    <div class="promo__container container">
      <h2 class="visually-hidden">Промо сайта</h2>
      <p class="promo__slogan title">В путешествие<br> с крутыми попутчиками!</p>
      <UserNavigation :isFull="true" class="promo__user-nav" />
      <div class="promo__quote">
        <q>Лучшее приложение, что я видел в жизни!</q>
        <p class="promo__quote-author">Мурат Эльтазин<br> главный редактор газеты «гаджетлайф»</p>
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
              <span class="plan__name">Находите тех,<br> кто похож на вас</span>
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
  background: url('@/assets/img/traveller-illustration-mobile.png') 60% 170px no-repeat,
              url('@/assets/img/globe-back-mobile.jpg') center 105px no-repeat;
  background-size: 192px 255px, 768px 320px;
  background-color: $basic-blue;

  @media (min-width: $tablet-width) {
    padding-top: 30px;
    background-image: url('@/assets/img/traveller-illustration-tablet.png'),
                      url('@/assets/img/globe-back-desktop.jpg');
    background-position: 72% 275px, center 230px;
    background-size: 372px 451px, 1440px 750px;
    background-color: $dark-blue;
  }

  @media (min-width: $desktop-width) {
    padding-top: 110px;
    padding-bottom: 123px;
    background-image: url('@/assets/img/traveller-illustration-desktop.png'),
                      url('@/assets/img/globe-back-desktop.jpg');
    background-position: calc(50% + 85px) 10px, calc(50% - 200px) 0;
    background-size: 431px 640px, 1440px 750px;
  }
}

.promo__container {
  @include flex-column-center;

  @media (min-width: $desktop-width) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 100px;
  }
}

.promo__slogan {
  min-height: 300px;
  line-height: 40px;
  text-align: center;
  padding: 0 15px;
  margin: 0 0 45px;

  @media (min-width: $tablet-width) {
    min-height: auto;
    font-size: 60px;
    line-height: 70px;
    padding: 0 40px;
    margin-bottom: 86px; 
  }

  @media (min-width: $desktop-width) {
    width: 490px;
    text-align: left;
    padding: 0;
    padding-left: 67px;
    margin: 0;
  }
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

  @media (min-width: $tablet-width) {
    align-self: flex-start;
    min-height: 345px;
    max-width: 350px;
    padding: 0 25px;
    padding-right: 30px;
    margin-bottom: 192px;
  }

  @media (min-width: $desktop-width) {
    width: 287px;
    min-height: auto;
    margin: 0;
    padding: 0;
  }
}

.promo__quote q {
  display: block;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  color: $white;
  margin-bottom: 18px;

  @media (min-width: $tablet-width) {
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 45px;
  }
}

.promo__quote-author {
  font-weight: 700;
  color: $white;
  padding: 0;
  margin: 0;

  @media (min-width: $tablet-width) {
    font-size: 21px;
    line-height: 25px;
  }
}

.plan {
  background-color: $special-blue;

  @media (min-width: $desktop-width) {
   background-color: transparent; 
  }
}

.plan__list {
  @include reset-list;
  position: relative;
  top: -80px;
  margin-bottom: -40px;

  @media (min-width: $tablet-width) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    top: -140px;
    margin-bottom: -45px;
  }

  @media (min-width: $desktop-width) {
    position: static;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 0;
  }
}

.plan__item-wrapper {
  @include flex-base;
  column-gap: 30px;
  min-height: 80px;
  padding: 22px 20px 22px 25px;
  border-radius: 10px 10px 0 0;

  @media (min-width: $tablet-width) {
    @include flex-column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px 0;
    min-height: 140px;
    padding: 30px 33px;
    padding-right: 70px;
    padding-bottom: 0;
    border-radius: 0;
  }

  @media (min-width: $desktop-width) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0 15px;
    min-height: 107px;
    padding: 30px;
    padding-bottom: 0;
    border-radius: 20px 0 0 20px;
  }
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

.plan__item:first-child,
.plan__item:first-child .plan__item-wrapper {
  @media (min-width: $tablet-width) {
    border-radius: 20px 0 0 0;
  }

  @media (min-width: $desktop-width) {
    border-radius: 20px 0 0 20px;
  }
}

.plan__item:last-child {
  border-radius:  0 0 10px 10px;

  @media (min-width: $tablet-width) {
    border-radius: 0 0 20px 0;
  }

  @media (min-width: $desktop-width) {
    border-radius: 0 20px 20px 0;
  }
}

.plan__item:last-child .plan__item-wrapper {
  border-radius: 10px;

  @media (min-width: $tablet-width) {
    border-radius: 0 0 20px 20px;
  }

  @media (min-width: $desktop-width) {
    border-radius: 20px;
  }
}

.plan__item:nth-child(2) {
  @media (min-width: $tablet-width) {
    border-radius: 0px 20px 0 0;
  }

  @media (min-width: $desktop-width) {
    border-radius: 0 20px 0 0;
  }
}

.plan__item:nth-child(2) .plan__item-wrapper {
  @media (min-width: $tablet-width) {
    border-radius: 20px 20px 0 0;
  }

  @media (min-width: $desktop-width) {
    border-radius: 20px 0 0 20px;
  }
}

.plan__item:nth-last-child(2) {
  @media (min-width: $tablet-width) {
    border-radius: 0 0 0 20px;
  }

  @media (min-width: $desktop-width) {
    border-radius: 0 20px 20px 0;
  }
}

.plan__item:nth-last-child(2) .plan__item-wrapper {
  @media (min-width: $tablet-width) {
    border-radius: 0 0 0 20px;
  }

  @media (min-width: $desktop-width) {
    border-radius: 20px 0 0 20px;
  }
}

.plan__name {
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: $basic-blue;

  @media (min-width: $tablet-width) {
    font-size: 24px;
    line-height: 24px;
  }
}

.plan__number {
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: $white;

  @media (min-width: $tablet-width) {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>