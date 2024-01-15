<template>
  <ul class="countries" :class="'countries--' + place">
    <li
      v-for="{name, src, alt} in countries"
      @mouseenter="activeTooltip = name"
      @mouseleave="activeTooltip = ''"
      class="countries__item"
    >
      <img :src="src" width="35" height="24" :alt="alt">
      <Transition>
        <Tooltip v-if="activeTooltip === name">{{ name }}</Tooltip>
      </Transition>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  countries: {
    type: Array,
    required: true
  },
  place: {
    type: String,
    required: true
  }
});

const activeTooltip = ref('');
</script>

<style lang="scss" scoped>
.countries {
  @include reset-list;
  display: flex;
  flex-wrap: wrap;
}

.countries__item {
  position: relative;
}

.countries--promo {
  gap: 10px 20px;
}

.countries--catalog img {
  @media (max-width: $pre-tablet-width) {
    width: 26px;
    height: 18px; 
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>