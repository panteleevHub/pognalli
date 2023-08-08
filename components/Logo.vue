<template>
  <img
    v-if="!isMenuOpened"
    class="logo logo--white"
    src="@/assets/img/logo-pognali-white-mobile.png"
    width="96"
    height="12"
    alt="Логотип сайта &laquo;Погнали&raquo;"
  >
  <img
    v-else
    class="logo logo--blue"
    src="@/assets/img/logo-pognali-blue-mobile.png"
    width="96"
    height="12"
    alt="Логотип сайта &laquo;Погнали&raquo;"
  >
</template>

<script setup>
const { isMenuOpened } = defineProps({
  isMenuOpened: {
    type: Boolean,
    required: false
  },
});
</script>

<style lang="scss" scoped>

</style>