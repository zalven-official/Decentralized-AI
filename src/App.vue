<template>
  <div data-theme="dim">
    <Drawer />
    <Navbar />
    <div class="flex min-h-screen w-full justify-center p-0 lg:p-10">
      <div class="w-full max-w-5xl">
        <button class="btn btn-primary" @click="model.LoadAllModels()"> Load All Models </button>
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// dependencies
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';

// components
import Navbar from '@/components/common/Navbar.vue';
import Drawer from '@/components/common/Drawer.vue';
import Footer from '@/components/common/Footer.vue';

// stores
import { workerStore } from '@/store/worker.store'
import { modelStore } from '@/store/model.store';

const worker = workerStore()
const model = modelStore()


onMounted(() => {
  worker.createWorker()
})

</script>
