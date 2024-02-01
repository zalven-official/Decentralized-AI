import { MessageType } from '@/types';
import type {
  DTOResponse,
  DTOModelMessageStart,
  DTOModelMessageEnd,
  DTOModelMessageProcessing,
  DTOModelMessageLoaded,
  DTOModelMessageError
} from '@/types'

export const Messenger = (messageType: MessageType, data: DTOResponse) => {
  let message: DTOResponse | null = null;
  data.messageType = messageType
  try {
    switch (messageType) {
      case MessageType.MODEL_MESSAGE_START:
        message = modelMessageStart(data)
        break;
      case MessageType.MODEL_MESSAGE_END:
        message = modelMessageEnd(data)
        break;
      case MessageType.MODEL_PROCESSING:
        message = modelMessageProcessing(data)
        break;
      case MessageType.MODEL_LOADED:
        message = modelMessageLoaded(data)
        break;
    }
    message ?? self.postMessage(message)
  } catch (error) {
    modelMessageError(data)
  }
}

const modelMessageStart = (data: DTOResponse): DTOModelMessageStart => {
  console.log('modelMessageStart', data)
  return data
}

const modelMessageEnd = (data: DTOResponse): DTOModelMessageEnd => {
  console.log('modelMessageEnd', data)
  return data
}

const modelMessageProcessing = (data: DTOResponse): DTOModelMessageProcessing => {
  console.log('modelMessageProcessing', data)
  return data
}

const modelMessageLoaded = (data: DTOResponse): DTOModelMessageLoaded => {
  console.log('modelMessageLoaded', data)
  return data
}

const modelMessageError = (data: DTOResponse): DTOModelMessageError => {
  console.log('modelMessageError', data)
  return data
}