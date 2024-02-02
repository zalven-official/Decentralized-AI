import type { PipelineType, WhisperTokenizer } from "@xenova/transformers";
import { PipelineFactory } from "./factory/PipelineFactory";
import { SpeechToTextModels, type Models } from "@/types";

// Speech to text class 
export class SpeechToTextFactory extends PipelineFactory {
  static task: PipelineType = "automatic-speech-recognition";
  static model: Models = SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN;
  static quantized: boolean = false;
  constructor(tokenizer: WhisperTokenizer, model: Models, quantized: boolean) {
    super({ tokenizer, model, quantized });
  }
}