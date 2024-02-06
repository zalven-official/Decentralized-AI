import { BroadcastChannels, type Models } from "@/types";
import { broadcast } from "../messages";
import { speechToText } from '../core';
import storage from "../storage";

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


export const LoadSpeechToTextModel = async (event: MessageEvent) => {
  const result = await speechToText(event);
  return result;
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

