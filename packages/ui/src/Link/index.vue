<script>
export default {
  name: 'PapaLink',
};
</script>

<template>
  <a class="font-medium text-blue-600 hover:underline" v-bind="$attrs">
    <slot />
  </a>
</template>
