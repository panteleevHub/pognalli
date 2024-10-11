<template>
  <div class="pagination">
    <div class="pagination__page-buttons">
      <button
        v-for="page in hiddenPages"
        @click="usersStore.changeCurrentPage(page.number)"
        class="pagination__page-button"
        :class="currentPage === page.number && 'pagination__page-button--active'"
        type="button"
      >
        {{ page.value }}
      </button>
    </div>
    <div class="pagination__arrow-buttons">
      <button
        @click="usersStore.changeCurrentPage(currentPage - 1)"
        class="pagination__arrow-button pagination__arrow-button--prev"
        type="button"
        :disabled="currentPage === 1"
      >
      </button>
      <button
        @click="usersStore.changeCurrentPage(currentPage + 1)"
        class="pagination__arrow-button pagination__arrow-button--next"
        type="button"
        :disabled="currentPage === pages"
      >
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pages: {
    type: Number,
    default: 0,
    required: true,
  }
});

const usersStore = useUsersStore();
const { currentPage } = storeToRefs(usersStore);

const windowWidth = ref(0);

const hiddenPages = computed(() => {
  const pageList = Array.from({length: props.pages}, (_, i) => ({ value: String(i + 1), number: i + 1 }));
  const firstPart = pageList.slice(0, currentPage.value - 1);
  const lastPart = pageList.slice(currentPage.value, props.pages);

  const visiblePages = windowWidth.value < SCREEN_WIDTH.Tablet ? 2 : 3;

  if (firstPart.length - visiblePages > 1) {
    firstPart.splice(1, firstPart.length - visiblePages, { value: '...', number: firstPart.length - (visiblePages - 1) });
  }

  if (lastPart.length - visiblePages > 1) {
    lastPart.splice(visiblePages - 1, lastPart.length - visiblePages, { value: '...', number: lastPart[visiblePages - 1].number });
  }

  return [...firstPart, { value: String(currentPage.value), number: currentPage.value } , ...lastPart];
});

const onWindowWidthChange = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', onWindowWidthChange);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowWidthChange);
});

</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 30px;

  @media (min-width: $tablet-width) {
    @include flex-base;
    column-gap: 50px;
    background-color: $white;
    margin-top: 50px;
    padding: 25px 28px;
    border-radius: 20px;
  }

  @media (min-width: $desktop-width) {
    width: 950px;
    margin-top: 70px;
  }
}

.pagination__page-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: $tablet-width) {
    margin-bottom: 0;
  }
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

  @media (min-width: $tablet-width) {
    min-width: 50px;
    font-size: 20px;
    line-height: 20px;
    padding: 15px 0;
  }
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

  @media (min-width: $tablet-width) {
    column-gap: 27px;
    padding-right: 12px;
  }

  @media (min-width: $desktop-width) {
    column-gap: 30px;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: $basic-blue-pale;

    @media (min-width: $tablet-width) {
      display: none;
    }
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

  @media (min-width: $tablet-width) {
    width: 13px;
    height: 20px;
    background-size: 13px 20px;
  }

  &:disabled {
    opacity: 0.1;
    cursor: auto;
  }
}

.pagination__arrow-button--next {
  transform: rotate(180deg);
}
</style>