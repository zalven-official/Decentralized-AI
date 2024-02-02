import { MessageType } from '@/types/index'
import * as controller from '../controller'

// REST ARCHITECTURE 1 WAY
export default async (event: MessageEvent) => {
  const messageType = event.data?.messageType as MessageType
  switch (messageType) {
    case MessageType.LOAD_ALL_MODELS:
      return controller.LoadAllModels(event.data);
    case MessageType.LOAD_CHAT_BOT_MODEL:
      return controller.LoadChatBotModel(event.data);
    case MessageType.LOAD_FACE_DETECTION_MODEL:
      return controller.LoadFaceDetectionModel(event.data);
    case MessageType.LOAD_FACIAL_RECOGNITION_MODEL:
      return controller.LoadFacialRecognitionModel(event.data);
    case MessageType.LOAD_FORECASTING_MODEL:
      return controller.LoadForecastingModel(event.data);
    case MessageType.LOAD_IMAGE_TO_TEXT_MODEL:
      return controller.LoadImageToTextModel(event.data);
    case MessageType.LOAD_PREDICTIVE_TEXT_MODEL:
      return controller.LoadPredictiveTextModel(event.data);
    case MessageType.LOAD_OBJECT_DETECTION_MODEL:
      return controller.LoadObjectDetectionModel(event.data);
    case MessageType.LOAD_SPEECH_RECOGNITION_MODEL:
      return controller.LoadSpeechRecognitionModel(event.data);
    case MessageType.LOAD_SPEECH_TO_SPEECH_MODEL:
      return controller.LoadSpeechToSpeechModel(event.data);
    case MessageType.LOAD_SPEECH_TO_TEXT_MODEL:
      return controller.LoadSpeechToTextModel(event.data);
    case MessageType.LOAD_TEXT_TO_IMAGE_MODEL:
      return controller.LoadTextToImageModel(event.data);
    case MessageType.LOAD_TEXT_TO_SPEECH_MODEL:
      return controller.LoadTextToSpeechModel(event.data);
    case MessageType.LOAD_TEXT_TO_TEXT_MODEL:
      return controller.LoadTextToTextModel(event.data);
    case MessageType.ERROR:
      return controller.HandleError(event.data);
    default:
      // Handle unknown message type
      break;
  }
}

// PUSHER