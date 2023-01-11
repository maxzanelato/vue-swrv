<template>
  <div class="mt-3">
    <div v-if="!viewData && !error">Loading...</div>
    <div v-else>
      <h2 v-if="viewData && viewData.title">
        <strong>Post {{ page }}: {{ viewData.title }}</strong>
      </h2>

      <pre class="mt-5">
        <div v-if="error">{{ error }}</div>
        <div v-if="viewData">
          <em>By user {{ viewData.userId }}</em>
          <div>{{ viewData.body }}</div>
        </div>
      </pre>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import useSWRV from 'swrv';

import fetcher from '@/utils/fetcher';

const route = useRoute();

const viewData = ref(undefined);
const page = computed(() => route.params.id);

const { data, error, isValidating } = useSWRV(
  () => page.value,
  fetcher
);

watch(page, () => {
  viewData.value = undefined;
});
watch(data, (newValue) => {
  viewData.value = newValue;
});
</script>
