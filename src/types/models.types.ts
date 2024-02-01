export enum ChatBotModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}
export enum FaceDetectionModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}
export enum FacialRecognitionModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum ForecastingModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}
export enum ImageToTextModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum ObjectDetectionModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum PredictiveTextModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum SpeechRecognitionModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum SpeechToSpeechModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum SpeechToTextModels {
  WHISPER_TINY_EN = 'openai/whisper-tiny.en',
  WHISPER_TINY = 'openai/whisper-tiny',
  WHISPER_BASE = 'openai/whisper-base',
  WHISPER_BASE_EN = 'openai/whisper-base.en',
  WHISPER_SMALL = 'openai/whisper-small',
  WHISPER_SMALL_EN = 'openai/whisper-small.en',
  XENOVA_TINY_EN = 'Xenova/whisper-tiny.en',
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum TextToImageModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export enum TextToSpeechModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}
export enum TextToTextModels {
  DISTIL_WHISPER_MEDIUM_EN = 'distil-whisper/distil-medium.en'
}

export type Models = (
  SpeechToTextModels |
  ChatBotModels |
  FaceDetectionModels |
  FacialRecognitionModels |
  ForecastingModels |
  ImageToTextModels |
  ObjectDetectionModels |
  PredictiveTextModels |
  SpeechRecognitionModels |
  SpeechToSpeechModels |
  TextToImageModels |
  TextToSpeechModels |
  TextToTextModels
)

export enum MessageType {
  LOAD_MODELS = "loade-models"
}

export interface ModelLoader {
  SpeechToText: {
    model: SpeechToTextModels
    quantized: boolean
  }
}

export enum ModelLoaderStatus {
  INITIALIZE = "initialize",
  INITIATE = "initiate",
  DOWNLOAD = "download",
  PROGRESS = "progress",
  DONE = "done",
  READ = "ready",
  COMPLETED = "completed",
  FAILED = "failed"
}

