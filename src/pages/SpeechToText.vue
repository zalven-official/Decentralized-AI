<template>
  <Header
    header="Speech To Text"
    model-name="TranscribeX"
    description="Effortlessly transcribe spoken words into written text with TranscribeX, an advanced speech-to-text model that ensures high accuracy and efficiency."
  />
  <div class="p-3 mt-10 join">
    <button class="btn btn-active rounded-l-full">
      <MicrophoneIcon class="w-5 h-5 join-item" />
    </button>
    <select class="select select-primary w-full max-w-xs join-item">
      <option
        disabled
        selected
      >
        Select Microphone
      </option>
      <option>MACOS Mic default</option>
    </select>
  </div>
  <div class="grid grid-cols-2 items-center justify-center align-middle mt-5 card">
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
        <input
          class="input input-bordered join-item w-full rounded-l-full"
          placeholder="Record"
        >
        <button class="btn btn-outline btn-primary join-item rounded-l-full">
          <PauseCircleIcon class="h-7 w-7" />
          Pause
        </button>
        <button class="btn btn-outline btn-primary join-item rounded-r-full">
          <PlayCircleIcon class="h-7 w-7" />
          Record
        </button>
        <button class="btn btn-primary join-item rounded-r-full">
          <PlayCircleIcon class="h-7 w-7" />
          Transcribe
        </button>
      </div>
    </div>
    <div class="col-span-2 text-center">
      <div class="indicator mt-10 mb-4 group">
        <span class="indicator-item badge badge-primary">live</span> 
        <button class="btn btn-lg btn-circle btn-outline group-hover:btn-primary">
          <MicrophoneIcon class="w-10 h-10" />
        </button>
      </div>
      <p> Click for live Transcription</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import { PlayCircleIcon, LinkIcon, PauseCircleIcon, MicrophoneIcon, FolderIcon } from '@heroicons/vue/24/solid';
import { ref, computed } from 'vue';



const audioManager = () => {
  
};
</script>
