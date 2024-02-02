import { ref } from 'vue';
import { defineStore } from 'pinia';
import { MessageType } from '../types/index'

import { messageStore } from './message.store';

export const modelStore = defineStore('model', () => {
  const worker = ref()
  const messenger = messageStore()

  const createWorker = async () => {
    worker.value = new Worker(new URL('../workers/index.ts', import.meta.url), { type: "module" })
    worker.value.addEventListener("message", messenger.messengerManager)
  }


  return {
    createWorker
  };
});