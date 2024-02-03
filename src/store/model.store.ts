
import { defineStore } from 'pinia';
import job from '@/workers/job';
import { MessageChannels, BroadcastChannels } from '@/types';



// import { MessageChannels } from '@/types';
export const modelStore = defineStore('model', () => {


  const LoadAllModels = async () => {
    job(MessageChannels.LOAD_SPEECH_TO_TEXT_MODEL)
      .then((event: MessageEvent) => {

      }).listen(BroadcastChannels.MODEL_PROCESSING, (event: MessageEvent) => {

      }).catch(() => {

      }).finally(() => {

      });
  };


  // const LoadChatBotModel = async (data: any) => {

  // };
  // const LoadFaceDetectionModel = async (data: any) => {

  // };
  // const LoadFacialRecognitionModel = async (data: any) => {

  // };
  // const LoadForecastingModel = async (data: any) => {

  // };
  // const LoadImageToTextModel = async (data: any) => {

  // };
  // const LoadPredictiveTextModel = async (data: any) => {

  // };
  // const LoadObjectDetectionModel = async (data: any) => {

  // };
  // const LoadSpeechRecognitionModel = async (data: any) => {

  // };
  // const LoadSpeechToSpeechModel = async (data: any) => {

  // };
  // const LoadSpeechToTextModel = async (data: any) => {

  // };
  // const LoadTextToImageModel = async (data: any) => {

  // };
  // const LoadTextToSpeechModel = async (data: any) => {

  // };
  // const LoadTextToTextModel = async (data: any) => {

  // };
  // const HandleError = async (data: any) => {

  // };

  // const ModelProcessing = async (data: any) => {

  // };
  return {
    LoadAllModels
  };
});