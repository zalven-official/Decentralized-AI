import { ref } from 'vue';
import { defineStore } from 'pinia';
import { SpeechToTextModels, } from '@/types';
import type { ModelLoader } from '@/types'
import { messageStore } from './message.store';

export const modelStore = defineStore('model', () => {
  const worker = ref()
  const messenger = messageStore()

  const createWorker = async () => {
    worker.value = new Worker(new URL('../models/index.ts', import.meta.url), { type: "module" })
    worker.value.addEventListener("message", messenger.messengerManager)
    const message: ModelLoader = {
      SpeechToText: {
        model: SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN,
        quantized: true
      }
    }
    worker.value.postMessage(message);
  }


  return {
    createWorker
  };
});