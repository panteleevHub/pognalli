<template>
  <section class="registration container">
    <h1 class="registration__title title">Регистрация</h1>
    <form @submit.prevent="onFormSubmit" class="registration__form" novalidate>
      <div class="registration__inputs">
        <div>
          <input v-model="formData.firstName" type="text" placeholder="Имя">
          <div v-for="error of v$.firstName.$errors">
            <span class="registration__error">{{ error.$message }}</span>
          </div>
        </div>
        <div>
          <input v-model="formData.lastName" type="text" placeholder="Фамилия">
          <div v-for="error of v$.lastName.$errors">
            <span class="registration__error">{{ error.$message }}</span>
          </div>
        </div>
        <div>
          <input v-model="formData.email" type="email" placeholder="Email">
          <div v-for="error of v$.email.$errors">
            <span class="registration__error">{{ error.$message }}</span>
          </div>
        </div>
        <div>
          <input v-model="formData.password" type="password" placeholder="Пароль">
          <div v-for="error of v$.password.$errors">
            <span class="registration__error">{{ error.$message }}</span>
          </div>
        </div>
      </div>
      <button :disabled="isLoading" class="registration__submit button" type="submit">
        <span>Создать аккаунт</span>
      </button>
    </form>
    <NuxtLink :to="APP_ROUTES.Main" class="registration__home-link">На главную</NuxtLink>
  </section>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';

definePageMeta({
  layout: 'blank',
  middleware: 'guest',
});

const isLoading = ref(false);

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});

const passwordLength = ref(8);

const isEmailUnique = async (value) => {
  if (value === '') return true;

  const { data } = await useFetch(API_ROUTES.UniqueUser, {
    method: 'POST',
    body: { email: value },
  });

  return !data.value.email ? true : false;
};

const validationRules = computed(() => ({
  firstName: { required: helpers.withMessage('Заполните это поле', required) },
  lastName: { required: helpers.withMessage('Заполните это поле', required) },
  email: {
    required: helpers.withMessage('Заполните это поле', required),
    email: helpers.withMessage('Неверный формат email', email),
    isUnique: helpers.withMessage('Этот email уже занят', helpers.withAsync(isEmailUnique))
  },
  password: {
    required: helpers.withMessage('Заполните это поле', required),
    minLength: helpers.withMessage('Пароль должен состоять минимум из 8 символов', minLength(passwordLength.value)),
  },
}));

const v$ = useVuelidate(validationRules.value, formData.value);

const onFormSubmit = async () => {
  const isFormValid = await v$.value.$validate();

  if (!isFormValid) return;

  try {
    isLoading.value = true;

    const { error } = await useFetch(API_ROUTES.SignUp, {
      method: 'POST',
      body: formData.value,
    });

    if (error.value) {
      console.log(error.value.status)
      return;
    }

    navigateTo(APP_ROUTES.Login)

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

.registration__error {
  display: inline-block;
  padding: 5px;
  color: $red;
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