<template>
  <div class="text-center">
    <div class="group indicator mb-4 mt-10">
      <span class="badge indicator-item badge-primary">Live</span>
      <button
        class="btn btn-circle btn-outline btn-lg group-hover:btn-primary"
        :class="{'btn-primary': speaking}"
        @click="handleToggleSpeaker"
      >
        <MicrophoneIcon class="h-10 w-10" />
        <span
          v-if="speaking"
          className="absolute text-primary loading loading-ring loading-lg"
        />
      </button>
    </div>
    <br>
    <progress
      v-if="speaking"
      class="progress progress-primary w-56"
    />
  </div>
</template>
<script setup lang="ts">
import { MicrophoneIcon} from '@heroicons/vue/24/solid';
import { ref } from 'vue';


// Live transcription
const speaking = ref(false);
const startSpeaking = () => {};
const stopSpeaking = () =>{};
const handleToggleSpeaker = () => {
  try {
    if (speaking.value) {
      stopSpeaking();
    } else {
      startSpeaking();
    }
    speaking.value = !speaking.value;
  } catch (error) {
    console.error(error);
  }
};
</script>