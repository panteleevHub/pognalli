<template>
  <div class="pagination">
    <div class="pagination__page-buttons">
      <button
        v-for="number in pages"
        @click="$emit('update:currentPage', number)"
        class="pagination__page-button"
        :class="currentPage === number && 'pagination__page-button--active'"
        type="button"
      >
        {{ number }}
      </button>
    </div>
    <div class="pagination__arrow-buttons">
      <button
        @click="$emit('update:currentPage', currentPage - 1)"
        class="pagination__arrow-button pagination__arrow-button--prev"
        type="button"
        :disabled="currentPage === 1"
      >
      </button>
      <button
        @click="$emit('update:currentPage', currentPage + 1)"
        class="pagination__arrow-button pagination__arrow-button--next"
        type="button"
        :disabled="currentPage === pages"
      >
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pages: {
    type: Number,
    default: 0,
    required: true,
  },
  currentPage: {
    type: Number,
    default: 1,
    required: true,
  }
});

defineEmits(['update:currentPage']);
</script>

<style lang="scss" scoped>
.pagination {
  padding-top: 30px;
}

.pagination__page-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.pagination__page-button {
  min-width: 35px;
  font-size: 17px;
  line-height: 17px;
  font-weight: 700;
  background-color: transparent;
  color: $basic-blue-light;
  padding: 9px 0;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
}

.pagination__page-button--active {
  background-color: $basic-yellow;
  cursor: auto;
}

.pagination__arrow-buttons {
  position: relative;
  display: flex;
  background-color: $white;
  border-radius: 20px;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: $basic-blue-pale;
  }
}

.pagination__arrow-button {
  height: 50px;
  flex-grow: 1;
  padding: 0;
  border: 0;
  background: transparent url('@/assets/img/icon-page-arrow.svg') center no-repeat;
  background-size: 10px 17px;
  cursor: pointer;

  &:disabled {
    opacity: 0.1;
    cursor: auto;
  }
}

.pagination__arrow-button--next {
  transform: rotate(180deg);
}
</style>