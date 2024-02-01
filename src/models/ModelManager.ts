import { SpeechToTextFactory } from './index'
import { type ModelLoader, MessageType } from '@/types';

export const LoadSpeechToTextModel = async (data: ModelLoader) => {
  const p = SpeechToTextFactory;
  if (p.model !== data.SpeechToText.model || p.quantized !== data.SpeechToText.quantized) {
    p.model = data.SpeechToText.model;
    p.quantized = data.SpeechToText.quantized;
    if (p.instance !== null) {
      (await p.getInstance()).dispose();
      p.instance = null;
    }
  }
  return await p.getInstance((data: any) => {
    self.postMessage({ ...data, messageType: MessageType.MODEL_PROCESSING });
  });
}