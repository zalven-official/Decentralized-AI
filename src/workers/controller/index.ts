export const LoadAllModels = async (data: any) => {
  return "LoadAllModels"
}

export const LoadChatBotModel = async (data: any) => {
  return "LoadChatBotModel"
}

export const LoadFaceDetectionModel = async (data: any) => {
  return "LoadFaceDetectionModel"
}

export const LoadFacialRecognitionModel = async (data: any) => {
  return "LoadFacialRecognitionModel"
}

export const LoadForecastingModel = async (data: any) => {
  return "LoadForecastingModel"
}

export const LoadImageToTextModel = async (data: any) => {
  return "LoadImageToTextModel"
}

export const LoadPredictiveTextModel = async (data: any) => {
  return "LoadPredictiveTextModel"
}

export const LoadObjectDetectionModel = async (data: any) => {
  return "LoadObjectDetectionModel"
}

export const LoadSpeechRecognitionModel = async (data: any) => {
  return "LoadSpeechRecognitionModel"
}

export const LoadSpeechToSpeechModel = async (data: any) => {
  return "LoadSpeechToSpeechModel"
}

export const LoadSpeechToTextModel = async (data: any) => {
  //   const p = SpeechToTextFactory;
  //   if (p.model !== data.SpeechToText.model || p.quantized !== data.SpeechToText.quantized) {
  //     p.model = data.SpeechToText.model;
  //     p.quantized = data.SpeechToText.quantized;
  //     if (p.instance !== null) {
  //       (await p.getInstance()).dispose();
  //       p.instance = null;
  //     }
  //   }
  //   return await p.getInstance((data: any) => {
  //     // messengerManager(MessageType.MODEL_PROCESSING, data.status, { ...data })
  //   });
  return "LoadSpeechToTextModel"
}

export const LoadTextToImageModel = async (data: any) => {
  return "LoadTextToImageModel"
}

export const LoadTextToSpeechModel = async (data: any) => {
  return "LoadTextToSpeechModel"
}

export const LoadTextToTextModel = async (data: any) => {
  return "LoadTextToTextModel"
}

export const HandleError = async (data: any) => {
  return "HandleError"
} 
