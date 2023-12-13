<template>
  <div class="copyright">
    <p class="copyright__caption">Разработано</p>
    <img src="@/assets/img/logo-htmlacademy.svg" width="27" height="34" alt="Логотип компании HTML Academy">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.copyright {
  @include flex-base;
  position: relative;
  width: 100%;
  padding: 15px 0 18px;

  @media (min-width: $tablet-width) {
    width: auto;
  }
}

.copyright__caption {
  font-size: 16px;
  line-height: 16px;
  padding: 0;
  margin: 0;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 20px;
    padding-right: 23px;
  }
}

.copyright::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: $light-grey;

  @media (min-width: $tablet-width) {
    display: none;
  }
}
</style>