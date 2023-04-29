<script setup>
import { PapaButton, PapaTextarea } from '@papaen/ui';
import { onMounted, ref, unref } from 'vue';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user';

const user = useUserStore();
const router = useRouter();

const value = ref(user.input.stepB);

const prev = () => router.back();

const next = () => {
  user.$patch((state) => (state.input.stepB = unref(value)));

  router.push('/step-c');
};

onMounted(() => {
  if (!user.input.stepA) {
    router.replace('/');
  }
});
</script>

<script>
export default {
  name: 'PageStepB',
};
</script>

<template>
  <papa-textarea
    v-model="value"
    label="Your message"
    placeholder="your message..."
  >
    <p class="mt-5 flex justify-end gap-x-2">
      <papa-button @click="prev">PRE</papa-button>
      <papa-button :disabled="!value" @click="next">NEXT</papa-button>
    </p>
  </papa-textarea>
</template>
