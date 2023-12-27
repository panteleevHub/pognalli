<template>
  <section class="map">
    <h2 class="visually-hidden">Карта</h2>
    <div class="map__location">
      <div class="map__location-decor">
        <div class="map__location-container container">
          <address class="map__address">ул. Большая Конюшенная, 19/8</address>
          <a class="map__route button" href="https://goo.gl/maps/gC63zF1KhysSKaoQA" target="_blank">Проложить маршрут</a>
        </div>
      </div>
    </div>
    <div class="map__image">
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac7c022697b2fcbbbaed5505fdf92d0ddecc2e80e4f407aa43a64befa7a948158&amp;source=constructor"></iframe>
      <!-- <div class="map__marker"></div> -->
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.map__location {
  position: relative;
  z-index: 2;
  background-color: transparent;
}

.map__location-decor {
  @include round-bottom;
  background-color: $basic-yellow;
}

.map__location-container {
  padding-top: 30px;
  padding-bottom: 35px;

  @media (min-width: $tablet-width) {
    padding: 48px 75px 84px;
  }

  @media (min-width: $desktop-width) {
    @include flex-base;
    padding: 55px 135px 55px 283px;
  }
}

.map__address {
  @include flex-base;
  position: relative;
  min-height: 45px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  color: $basic-blue-light;
  padding-left: 60px;
  padding-right: 30px;
  margin-bottom: 33px;

  @media (min-width: $tablet-width) {
    min-height: 68px;
    font-size: 28px;
    line-height: 28px;
    padding-left: 94px;
    margin-bottom: 44px;
  }

  @media (min-width: $desktop-width) {
    min-height: 90px;
    padding-left: 120px;
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 45px;
    background: $basic-blue url('@/assets/img/icon-location.svg') center no-repeat;
    border-radius: 50%;

    @media (min-width: $tablet-width) {
      width: 68px;
      height: 68px;
      background-size: 32px 32px;
    }

    @media (min-width: $desktop-width) {
      width: 90px;
      height: 90px;
      background-size: 42px 42px;
    }
  }
}

.map__route {
  outline: 3px solid $special-blue;
  outline-offset: -3px;

  @media (min-width: $tablet-width) {
    padding-left: 37px;
  }

  &:hover,
  &:focus {
    color: $white;
    background-color: $special-blue;
  }

  &:active {
    color: rgba($white, 0.3);
  }
}
.map__image {
  position: relative;
  top: -30px;
  z-index: 1;
  width: 100%;
  height: 310px;
  margin-bottom: -60px;

  @media (min-width: $tablet-width) {
    height: 570px;
    top: -40px;
    margin-bottom: -80px;
  }

  @media (min-width: $desktop-width) {
    height: 500px;
  }
}

.map__image iframe {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: 5;
}
</style>