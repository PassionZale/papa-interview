<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },

  row: {
    type: [String, Number],
    default: 6,
  },

  placeholder: {
    type: String,
    default: '请输入',
  },

  modelValue: {
    type: String,
    default: undefined,
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const { label, row, placeholder } = toRefs(props);
</script>

<script>
export default {
  name: 'PapaTextarea',
};
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <label
      v-show="label"
      class="mb-2 block text-sm font-medium text-gray-900"
      >{{ label }}</label
    >
    <textarea
      v-model="value"
      :row="row"
      :placeholder="placeholder"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    />

    <slot />
  </div>
</template>
