<template>
  <div className="drawer">
    <input id="main-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-side">
      <label htmlFor="main-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <router-link class="menu-title" to="/"> Decentralize AI </router-link>
        <li v-for="(value, key) in routes" :key="key" class="m-1">
          <router-link :to="value.path" class="p-3" :class="{ active: location.path.startsWith(value.path) }">
            <component :is="value.icon" class="h-5 w-5" />{{ value.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { routes } from '@/router';
import { useRoute } from 'vue-router';

const location = useRoute();
</script>
