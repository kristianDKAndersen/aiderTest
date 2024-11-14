<template>
  <main class="flex flex-col items-center sm:px-2 mx-auto h-full">
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    RouterView,
  },
  setup() {
    return {};
  },
};
</script>
