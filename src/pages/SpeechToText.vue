<template>
  <Header
    header="Speech To Text"
    model-name="TranscribeX"
    description="Effortlessly transcribe spoken words into written text with TranscribeX, an advanced speech-to-text model that ensures high accuracy and efficiency."
  />
  <div class="mt-10">
    <MicChanger />
  </div>
  <div class="card mt-5 grid grid-cols-2 items-center justify-center align-middle">
    <div class="col p-3">
      <AudioFile />
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
import MicChanger from '@/components/audio/MicChanger.vue';
import AudioFile from '@/components/audio/AudioFile.vue';
import Recording from '@/components/audio/Recording.vue';
import Speaking from '@/components/audio/Speaking.vue';
import { PlayCircleIcon } from '@heroicons/vue/24/solid';
import { modelStore } from '@/store/model.store';


const transcribe = () => {

};


</script>
