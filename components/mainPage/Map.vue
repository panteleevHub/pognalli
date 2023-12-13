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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036257197802!2d30.32047247674327!3d59.938719162094195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTE4Ng!5e0!3m2!1sru!2sby!4v1702287158701!5m2!1sru!2sby" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <!-- <div class="map__marker"></div> -->
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.map__location {
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
}

.map__address::before {
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

.map__route {
  outline: 3px solid $special-blue;
  outline-offset: -3px;

  @media (min-width: $tablet-width) {
    padding-left: 37px;
  }
}
.map__image {
  position: relative;
  top: -30px;
  z-index: -1;
  height: 310px;
  margin-bottom: -60px;

  @media (min-width: $tablet-width) {
    height: 570px;
    top: -40px;
    margin-bottom: -80px;
  }

  @media (min-width: $tablet-width) {
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