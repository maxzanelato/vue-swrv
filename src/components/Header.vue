<template>
  <div id="app">
    <div class="w-100">
      <div class="d-flex justify-content-center">
        <button
          class="mr-2"
          appearance="outline-primary"
          @click="prevPage"
          :disabled="currentPage.value <= 1"
        >
          Prev Page
        </button>
        <button
          class="mr-2"
          appearance="outline-primary"
          @click="nextPage"
        >
          Next Page
        </button>
      </div>
      <div class="ml-4">current page: {{ currentPage }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentPage = ref(Number(route.params.id) || 0);

const nextPage = () => {
  currentPage.value += 1;
  router.push(`${currentPage.value}`);
};

const prevPage = () => {
  currentPage.value -= 1;
  router.push(`${currentPage.value}`);
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
