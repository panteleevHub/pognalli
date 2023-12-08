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
}

.registration__form {
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: $tablet-width) {
    margin-bottom: 60px;
  }

  @media (min-width: $desktop-width) {
    margin-bottom: 70px;
  }
}

.registration__input {
  width: 100%;
  height: 62px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: $special-grey;
  background-color: $white;
  padding: 22px 25px;
  padding-right: 85px;
  border: 0;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: $special-grey;
    opacity: 0.3;
  }

  @media (min-width: $tablet-width) {
    height: 80px;
    font-size: 24px;
    line-height: 24px;
    padding: 28px 35px;
    padding-right: 115px;
    border-radius: 20px;
  }

  @media (min-width: $desktop-width) {
    width: 100%;
    padding-right: 360px;
  }
}

.registration__submit {
  position: absolute;
  right: 0;
  width: 60px;
  height: 62px;
  padding: 0;

  @media (min-width: $tablet-width) {
    width: 80px;
    height: 80px;
    border-radius: 0 20px 20px 0;
  }

  @media (min-width: $desktop-width) {
    width: 325px;
    padding: 28px 35px;
    padding-right: 65px;
  }
}

.registration__submit span {
  display: none;

  @media (min-width: $desktop-width) {
    display: flex;
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