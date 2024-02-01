import { ref } from 'vue';
import { defineStore } from 'pinia';
import { MessageType, SpeechToTextModels, } from '@/types';
import type { ModelLoader, DTOResponse } from '@/types'
import { messageStore } from './message.store';

export const modelStore = defineStore('model', () => {
  const worker = ref()
  const message = messageStore()
  const createWorker = async () => {
    worker.value = new Worker(new URL('../models/index.ts', import.meta.url), { type: "module" })
    worker.value.addEventListener("message", messengerManager)
    const message: ModelLoader = {
      SpeechToText: {
        model: SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN,
        quantized: true
      }
    }
    worker.value.postMessage(message);
  }


  const messengerManager = (event: MessageEvent) => {
    const data: DTOResponse = event.data;
    switch (data.messageType) {
      case MessageType.MODEL_MESSAGE_START:
        message.modelMessageStart(data)
        break;
      case MessageType.MODEL_MESSAGE_END:
        message.modelMessageEnd(data)
        break;
      case MessageType.MODEL_PROCESSING:
        message.modelMessageProcessing(data)
        break;
      case MessageType.MODEL_LOADED:
        message.modelMessageLoaded(data)
        break;
    }
  }

  return {
    createWorker
  };
});