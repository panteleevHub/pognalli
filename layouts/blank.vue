<template>
  <div class="background">
    <slot /> 
  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.background {
  display: flex;
  align-items: center;
  min-height: 100%;
  background-color: $dark-blue;
}
</style>