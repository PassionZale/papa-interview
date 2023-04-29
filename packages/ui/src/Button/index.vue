<script setup>
import { computed } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const disabledCls = computed(() => {
  return props.disabled
    ? {
        'bg-blue-400': true,
        'cursor-not-allowed': true,
      }
    : {
        'bg-blue-700': true,
        'hover:bg-blue-800': true,
        'focus:ring-4': true,
        'focus:outline-none': true,
        'focus:ring-blue-300': true,
      };
});
</script>

<script>
export default {
  name: 'PapaButton',
};
</script>

<template>
  <button
    type="button"
    :disabled="props.disabled"
    class="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white"
    :class="disabledCls"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
