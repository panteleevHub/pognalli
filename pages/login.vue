<template>
  <section class="login container">
    <h1 class="login__title title">Авторизация</h1>
    <form @submit.prevent="onFormSubmit" class="login__form">
      <div class="login__inputs">
        <input v-model="formData.email" type="email" placeholder="Email">
        <input v-model="formData.password" class="login__input" type="password" placeholder="Пароль">
      </div>
      <button class="login__submit button" type="submit">
        <span>Войти</span>
      </button>
    </form>
    <div class="login__links">
      <NuxtLink :to="APP_ROUTES.SignUp" class="login__signup-link">Создать аккаунт</NuxtLink>
      <NuxtLink :to="APP_ROUTES.Main" class="login__home-link">На главную</NuxtLink>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'blank',
  middleware: 'guest'
});

const { signIn } = useAuth();

const formData = ref({
  email: '',
  password: '',
});

const onFormSubmit = async () => {
  try {
    await signIn('credentials', formData.value);
  } catch (err) {
    console.log(err);
  }
};

</script>

<style lang="scss" scoped>
.login {
  @include flex-column-center;
  padding: 25px;

  @media (min-width: $tablet-width) {
    padding: 40px;
  }

  @media (min-width: $desktop-width) {
    padding: 60px;
  }
}

.login__title {
  text-align: center;
  color: $special-orange;
  margin-bottom: 30px;

  @media (min-width: $tablet-width) {
    margin-bottom: 35px;
  }
}

.login__inputs {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 30px;

  @media (min-width: $tablet-width) {
    row-gap: 15px;
    margin-bottom: 35px;
  }
}

.login__inputs input {
  width: 100%;
  height: 60px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: $special-grey;
  background-color: $white;
  padding: 22px 25px;
  border: 0;
  border-radius: 10px;
  outline: none;

  @media (min-width: $tablet-width) {
    height: 80px;
    font-size: 24px;
    line-height: 24px;
    padding: 28px 35px;
    border-radius: 20px;
  }

  &::placeholder {
    color: rgba($special-grey, 0.3);
  }

  &:hover::placeholder {
    color: rgba($special-grey, 0.6);
  }

  &:focus {
    color: $white;
    background-color: transparent;
    outline: 4px solid $white;
    outline-offset: -4px;
  }

  &:focus::placeholder {
    color: $white;
  }
}

.login__submit {
  width: 100%;
  height: 60px;
  margin-bottom: 15px;

  &::before {
    display: none;
  }

  @media (min-width: $tablet-width) {
    height: 80px;
    margin-bottom: 25px;
  }
}

.login__links {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.login__signup-link,
.login__home-link {
  font-size: 17px;
  line-height: 17px;
  color: $white;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 20px;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
</style>