<template>
  <address class="contacts" :class="'contacts--' + place">
    <a class="contacts__item contacts__item--phone" href="tel:88005558628">8 800 555-86-28</a>
    <a class="contacts__item contacts__item--email" href="mailto:mail@htmlacademy.ru">mail@htmlacademy.ru</a>
  </address>
</template>

<script setup>
const { place } = defineProps({
  place: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.contacts__item {
  display: flex;
  min-height: 45px;
  padding-left: 60px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
  align-items: center;

  @media (min-width: $tablet-width) {
    min-height: 68px;
    font-size: 28px;
    line-height: 28px;
    padding-left: 90px;
  }
}

.contacts--header .contacts__item {
  color: $special-blue;
}

.contacts--registration .contacts__item {
  color: $basic-yellow;
}

.contacts__item--phone {
  background: 0 center url('@/assets/img/phone-icon.svg') no-repeat;

  @media (min-width: $tablet-width) {
    background-size: 68px 68px;
  }
}

.contacts__item--email {
  background: 0 center url('@/assets/img/mail-icon.svg') no-repeat;
  
  @media (min-width: $tablet-width) {
    background-size: 68px 68px;
  }
}

</style>