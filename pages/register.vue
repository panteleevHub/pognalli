<template>
  <section class="registration container">
    <h1 class="registration__title title">Регистрация</h1>
    <form @submit.prevent="onFormSubmit" class="registration__form">
      <div class="registration__inputs">
        <input v-model="formData.firstName" type="text" placeholder="Имя">
        <input v-model="formData.lastName" type="text" placeholder="Фамилия">
        <input v-model="formData.email"  type="email" placeholder="Email">
        <input v-model="formData.password" type="password" placeholder="Пароль">
      </div>
      <button :disabled="isLoading" class="registration__submit button" type="submit">
        <span>Создать аккаунт</span>
      </button>
    </form>
    <NuxtLink :to="APP_ROUTES.Main" class="registration__home-link">На главную</NuxtLink>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
});

const isLoading = ref(false);

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});

const onFormSubmit = async () => {
  try {
    isLoading.value = true;

    await useFetch(API_ROUTES.SignUp, {
      method: 'POST',
      body: formData.value,
    });

    useRouter().push(APP_ROUTES.Login)

  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.registration {
  @include flex-column-center;
  padding: 25px;

  @media (min-width: $tablet-width) {
    padding: 40px;
  }

  @media (min-width: $desktop-width) {
    padding: 60px;
  }
}

.registration__title {
  text-align: center;
  color: $special-orange;
  margin-bottom: 30px;

  @media (min-width: $tablet-width) {
    margin-bottom: 35px;
  }
}
.registration__inputs {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 30px;

  @media (min-width: $tablet-width) {
    row-gap: 15px;
    margin-bottom: 35px;
  }
}

.registration__inputs input {
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

.registration__submit {
  width: 100%;
  height: 60px;
  margin-bottom: 15px;

  &::before {
    display: none;
  }

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  @media (min-width: $tablet-width) {
    height: 80px;
    margin-bottom: 25px;
  }
}

.registration__home-link {
  font-size: 17px;
  line-height: 17px;
  text-align: center;
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