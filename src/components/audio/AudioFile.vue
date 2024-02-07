<template>
  <div class="join w-full">
    <input
      type="file"
      class="file-input file-input-bordered w-full rounded-none rounded-l-full"
    >
    <button class="btn btn-primary join-item rounded-r-full">
      <FolderIcon class="h-6 w-6" /> Transcribe
    </button>
  </div>
</template>
<script setup lang="ts">
import {  FolderIcon } from '@heroicons/vue/24/solid';

</script>