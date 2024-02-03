export enum MessageStatus {
  INITIALIZE = "initialize",
  INITIATE = "initiate",
  DOWNLOAD = "download",
  PROGRESS = "progress",
  DONE = "done",
  READ = "ready",
  COMPLETED = "completed",
  FAILED = "failed"
}


export enum MessageChannels {
  LOAD_ALL_MODELS = 'load-all-models',
  LOAD_CHAT_BOT_MODEL = 'load-chat-bot-model',
  LOAD_FACE_DETECTION_MODEL = 'load-face-detection-model',
  LOAD_FACIAL_RECOGNITION_MODEL = 'load-facial-recognition-model',
  LOAD_FORECASTING_MODEL = 'load-forecasting-model',
  LOAD_IMAGE_TO_TEXT_MODEL = 'load-image-to-text-model',
  LOAD_PREDICTIVE_TEXT_MODEL = 'load-predictive-text-model',
  LOAD_OBJECT_DETECTION_MODEL = 'load-object-detection-model',
  LOAD_SPEECH_RECOGNITION_MODEL = 'load-speech-recognition-model',
  LOAD_SPEECH_TO_SPEECH_MODEL = 'load-speech-to-speech-model',
  LOAD_SPEECH_TO_TEXT_MODEL = 'load-speech-to-text-model',
  LOAD_TEXT_TO_IMAGE_MODEL = 'load-text-to-image-model',
  LOAD_TEXT_TO_SPEECH_MODEL = 'load-text-to-speech-model',
  LOAD_TEXT_TO_TEXT_MODEL = 'load-text-to-text-model',
  ERROR = 'error'
}

export enum BroadcastChannels {
  MODEL_PROCESSING = "model-processing"
}