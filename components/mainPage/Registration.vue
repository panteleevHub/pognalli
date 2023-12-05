<template>
  <section class="registration">
    <div class="registration__container container">
      <h2 class="visually-hidden">Регистрация на сайте</h2>
      <p class="registration__caption section-title">Заинтересовались?</p>
      <p class="registration__desc">
        Зарегистрируйтесь, <span>это быстро и бесплатно!</span> <span>Уже зарегистрированы?</span>
        Тогда скорее <NuxtLink to="/login">авторизуйтесь</NuxtLink>.</p>
      <form class="registration__form" method="post" action="#">
        <input class="registration__input" type="email" placeholder="E-mail">
        <button class="registration__submit button" type="submit">
          <span>Регистрация</span>
        </button>
      </form>
      <div class="feedback">
        <p class="feedback__desc">Остались вопросы? <span>Мы с радостью на них ответим!</span></p>
        <Contacts place="registration" class="registration__contacts" />
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.registration {
  background-color: $special-blue;
}

.registration__container {
  @include flex-column-center;
  padding-top: 72px;
  padding-bottom: 30px;
}

.registration__caption {
  margin-top: 0;
  margin-bottom: 20px;
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
}

.registration__desc span {
  white-space: nowrap;
}

.registration__desc a {
  text-decoration: underline;
  color: $basic-yellow;
}

.registration__form {
  display: flex;
  margin-bottom: 30px;
}

.registration__input {
  width: 220px;
  height: 62px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: $special-grey;
  background-color: $white;
  padding: 22px 25px;
  padding-right: 35px;
  border: 0;
  outline: none;
  border-radius: 10px 0 0 10px;

  &::placeholder {
    color: $special-grey;
    opacity: 0.3;
  }
}

.registration__submit {
  position: relative;
  left: -10px;
  width: 60px;
  height: 62px;
  padding: 0;
  margin-right: -10px;
}

.registration__submit span {
  display: none;

  @media (min-width: $desktop-width) {
    display: inline;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    color: $basic-blue-light;
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
}

.feedback__desc span {
  white-space: nowrap;
}
</style>