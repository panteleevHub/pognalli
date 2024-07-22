<template>
  <section class="registration">
    <div class="registration__decor">
      <div class="registration__container container">
        <h2 class="visually-hidden">Регистрация на сайте</h2>
        <p class="registration__caption section-title">Заинтересовались?</p>
        <p class="registration__desc">
          <NuxtLink :to="APP_ROUTES.SignUp">Зарегистрируйтесь</NuxtLink>, <span>это быстро и бесплатно!</span> <span>Уже зарегистрированы?</span>
          Тогда скорее <NuxtLink :to="APP_ROUTES.Login">авторизуйтесь</NuxtLink>.</p>
        <div class="feedback">
          <p class="feedback__desc">Остались вопросы? <span>Мы с радостью на них ответим!</span></p>
          <Contacts place="registration" class="registration__contacts" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.registration {
  background-color: $basic-yellow;
}

.registration__decor {
  @include round-bottom;
  background-color: $special-blue;
}

.registration__container {
  @include flex-column-center;
  padding-top: 40px;
  padding-bottom: 30px;

  @media (min-width: $tablet-width) {
    padding: 75px 75px 60px;
  }

  @media (min-width: $desktop-width) {
    padding: 110px 130px 105px;
  }
}

.registration__caption {
  margin-bottom: 20px;
 
  @media (min-width: $tablet-width) {
    margin-bottom: 60px;
  }
}

.registration__desc {
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  color: $white;
  text-align: center;
  padding: 0 30px;
  margin-top: 0;
  margin-bottom: 30px;

  @media (min-width: $tablet-width) {
    max-width: 618px;
    font-size: 28px;
    line-height: 32px;
    padding: 0;
    margin-bottom: 65px;
  }
}

.registration__desc span {
  white-space: nowrap;
}

.registration__desc a {
  text-decoration: underline;
  color: $basic-yellow;

  &:hover,
  &:focus {
    color: $special-orange;
  }

  &:active {
    opacity: 0.3;
  }
}

.feedback__desc {
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  letter-spacing: 0.16;
  text-align: center;
  color: $white;
  margin-top: 0;
  margin-bottom: 17px;

  @media (min-width: $tablet-width) {
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 40px;
  }
}

.feedback__desc span {
  white-space: nowrap;
}
</style>