<template>
  <ul class="socials" :class="'socials--' + place">
    <li class="socials__item socials__item--fb">
      <a href="#" target="_blank"><span class="visually-hidden">Фейсбук</span></a>
    </li>
    <li class="socials__item socials__item--vk">
      <a href="#" target="_blank"><span class="visually-hidden">Вконтакте</span></a>
    </li>
    <li class="socials__item socials__item--inst">
      <a href="#" target="_blank"><span class="visually-hidden">Инстаграм</span></a>
    </li>
  </ul>
</template>

<script setup>
const { place } = defineProps({
  place: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.socials {
  @include reset-list;
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;

  @media (min-width: $tablet-width) {
    width: 186px;
  }
}


.socials__item a {
  display: block;
  width: 45px;
  height: 45px;

  @media (min-width: $tablet-width) {
    width: 62px;
    height: 62px;
  }
}

.socials__item a {
  background: center no-repeat;
  border-radius: 50%;
}

.socials--footer .socials__item a {
  background-color: $basic-yellow;
}

.socials__item--fb a {
  background-image: url('@/assets/img/fb-icon-mobile.svg');

  @media (min-width: $tablet-width) {
    background-image: url('@/assets/img/fb-icon-tablet.svg');
  }
}

.socials__item--vk a {
  background-image: url('@/assets/img/vk-icon-mobile.svg');

  @media (min-width: $tablet-width) {
    background-image: url('@/assets/img/vk-icon-tablet.svg');
  }
}

.socials__item--inst a {
  background-image: url('@/assets/img/inst-icon-mobile.svg');

  @media (min-width: $tablet-width) {
    background-image: url('@/assets/img/inst-icon-tablet.svg');
  }
}
</style>