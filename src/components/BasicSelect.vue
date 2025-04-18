<template>
  <div class="select-container">
    <select
      :value="selectedValue"
      v-bind="{
        ...$attrs,
        onClick: () => setSelectArrow('open'),
        onBlur: () => setSelectArrow('blur'),
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value)
        },
      }"
    >
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        :selected="option.value === modelValue"
      >
        {{ option.text }}
      </option>
    </select>

    <slot name="icon">
      <SelectArrowIcon :select-is-open="selectIsOpen" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import SelectArrowIcon from '@/components/icons/SelectArrowIcon.vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  defaultSelection: {
    type: String,
    required: false,
  },
  options: {
    type: Object,
    required: true,
  },
})

const selectIsOpen: Ref<boolean> = ref(false)

const selectedValue = computed(() => {
  //return props.defaultSelection ? props.defaultSelection : props.modelValue
  return props.modelValue ? props.modelValue : props.defaultSelection
})

function setSelectArrow(action: string) {
  switch (action) {
    case 'open':
      selectIsOpen.value = !selectIsOpen.value
      break
    case 'blur':
      selectIsOpen.value = false
      break
  }
}
</script>

<style lang="scss">
.select-container {
  position: relative;
  width: 100%;

  select.currency {
    width: 60px;
  }
  select.quantity {
    width: 85px;
  }

  svg {
    position: absolute;
    right: 4px;
    transform: translate(-100%, -50%);
    width: 10px;
    height: 8px;
    top: calc(50% + 1px);
    pointer-events: none;
  }
}

.select-container.price {
  min-width: 90px;
}

@media only screen and (min-width: 768px) {
  .select-container {
    max-width: 300px;
  }
}
</style>
