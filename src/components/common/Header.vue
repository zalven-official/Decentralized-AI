<template>
  <div class="flex rounded-md">
    <router-link
      to="/"
      class="hover:text-primary"
    >
      <ArrowUturnLeftIcon class="m-3 h-6 w-6" />
    </router-link>
    <div>
      <p class="text-3xl font-bold">
        {{ header }}
      </p>
      <p class="group hover:text-primary">
        <strong>Model:</strong> {{ modelName }}
      </p>
      <p class="max-w-md text-sm font-thin">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/solid';
defineProps({
  header: { type: String, required: true },
  modelName: { type: String, required: true },
  description: { type: String, required: true }
});
</script>
