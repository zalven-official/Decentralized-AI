<template>
  <div class="navbar bg-base-200 shadow-md">
    <div class="flex-none">
      <div className="drawer-content">
        <label
          htmlFor="main-drawer"
          class="btn"
        >
          <Bars3Icon class="h-6 w-6 text-primary" />
        </label>
      </div>
    </div>
    <div class="flex-1">
      <router-link
        class="btn btn-ghost text-xl"
        to="/"
      >
        Decentralize AI
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid';
</script>
