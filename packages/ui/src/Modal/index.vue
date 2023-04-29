<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: undefined
  },

  subTitle: {
    type: String,
    default: undefined
  }
})
</script>

<script>
export default {
  name: "PapaModal"
}
</script>

<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" :class="{ hidden: !props.visible }">
    <div class="relative top-20 mx-auto p-5 border w-72 sm:w-96 shadow-lg rounded-md bg-white">
      <div class="mt-3 text-center">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
          <svg
            class="h-6 w-6 text-red-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round" 
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
            />
          </svg>
        </div>
        <h3 class="mt-2 text-lg leading-6 font-medium text-gray-900">{{ props.title }}</h3>
        <div class="mt-2 px-7 py-3">
          <p class="text-sm text-gray-500">
            {{ props.subTitle }}
          </p>
        </div>
        <div class="items-center px-4 py-3">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>