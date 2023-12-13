<template>
  <section class="directions">
    <div class="directions__decor">
      <div class="directions__container container">
        <div class="directions__text">
          <h2 class="directions__title section-title">Направления</h2>
          <p class="directions__desc">Мы не продаем туры и ничего не рекламируем. Люди сами пишут о странах, куда хотели бы отправиться и чем можно там заняться.</p>
        </div>
        <ul class="directions__list">
          <li v-for="{country, users, flag, slogan, picture} in directions" class="directions__item">
            <figure class="photo-card">
              <picture class="photo-card__pic">
                <source media="(min-width: 768px)" :srcset="picture.desktop">
                <img
                  :src="picture.mobile"
                  width="270"
                  height="110"
                  :alt="picture.alt"
                >
              </picture>
              <picture class="photo-card__flag">
                <source media="(min-width: 768px)" :srcset="flag.desktop">
                <img
                  :src="flag.mobile"
                  width="35"
                  height="24"
                  :alt="flag.alt"
                >
              </picture>
              <figcaption class="photo-card__description">
                <span class="photo-card__name">{{ country }}</span>
                <span class="photo-card__users"><span class="photo-card__user-icon"></span>{{ users }}</span>
                <span class="photo-card__slogan">{{ slogan }}</span>
              </figcaption>
            </figure>
          </li>
        </ul>
        <NuxtLink class="directions__more button" to="/directions">Показать все</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import thailandFlagMobile from '@/assets/img/flag-thailand-mobile.png';
import thailandFlagDesktop from '@/assets/img/flag-thailand-desktop.png';
import franceFlagMobile from '@/assets/img/flag-france-mobile.png';
import franceFlagDesktop from '@/assets/img/flag-france-desktop.png';
import czechFlagMobile from '@/assets/img/flag-czech-mobile.png';
import czechFlagDesktop from '@/assets/img/flag-czech-desktop.png';
import thailandMobile from '@/assets/img/thailand-mobile.png';
import thailandDesktop from '@/assets/img/thailand-desktop.png';
import franceMobile from '@/assets/img/france-mobile.png';
import franceDesktop from '@/assets/img/france-desktop.png';
import czechMobile from '@/assets/img/czech-mobile.png';
import czechDesktop from '@/assets/img/czech-desktop.png';

const directions = [
  {
    id: 1,
    country: 'Таиланд',
    users: 18321,
    flag: {
      mobile: thailandFlagMobile,
      desktop: thailandFlagDesktop,
      alt: 'Флаг Таиланда'
    },
    slogan: 'Джунгли зовут!',
    picture: {
      mobile: thailandMobile,
      desktop: thailandDesktop,
      alt: 'Скалы в океане',
    }
  },
  {
    id: 2,
    country: 'Франция',
    users: 12518,
    flag: {
      mobile: franceFlagMobile,
      desktop: franceFlagDesktop,
      alt: 'Флаг Франции'
    },
    slogan: 'Трэ бьен, манифик!',
    picture: {
      mobile: franceMobile,
      desktop: franceDesktop,
      alt: 'Французкая улица'
    }
  },
  {
    id: 3,
    country: 'Чехия',
    users: 5326,
    flag: {
      mobile: czechFlagMobile,
      desktop: czechFlagDesktop,
      alt: 'Флаг Чехии'
    },
    slogan: 'Закоулки старой Европы',
    picture: {
      mobile: czechMobile,
      desktop: czechDesktop,
      alt: 'Теплоход на фоне чешского города'
    }
  },
];
</script>

<style lang="scss" scoped>
.directions {
  background-color: $special-blue;
}

.directions__decor {
  @include round-bottom;
  background-color: $basic-blue-pale;
}

.directions__container {
  @include flex-column-center;
  padding-top: 70px;
  padding-bottom: 35px;

  @media (min-width: $tablet-width) {
    padding-top: 73px;
    padding-bottom: 80px;
    background: url('@/assets/img/flags-back.png') calc(50% + 200px) 80px no-repeat;
  }

  @media (min-width: $desktop-width) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 100px;
    padding-top: 90px;
    padding-bottom: 138px;
    background-position: calc(100% - 60px) 88px;
  }
}

.directions__text {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0 25px;
  margin-bottom: 60px;

  @media (min-width: $tablet-width) {
    align-self: start;
    width: 400px;
    row-gap: 57px;
    padding: 0;
    padding-left: 35px;
    margin-bottom: 65px;
  }

  @media (min-width: $desktop-width) {
    width: 360px;
    padding: 0;
    padding-top: 76px;
    margin-bottom: 38px;
  }
}

.directions__title {
  margin: 0;
}

.directions__desc {
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  color: $special-grey;
  padding-right: 20px;
  margin: 0;

  @media (min-width: $tablet-width) {
    font-size: 28px;
    line-height: 33px;
  }

  @media (min-width: $desktop-width) {
    min-height: 225px;
  } 
}

.directions__list {
  @include reset-list;
  margin-bottom: 15px;

  @media (min-width: $tablet-width) {
    position: relative;
    @include flex-column;
    width: 100%;
    row-gap: 10px;
    padding: 38px 35px;
    margin-bottom: 8px;
  }

  @media (min-width: $desktop-width) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 705px;
    padding: 72px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

.directions__list::before {
  @media (min-width: $tablet-width) {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 141px;
    height: 141px;
    background-color: $light-grey;
    border-radius: 20px; 
  }
}

.directions__more {
  width: 270px;

  @media (min-width: $tablet-width) {
    width: 618px;
  }

  @media (min-width: $desktop-width) {
    grid-column: 2 / -1;
    width: 275px;
  }
}

.photo-card {
  position: relative;
  margin: 0;

  @media (min-width: $tablet-width) {
    display: grid;
    grid-template-columns: 1fr auto;
  }
}

.photo-card__pic {
  @media (min-width: $tablet-width) {
    order: 3;
    z-index: 2;
  }
}

.photo-card__pic img {
  @media (min-width: $tablet-width) {
    width: 186px;
    height: 140px;
  }
}

.photo-card__flag {
  position: absolute;
  top: 86px;
  left: 25px;
  z-index: 3;

  @media (min-width: $tablet-width) {
    top: 17px;
    left: auto;
    right: 150px;
  }

  @media (min-width: $desktop-width) {
    top: 23px;
  }
}

.photo-card__flag img {
  @media (min-width: $tablet-width) {
    width: 70px;
    height: 47px;
  }
}

.photo-card__description {
  position: relative;
  top: -10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2px;
  background-color: $white;
  border-radius: 10px;
  padding: 25px;

  @media (min-width: $tablet-width) {
    @include flex-column;
    row-gap: 5px;
    top: 0;
    left: 20px;
    padding: 30px;
    padding-bottom: 20px;
    margin-left: -20px;
  }

  @media (min-width: $desktop-width) {
    padding-top: 25px;
  }
}

.photo-card__name {
  font-size: 21px;
  line-height: 21px;
  font-weight: 700;
  color: $black;
}

.photo-card__slogan {
  grid-column: 1 / -1;
  line-height: 18px;
  font-weight: 500;
  color: $special-grey;
  opacity: 0.3;

  @media (min-width: $tablet-width) {
    margin-bottom: 12px;
  }

  @media (min-width: $desktop-width) {
    margin-bottom: 18px; 
  }
}

.photo-card__users {
  justify-self: end;
  display: flex;
  align-items: center;
  column-gap: 5px;
  line-height: 20px;
  font-weight: 500;
  color: $basic-blue;
  opacity: 0.3;

  @media (min-width: $tablet-width) {
    column-gap: 8px;
    order: 3;
  }
}

.photo-card__user-icon {
  width: 14px;
  height: 14px;
  background: url('@/assets/img/icon-user.svg') no-repeat;
  background-size: 14px 14px;

  @media (min-width: $tablet-width) {
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
  }
}
</style>