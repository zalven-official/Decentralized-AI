
import { defineStore } from 'pinia';
import job from '@/workers/job';
import { MessageChannels, BroadcastChannels } from '@/types';

export const modelStore = defineStore('model', () => {

  const LoadSpeechToTextModel = async () => {
    job(MessageChannels.LOAD_SPEECH_TO_TEXT_MODEL, { model: 'Xenova/whisper-tiny', quantized: false })
      .then((event) => {
        console.log(event?.data);
      }).listen(BroadcastChannels.MODEL_PROCESSING, (event) => {
        console.log(event?.data);
      });
  };

  return {
    LoadSpeechToTextModel
  };
});