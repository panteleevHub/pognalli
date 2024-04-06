<template>
  <footer class="footer">
    <div class="footer__container container">
      <NuxtLink :to="APP_ROUTES.Main">
        <Logo :isInHeader="false" />
      </NuxtLink>
      <Socials place="footer" />
      <Copyright />
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 2;
  background-color: $white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  
  @media (min-width: $tablet-width) {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
}

.footer__container {
  @include flex-column-center;
  row-gap: 39px;
  padding-top: 37px;

  @media (min-width: $tablet-width) {
    flex-direction: row;
    justify-content: space-between;
    row-gap: 0;
    padding-top: 46px;
    padding-bottom: 32px;
  }

  @media (min-width: $desktop-width) {
    padding-top: 47px;
    padding-bottom: 43px;
  }
}
</style>