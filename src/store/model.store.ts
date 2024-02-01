import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type ModelLoader, SpeechToTextModels } from '@/types';


export const modelStore = defineStore('model', () => {

  const worker = ref()

  const createWorker = async () => {
    // Initialize worker
    worker.value = new Worker(new URL('../models/index.ts', import.meta.url), { type: "module" })
    worker.value.addEventListener("message", modelLoaderEventListener)

    const message: ModelLoader = {
      SpeechToText: {
        model: SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN,
        quantized: true
      }
    }
    // Load models one time
    worker.value.postMessage(message);
  }

  const modelLoaderEventListener = (data: any) => {
    console.log(data)
  }

  return {
    createWorker
  };
});