<template>
  <footer class="footer border-t border-base-300 bg-base-200 px-10 py-4 text-base-content">
    <aside class="grid-flow-col items-center">
      <SparklesIcon class="h-6 w-6" />
      <p>©2023 GoTeam<br>AI Powered People Outsourcing + AI Technology</p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <a
          href="https://go.team/"
          target="_blank"
        ><GlobeAltIcon class="h-6 w-6" /></a>
        <a
          href="https://github.com/zalven-official/Decentralized-AI"
          target="_blank"
        ><CommandLineIcon class="h-6 w-6" /></a>
      </div>
    </nav>
  </footer>
</template>
<script setup lang="ts">
import { SparklesIcon, GlobeAltIcon, CommandLineIcon } from '@heroicons/vue/24/solid';
</script>
