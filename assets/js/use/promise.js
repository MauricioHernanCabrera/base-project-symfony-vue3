import { toRefs, reactive } from "vue";

export default function usePromise(fn) {
  const state = reactive({
    results: null,
    isLoading: false,
    error: null,
  });

  const createPromise = async (...args) => {
    state.isLoading = true;
    state.error = null;
    state.results = null;

    try {
      state.results = await fn(...args);
    } catch (error) {
      state.error = err;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(results, loading, error), createPromise };
}
