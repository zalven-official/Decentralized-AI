<template>
  <div>
    <div class="container mx-auto my-10 px-5 pb-5 text-center md:px-28">
      <p class="text-2xl">
        <span class="font-bold text-primary hover:text-secondary">Decentralized AI</span>
        Processing in JavaScript
      </p>
      <p class="p-0 text-sm font-thin sm:p-3">
        This project in the landscape of AI development by enabling seamless, local execution of powerful machine learning
        models directly within the browser, without the need for external API keys or endpoints. This open-source project
        harnesses the capabilities of ONNX (Open Neural Network Exchange), TensorFlow.js, Web Assembly to bring cutting-edge
        artificial intelligence to your fingertips.
      </p>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <router-link
          v-for="(value, key) in routes"
          :key="key"
          :to="value.path"
          class="group m-2 rounded-md border-b-2 border-primary bg-base-200 p-5 shadow-md hover:bg-base-300"
        >
          <p class="text-md flex content-center items-center justify-start font-bold group-hover:text-primary">
            <component :is="value.icon" class="mr-3 h-5 w-5" /> {{ value.name }}
          </p>
          <p class="m-2 text-xs font-thin group-hover:font-normal">
            {{ value.description }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { routes } from '@/router';
</script>
