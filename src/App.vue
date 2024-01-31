<template>
  <div data-theme="dim">
    <Drawer />
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/common/Navbar.vue';
import Drawer from '@/components/common/Drawer.vue';
</script>
