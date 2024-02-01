import { SpeechToTextFactory } from './ModelFactory'
import { type ModelLoader } from '@/types';

export const LoadSpeechToTextModel = async (data: ModelLoader) => {
  const p = SpeechToTextFactory;
  if (p.model !== data.SpeechToText.model || p.quantized !== data.SpeechToText.quantized) {
    p.model = data.SpeechToText.model;
    p.quantized = data.SpeechToText.quantized;
  }
  console.log(p.model, "--")
  if (p.instance !== null) {
    (await p.getInstance()).dispose();
    p.instance = null;
  }

  let transcriber = await p.getInstance((data: any) => {
    self.postMessage(data);
  });

}