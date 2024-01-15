<template>
  <div class="level" :class="'level--' + place">
    <span class="level__count">{{ level }}</span>
    <span class="level__caption">level</span>
  </div>
</template>

<script setup>
const props = defineProps({
  level: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true
  }
});

const rotate = props.level >= 50 ? 50 : 0;
const levelColor = props.level >= 50 ? '#ff8d30' : props.color;

</script>

<style lang="scss" scoped>
.level {
  position: relative;
  width: 60px;
  height: 60px;
  background: linear-gradient(to right, transparent  50%, $special-orange 0);
  border-radius: 50%;

  &::before {
    content: "";
    display: block;
    height: 100%;
    margin-left: 50%;
    transform-origin: left;
    border-radius: 0 100% 100% 0/50%;
    background-color: v-bind(levelColor);
    transform: rotate(calc((v-bind(level) - v-bind(rotate)) * 0.01turn));
  }

  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    background-color: inherit;
    border-radius: 50%;
  }
}

.level--promo {
  color: $white;
  background-color: v-bind(color);
}

.level--catalog {
  color: $basic-blue-light;
  background-color: v-bind(color);
  
  @media (max-width: $pre-tablet-width) {
    padding: 0;
  }
}

.level__count {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
}

.level--catalog .level__count {
  @media (max-width: $pre-tablet-width) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.level__caption {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  text-decoration: overline;
}

.level--catalog .level__caption {
  @media (max-width: $pre-tablet-width) {
    display: none;
  }
}
</style>