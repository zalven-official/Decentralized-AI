import { MessageChannels } from '@/types/index';
import * as controller from '../controller';

// REST ARCHITECTURE 1 WAY
export const messageManager = async (event: MessageEvent): Promise<Object> => {
  const message = event.data?.message as MessageChannels;
  switch (message) {
    case MessageChannels.LOAD_ALL_MODELS:
      return controller.LoadAllModels(event.data);
    case MessageChannels.LOAD_CHAT_BOT_MODEL:
      return controller.LoadChatBotModel(event.data);
    case MessageChannels.LOAD_FACE_DETECTION_MODEL:
      return controller.LoadFaceDetectionModel(event.data);
    case MessageChannels.LOAD_FACIAL_RECOGNITION_MODEL:
      return controller.LoadFacialRecognitionModel(event.data);
    case MessageChannels.LOAD_FORECASTING_MODEL:
      return controller.LoadForecastingModel(event.data);
    case MessageChannels.LOAD_IMAGE_TO_TEXT_MODEL:
      return controller.LoadImageToTextModel(event.data);
    case MessageChannels.LOAD_PREDICTIVE_TEXT_MODEL:
      return controller.LoadPredictiveTextModel(event.data);
    case MessageChannels.LOAD_OBJECT_DETECTION_MODEL:
      return controller.LoadObjectDetectionModel(event.data);
    case MessageChannels.LOAD_SPEECH_RECOGNITION_MODEL:
      return controller.LoadSpeechRecognitionModel(event.data);
    case MessageChannels.LOAD_SPEECH_TO_SPEECH_MODEL:
      return controller.LoadSpeechToSpeechModel(event.data);
    case MessageChannels.LOAD_SPEECH_TO_TEXT_MODEL:
      return controller.LoadSpeechToTextModel(event.data);
    case MessageChannels.LOAD_TEXT_TO_IMAGE_MODEL:
      return controller.LoadTextToImageModel(event.data);
    case MessageChannels.LOAD_TEXT_TO_SPEECH_MODEL:
      return controller.LoadTextToSpeechModel(event.data);
    case MessageChannels.LOAD_TEXT_TO_TEXT_MODEL:
      return controller.LoadTextToTextModel(event.data);
    case MessageChannels.ERROR:
      return controller.HandleError(event.data);
    default:
      // Handle unknown message type
      break;
  }
  return {};
};

// PUSHER