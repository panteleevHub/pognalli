<template>
  <div class="range">
    <div class="range__slider">
      <div class="range__bar">
        <div class="range__selected-bar" :style="rangeBarStyle"></div>
      </div>
      <input
        @input="onMinLevelChange"
        :value="sliderValue.min"
        :min="minRange"
        :max="maxRange"
        :step="step"
        type="range"
      >
      <input
        @input="onMaxLevelChange"
        :value="sliderValue.max"
        :min="minRange"
        :max="maxRange"
        :step="step"
        type="range"
      >
    </div>
    <div class="range__inputs">
      <input
        @input="onMinLevelInput"
        :value="sliderValue.min"
        :min="minRange"
        :max="maxRange - step"
        type="number"
      >
      <input
        @input="onMaxLevelInput"
        :value="sliderValue.max"
        :min="minRange + step"
        :max="maxRange"
        type="number"
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  minRange: {
    type: Number,
    default: 1,
    required: true,
  },
  maxRange: {
    type: Number,
    default: 100,
    required: true,
  },
  step: {
    type: Number,
    default: 1,
    required: true,
  },
  value: {
    type: Object,
    default: {
      min: 1,
      max: 100,
    },
    required: true,
  },
  // maxValue: {
  //   type: Number,
  //   default: 100,
  //   required: true,
  // },
});

const emit = defineEmits([
  'update:value',
]);

const sliderValue = reactive({
  min: props.value.min,
  max: props.value.max,
});

watch(() => props.value, () => {
  sliderValue.min = props.value.min;
  sliderValue.max = props.value.max;
});

const rangeBarStyle = computed(() => {
  return {
    left: `${sliderValue.min / props.maxRange * 100}%`,
    right: `${100 - (sliderValue.max / props.maxRange * 100)}%`,
  };
});

const onMinLevelChange = ({target}) => {
  sliderValue.min = parseInt(target.value);
  emit('update:value', {...props.value, min: parseInt(target.value)});

  if (sliderValue.min >= sliderValue.max) {
    sliderValue.min = sliderValue.max - props.step;
    emit('update:value', {...props.value, min: sliderValue.max - props.step});
  }
};

const onMaxLevelChange = ({target}) => {
  sliderValue.max = parseInt(target.value);
  emit('update:value', {...props.value, max: parseInt(target.value)});

  if (sliderValue.max <= sliderValue.min) {
    sliderValue.max = sliderValue.min + props.step;
    emit('update:value', {...props.value, max: sliderValue.min + props.step});
  }
};

const onMinLevelInput = ({target}) => {
  if (!target.value) return;

  if (target.value < props.minRange || target.value >= sliderValue.max) {
    sliderValue.min = props.minRange;
    emit('update:value', {...props.value, min: props.minRange});
    return;
  };

  sliderValue.min = parseInt(target.value);
  emit('update:value', {...props.value, min: parseInt(target.value)});
};

const onMaxLevelInput = ({target}) => {
  if (!target.value) return;

  if (target.value > props.maxRange) {
    sliderValue.max = props.maxRange;
    emit('update:value', {...props.value, max: props.maxRange});
    return;
  };

  sliderValue.max = parseInt(target.value);
  emit('update:value', {...props.value, max: parseInt(target.value)});
};
</script>

<style lang="scss" scoped>
.range {
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: $tablet-width) and (max-width: $pre-desktop-width) {
    @include flex-base;
    flex-direction: row;
  }
}

.range__inputs {
  display: flex;
  margin-bottom: 20px;

  @media (min-width: $tablet-width) {
    margin: 0; 
  }

  @media (min-width: $desktop-width) {
    margin-bottom: 30px; 
  }
}

.range__inputs input {
  display: block;
  width: 115px;
  height: 35px;
  font-family: inherit;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-align: center;
  background-color: $white;
  color: $basic-blue-light;
  padding: 0 7px;
  border: 1px solid $basic-grey-light;
  outline: none;
  border-radius: 4px;

  @media (min-width: $tablet-width) {
    width: 75px;
    height: 46px;
    font-size: 20px;
    line-height: 20px;
    padding: 0 12px;
  }

  @media (min-width: $desktop-width) {
    width: 97px;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &::placeholder {
    letter-spacing: normal;
    color: rgba($basic-blue-light, 0.5);
  }
}

.range__inputs input:first-of-type {
  border-radius: 4px 0 0 4px;
}

.range__inputs input:last-of-type {
  border-radius: 0 4px 4px 0;
}

.range__slider {
  position: relative;
  width: 100%;
  height: 10px;

  @media (min-width: $tablet-width) {
    width: 280px;
    height: 13px;
  }

  @media (min-width: $desktop-width) {
    width: 100%;
  }
}

.range__bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  background-color: rgba($basic-blue-light, 0.2);

  @media (min-width: $tablet-width) {
    height: 3px; 
  }
}

.range__selected-bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  height: 2px;
  background-color: $basic-blue-light;

  @media (min-width: $tablet-width) {
    height: 3px; 
  }
}

.range__slider input[type="range"] {
  appearance: none;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  background-color: transparent;
  margin: 0;
  pointer-events: none;

  @media (min-width: $tablet-width) {
    height: 3px; 
  }
}

.range__slider input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 10px;
  height: 10px;
  background-color: $basic-blue-light;
  border-radius: 50%;
  pointer-events: all;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    width: 13px;
    height: 13px; 
  }
}

.range__slider input[type="range"]::-moz-range-thumb {
  box-sizing: border-box;
  appearance: none;
  width: 10px;
  height: 10px;
  background-color: $basic-blue-light;
  border-radius: 50%;
  pointer-events: all;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    width: 13px;
    height: 13px; 
  }
}

</style>