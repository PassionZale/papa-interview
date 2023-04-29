<script setup>
import { PapaButton, PapaModal, PapaTextarea } from '@papaen/ui';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user';

const user = useUserStore();
const router = useRouter();

const { input, hasLogged } = storeToRefs(user);

const visible = ref(true);

const submited = ref(false);

const login = () => user.$patch((state) => (state.hasLogged = true));

const prev = () => router.back();

const submit = () => (submited.value = true);

onMounted(() => {
  if (!hasLogged.value && !input.value.stepA && !input.value.stepB) {
    router.replace('/');
  }
});
</script>

<script>
export default {
  name: 'PageStepC',
};
</script>

<template>
  <div v-if="hasLogged">
    <papa-textarea :model-value="input.stepA" label="Step A" />
    <papa-textarea :model-value="input.stepB" label="Step B">
      <p class="mt-5 flex justify-end gap-x-2">
        <papa-button @click="prev">PRE</papa-button>
        <papa-button @click="submit">SUBMIT</papa-button>
      </p>

      <div v-show="submited">
        <p class="mt-5">submit mock data:</p>
        <pre class="mt-5">{{ input }}</pre>
      </div>
    </papa-textarea>
  </div>

  <papa-modal
    v-else
    :visible="visible"
    title="Permission denied!"
    sub-title="Account has not been logged, Click button to login."
  >
    <papa-button
      class="bg-green-500 hover:bg-green-600 focus:ring-green-300"
      @click="login"
    >
      LOGIN
    </papa-button>
  </papa-modal>
</template>
