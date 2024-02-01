import { SpeechToTextFactory } from './ModelFactory'
import { type ModelLoader } from '@/types';

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
    self.postMessage(data);
  });

}