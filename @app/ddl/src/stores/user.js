import { acceptHMRUpdate, defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    input: {
      stepA: undefined,
      stepB: undefined,
    },
    hasLogged: false,
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
