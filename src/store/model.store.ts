import { ref } from 'vue';
import { defineStore } from 'pinia';
import { workerStore } from './worker.store';
import { MessageChannels } from '@/types';


export const modelStore = defineStore('model', () => {
  const worker = workerStore()

  const LoadAllModels = async () => {
    await worker.workerMessageHandler(MessageChannels.LOAD_ALL_MODELS)
      .then((data: any) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }


  const LoadChatBotModel = async (data: any) => {

  }
  const LoadFaceDetectionModel = async (data: any) => {

  }
  const LoadFacialRecognitionModel = async (data: any) => {

  }
  const LoadForecastingModel = async (data: any) => {

  }
  const LoadImageToTextModel = async (data: any) => {

  }
  const LoadPredictiveTextModel = async (data: any) => {

  }
  const LoadObjectDetectionModel = async (data: any) => {

  }
  const LoadSpeechRecognitionModel = async (data: any) => {

  }
  const LoadSpeechToSpeechModel = async (data: any) => {

  }
  const LoadSpeechToTextModel = async (data: any) => {

  }
  const LoadTextToImageModel = async (data: any) => {

  }
  const LoadTextToSpeechModel = async (data: any) => {

  }
  const LoadTextToTextModel = async (data: any) => {

  }
  const HandleError = async (data: any) => {

  }

  const ModelProcessing = async (data: any) => {

  }
  return {
    LoadAllModels
  };
});