<template>
  <Header
    header="Speech To Text"
    model-name="TranscribeX"
    description="Effortlessly transcribe spoken words into written text with TranscribeX, an advanced speech-to-text model that ensures high accuracy and efficiency."
  />
  <div class="join mt-10 p-3">
    <button class="btn btn-active rounded-l-full">
      <MicrophoneIcon class="join-item h-5 w-5" />
    </button>
    <select class="join-item select select-primary w-full max-w-xs">
      <option
        disabled
        selected
      >
        Select Microphone
      </option>
      <option>MACOS Mic default</option>
    </select>
  </div>
  <div class="card mt-5 grid grid-cols-2 items-center justify-center align-middle">
    <div class="col p-3">
      <div class="join w-full">
        <input
          type="file"
          class="file-input file-input-bordered w-full rounded-none rounded-l-full"
        >
        <button class="btn btn-primary join-item rounded-r-full">
          <FolderIcon class="h-6 w-6" /> Transcribe
        </button>
      </div>
    </div>
    <div class="w-full p-3">
      <div class="join w-full">
        <input
          class="input join-item input-bordered w-full"
          placeholder="audio file link"
        >
        <button class="btn btn-primary join-item rounded-r-full">
          <LinkIcon class="h-7 w-7" /> Transcribe
        </button>
      </div>
    </div>
    <div class="col-span-2 p-3">
      <div class="join w-full">
        <Recording />
        <button class="btn btn-primary join-item rounded-r-full">
          <PlayCircleIcon class="h-7 w-7" />
          Transcribe
        </button>
      </div>
    </div>
    <div class="col-span-2 text-center">
      <Speaking />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import Recording from '@/components/audio/Recording.vue';
import Speaking from '@/components/audio/Speaking.vue';
import { PlayCircleIcon, LinkIcon, MicrophoneIcon, FolderIcon } from '@heroicons/vue/24/solid';
import { ref, computed } from 'vue';


</script>
