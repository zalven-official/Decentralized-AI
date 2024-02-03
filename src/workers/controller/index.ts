import { BroadcastChannels } from "@/types";
import { broadcast } from "../messages";
import { SpeechToTextFactory } from "../core";

export const LoadAllModels = async (event: MessageEvent) => {
  return "LoadAllModels";
};

export const LoadChatBotModel = async (event: MessageEvent) => {
  return "LoadChatBotModel";
};

export const LoadFaceDetectionModel = async (event: MessageEvent) => {
  return "LoadFaceDetectionModel";
};

export const LoadFacialRecognitionModel = async (event: MessageEvent) => {
  return "LoadFacialRecognitionModel";
};

export const LoadForecastingModel = async (event: MessageEvent) => {
  return "LoadForecastingModel";
};

export const LoadImageToTextModel = async (event: MessageEvent) => {
  return "LoadImageToTextModel";
};

export const LoadPredictiveTextModel = async (event: MessageEvent) => {
  return "LoadPredictiveTextModel";
};

export const LoadObjectDetectionModel = async (event: MessageEvent) => {
  return "LoadObjectDetectionModel";
};

export const LoadSpeechRecognitionModel = async (event: MessageEvent) => {
  return "LoadSpeechRecognitionModel";
};

export const LoadSpeechToSpeechModel = async (event: MessageEvent) => {
  return "LoadSpeechToSpeechModel";
};

let i = 0;
export const LoadSpeechToTextModel = async (event: MessageEvent) => {

  // const p = SpeechToTextFactory;
  // if (p.model !== data.model || p.quantized !== data.quantized) {
  //   p.model = data.model;
  //   p.quantized = data.quantized;
  //   if (p.instance !== null) {
  //     (await p.getInstance()).dispose();
  //     p.instance = null;
  //   }
  // }
  // const model = await p.getInstance((data: any) => {
  //   broadcast(BroadcastChannels.MODEL_PROCESSING, data);
  // });

  console.log("Hello world", i);
  i += 1;
  // return model;
  return true;
};

export const LoadTextToImageModel = async (event: MessageEvent) => {
  return "LoadTextToImageModel";
};

export const LoadTextToSpeechModel = async (event: MessageEvent) => {
  return "LoadTextToSpeechModel";
};

export const LoadTextToTextModel = async (event: MessageEvent) => {
  return "LoadTextToTextModel";
};

export const HandleError = async (event: MessageEvent) => {
  return "HandleError";
};

