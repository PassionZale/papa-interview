<script setup>
import { PapaButton, PapaTextarea } from "@papaen/ui"
import { ref, unref } from 'vue';
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/user"

const user = useUserStore();
const router = useRouter();

const value = ref(user.input.stepA);

const next = () => {
  user.$patch(state => state.input.stepA = unref(value))

  router.push("/step-b")
}
</script>

<script>
export default {
  name: "PageStepA"
}
</script>

<template>
  <papa-textarea v-model="value" label="Your message" placeholder="your message...">
    <p class="mt-5 flex justify-end">
      <papa-button :disabled="!value" @click="next">next</papa-button>
    </p>
  </papa-textarea>
</template>