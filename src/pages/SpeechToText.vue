<template>
  <Header
    header="Speech To Text"
    model-name="TranscribeX"
    description="Effortlessly transcribe spoken words into written text with TranscribeX, an advanced speech-to-text model that ensures high accuracy and efficiency."
  />
  <div class="grid grid-cols-2 items-center justify-center align-middle mt-5 card">
    <div class="col p-3">
      <input
        type="file"
        class="file-input file-input-bordered file-input-primary w-full"
      >
    </div>
    <div class="w-full p-3">
      <div class="join w-full">
        <input
          class="input join-item input-bordered w-full"
          placeholder="audio file link"
        >
        <button class="btn btn-primary join-item rounded-r-full">
          <LinkIcon class="h-7 w-7" /> Link
        </button>
      </div>
    </div>
    <div class="col-span-2 p-3">
      <div class="join w-full">
        <input
          class="input input-bordered join-item w-full"
          placeholder="Email"
        >
        <button class="btn btn-outline btn-primary join-item rounded-l-full">
          <PauseCircleIcon class="h-7 w-7" />
          Pause
        </button>
        <button class="btn btn-primary join-item rounded-r-full">
          <PlayCircleIcon class="h-7 w-7" />
          Record
        </button>
      </div>
    </div>
    <div class="col-span-2 text-center">
      <div class="indicator m-10 group">
        <span class="indicator-item badge badge-primary">live</span> 
        <button class="btn btn-lg btn-circle btn-outline group-hover:btn-primary">
          <MicrophoneIcon class="w-10 h-10" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import { PlayCircleIcon, LinkIcon, PauseCircleIcon, MicrophoneIcon } from '@heroicons/vue/24/solid';
import { ref, computed } from 'vue';
import { useDevicesList } from '@vueuse/core';

const url = ref();
</script>
