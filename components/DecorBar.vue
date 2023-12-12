<template>
  <div class="bar"></div>
</template>

<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 37px;
  border-radius: 0 0 30px 30px;

  @media (min-width: $tablet-width) {
    height: 46px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  @media (min-width: $desktop-width) {
    height: 49px;
  }
}
</style>