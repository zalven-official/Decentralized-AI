<template>
  <div class="join w-full">
    <input
      class="input join-item input-bordered w-full rounded-l-full"
      placeholder="Record"
    >
    <button
      v-if="recording"
      class="btn btn-outline btn-primary join-item rounded-l-full"
      @click="handleTogglePause"
    >
      <PlayIcon
        v-if="paused"
        class="h-7 w-7"
      />
      <PauseIcon
        v-else
        class="w-7 h-7"
      />
      Pause
    </button>
    <button
      class="btn btn-outline btn-primary join-item rounded-r-full"
      :class="{ 'btn-error': recording }"
      @click="handleToggleRecording"
    >
      <PlayCircleIcon
        v-if="!recording"
        class="h-7 w-7"
      />
      <StopCircleIcon
        v-else
        class="h-7 w-7"
      />
      {{ recording ? 'Stop' : 'Record' }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { PlayCircleIcon, StopCircleIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const paused = ref(false);
const pauseRecording = () => {};
const resumeRecoring = () => {};
const handleTogglePause = () => {
  try {
    if (!recording.value) return;
    if (!paused.value) {
      pauseRecording();
    } else {
      resumeRecoring();
    }
    paused.value = !paused.value;
  } catch (error) {
    console.error(error);
  }
};

const recording = ref(false);
const stopRecording = () => {};
const startRecording = () => { };
const handleToggleRecording = () => {
  try {
    paused.value = false;
    if (recording.value) {
      stopRecording();
    } else {
      startRecording();
    }
    recording.value = !recording.value;
  } catch (error) {
    console.error(error);
  }
};
</script>
