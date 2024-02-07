<template>
  <div class="join p-3">
    <button
      class="btn btn-active rounded-l-full"
      @click="toggleMicrophone"
    >
      <StopCircleIcon
        v-if="!isMicrophoneEnabled"
        class="join-item h-5 w-5"
      />
      <MicrophoneIcon
        v-else
        class="join-item h-5 w-5"
      />
    </button>
    <select class="join-item select select-primary w-full max-w-xs">
      <option
        v-for="device in audioDevices"
        :key="device.deviceId"
        :value="device.deviceId"
      >
        {{ device.label }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { MicrophoneIcon, StopCircleIcon } from '@heroicons/vue/24/solid';

const audioDevices = ref<MediaDeviceInfo[]>([]);
const currentDeviceId = ref<string>('');
const isMicrophoneEnabled = ref<boolean>(false);
let stream: MediaStream | null = null;

onMounted(async () => {
  await updateAudioDevices();
});

async function updateAudioDevices() {
  await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  let devices = await navigator.mediaDevices.enumerateDevices();
  audioDevices.value = devices.filter((device) => device.kind === 'audioinput');
  console.log(audioDevices.value);
  if (audioDevices.value.length > 0 && !currentDeviceId.value) {
    currentDeviceId.value = audioDevices.value[0].deviceId;
  }
}

watchEffect(() => {

  if (isMicrophoneEnabled.value) {
    const constraints: MediaStreamConstraints = {
      audio: { deviceId: currentDeviceId.value ? { exact: currentDeviceId.value } : undefined }
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(gotStream)
      .catch(handleError);
  } else {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      stream = null;
    }
  }
});

async function toggleMicrophone() {
  isMicrophoneEnabled.value = !isMicrophoneEnabled.value;
}

function gotStream(mediaStream: MediaStream) {
  stream = mediaStream; // Keep the stream reference to disable later
  // Here you can also pass the stream to other components or attach it to an audio element
}

function handleError(error: any) {
  console.error('Error getting microphone', error);
}

</script>
