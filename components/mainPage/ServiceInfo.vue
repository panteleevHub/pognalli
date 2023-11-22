<template>
  <section class="service-info">
    <div class="service-info__container container">
      <h2 class="service-info__title section-title">О сервисе</h2>
      <div class="service-info__text">
        <p class="service-info__desc">Любое путешествие веселее с попутчиками, которые на одной волне с тобой! Делитесь своими идеями путешествий и черпайте вдохновение в чужих.</p>
        <p class="service-info__excerpt">А если найдете кого-то близкого по духу — <br class="service-info__break">скорее зовите в совместный трип!</p>
      </div>
      <a class="service-info__more button" href="#">Подробнее</a>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.service-info {
  background-image: url("@/assets/img/phone-screen-mobile.png"),
                    url("@/assets/img/rectangle.svg");
  background-position: center, calc(50% - 125px) top;
  background-size: auto, 140px 140px;
  background-color: $special-blue;
  background-repeat: no-repeat;

  @media (min-width: $tablet-width) {
    background-image: url("@/assets/img/phone-screen-tablet.png"),
                      url("@/assets/img/rectangle-tablet.svg");
    background-position: calc(50% + 188px) 40px, center top;
    background-size: auto, auto;
  }

  @media (min-width: $desktop-width) {
    background-image: url("@/assets/img/phone-screen-desktop.png"),
                      url("@/assets/img/rectangle.svg");
    background-position: calc(50% + 335px) -5px, calc(50% - 550px) -20px;
  }
}

.service-info__container {
  padding: 33px 60px 82px 50px;

  @media (min-width: $tablet-width) {
    padding: 40px 385px 90px 75px;
  }

  @media (min-width: $desktop-width) {
    padding: 42px 690px 163px 130px;
  }  
}

.service-info__title {
  margin-bottom: 20px;

  @media (min-width: $tablet-width) {
    margin-bottom: 40px;
  }

  @media (min-width: $desktop-width) {
    margin-bottom: 57px;
  }
}

.service-info__text {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: $white;

  @media (min-width: $tablet-width) {
    max-width: 310px;
    row-gap: 30px;
    margin-bottom: 52px;
  }

  @media (min-width: $desktop-width) {
    max-width: 620px;
    row-gap: 38px;
    margin-bottom: 85px;
  }
}

.service-info__desc {
  font-weight: 300;
  margin: 0;
  padding: 0;

  @media (min-width: $tablet-width) {
    font-size: 28px;
    line-height: 33px;
  }
}

.service-info__excerpt {
  font-weight: 700;
  margin: 0;
  padding: 0;

  @media (min-width: $tablet-width) {
    font-size: 21px;
    line-height: 25px;
  }
}

.service-info__break {
  display: none;
  
  @media (min-width: $desktop-width) {
    display: block;
  }
}

.service-info__more {
  display: none;

  @media (min-width: $tablet-width) {
    width: 276px;
    display: block;
  }
}
</style>