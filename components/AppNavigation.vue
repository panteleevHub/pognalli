<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <NuxtLink to="/">О сервисе</NuxtLink>
      </li>
      <li class="main-nav__item">
        <NuxtLink to="/directions">Направления</NuxtLink>
      </li>
      <li class="main-nav__item">
        <NuxtLink to="/companions">Попутчики</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-nav {
  padding: 50px 0;
}

.main-nav__list {
  @include reset-list;
  text-align: center;
}

.main-nav__list a {
  font-size: 30px;
  line-height: 35px;
  color: $special-blue;
}
</style>