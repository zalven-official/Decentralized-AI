import { defineStore } from 'pinia';
import { MessageType } from '@/types'
import type {
  DTOModelMessageError,
  DTOResponse,
  DTOModelMessageStart,
  DTOModelMessageEnd,
  DTOModelMessageProcessing,
  DTOModelMessageLoaded,
} from '@/types'

export const messageStore = defineStore('message', () => {
  const messengerManager = (event: MessageEvent) => {
    const data: DTOResponse = event.data;
    switch (data.messageType) {
      case MessageType.MODEL_MESSAGE_START:
        modelMessageStart(data)
        break;
      case MessageType.MODEL_MESSAGE_END:
        modelMessageEnd(data)
        break;
      case MessageType.MODEL_PROCESSING:
        modelMessageProcessing(data)
        break;
      case MessageType.MODEL_LOADED:
        modelMessageLoaded(data)
        break;
      case MessageType.MODEL_ERROR:
        modelMessageError(data)
        break
    }
  }

  const modelMessageStart = (data: DTOModelMessageStart) => {
    console.log('modelMessageStart', data)
  }

  const modelMessageEnd = (data: DTOModelMessageEnd) => {
    console.log('modelMessageEnd', data)

  }

  const modelMessageProcessing = (data: DTOModelMessageProcessing) => {
    console.log('modelMessageProcessing', data)

  }

  const modelMessageLoaded = (data: DTOModelMessageLoaded) => {
    console.log('modelMessageLoaded', data)
  }

  const modelMessageError = (data: DTOModelMessageError) => {
    console.log('modelMessageError', data)
  }

  return { messengerManager };
});