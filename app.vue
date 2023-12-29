<template>
  <div id="app">
    <MainHeader />
    <NuxtPage />
    <MainFooter />
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100%;
}
</style>
