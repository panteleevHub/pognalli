<template>
  <div class="tooltip">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.tooltip {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  line-height: 20px;
  color: $white;
  background-color: $basic-blue;
  padding: 15px 20px;
  padding-top: 13px;
  border-radius: 5px;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-bottom: 8px solid $basic-blue;
  }
}
</style>