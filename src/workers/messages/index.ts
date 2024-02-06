import { BroadcastChannels, MessageChannels } from '@/types/index';
import * as  controller from '../controller';
import IndexDB from '../storage/index';


// PUSHER
export const broadcast = (broadcast: BroadcastChannels, value: any) => {
  self.postMessage({ broadcast, value });
};

// REST ARCHITECTURE
export const message = async (event: MessageEvent) => {
  const message = event.data?.message as MessageChannels;
  const value = await messageManager(event, message);
  self.postMessage(value);
};

export const messageManager = async (event: MessageEvent, message: MessageChannels) => {
  switch (message) {
    case MessageChannels.LOAD_ALL_MODELS:
      return await controller.LoadAllModels(event);
    case MessageChannels.LOAD_CHAT_BOT_MODEL:
      return await controller.LoadChatBotModel(event);
    case MessageChannels.LOAD_FACE_DETECTION_MODEL:
      return await controller.LoadFaceDetectionModel(event);
    case MessageChannels.LOAD_FACIAL_RECOGNITION_MODEL:
      return await controller.LoadFacialRecognitionModel(event);
    case MessageChannels.LOAD_FORECASTING_MODEL:
      return await controller.LoadForecastingModel(event);
    case MessageChannels.LOAD_IMAGE_TO_TEXT_MODEL:
      return await controller.LoadImageToTextModel(event);
    case MessageChannels.LOAD_PREDICTIVE_TEXT_MODEL:
      return await controller.LoadPredictiveTextModel(event);
    case MessageChannels.LOAD_OBJECT_DETECTION_MODEL:
      return await controller.LoadObjectDetectionModel(event);
    case MessageChannels.LOAD_SPEECH_RECOGNITION_MODEL:
      return await controller.LoadSpeechRecognitionModel(event);
    case MessageChannels.LOAD_SPEECH_TO_SPEECH_MODEL:
      return await controller.LoadSpeechToSpeechModel(event);
    case MessageChannels.LOAD_SPEECH_TO_TEXT_MODEL:
      return await controller.LoadSpeechToTextModel(event);
    case MessageChannels.LOAD_TEXT_TO_IMAGE_MODEL:
      return await controller.LoadTextToImageModel(event);
    case MessageChannels.LOAD_TEXT_TO_SPEECH_MODEL:
      return await controller.LoadTextToSpeechModel(event);
    case MessageChannels.LOAD_TEXT_TO_TEXT_MODEL:
      return await controller.LoadTextToTextModel(event);
    case MessageChannels.ERROR:
      return await controller.HandleError(event);
    default:
      // Handle unknown message type
      break;
  }
  return {};
};