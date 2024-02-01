import { pipeline, env, } from "@xenova/transformers";
import type { PipelineType, WhisperTokenizer } from "@xenova/transformers";
import { type Models, type ModelLoader, ModelLoaderStatus, SpeechToTextModels } from "@/types";

interface PipelineFactoryOptions {
  tokenizer: WhisperTokenizer;
  model: Models;
  quantized: boolean;
  progress_callback?: (progress: number) => void;
}

class PipelineFactory {
  static task: PipelineType;
  static model: Models;
  static quantized: boolean;
  static instance: any = null;

  constructor(private options: PipelineFactoryOptions) { }

  static async getInstance(progress_callback?: Function) {
    if (this.instance === null && progress_callback) {
      this.instance = await pipeline(this.task, this.model, {
        quantized: this.quantized,
        progress_callback,
        revision: this.model?.includes("/whisper-medium")
          ? "no_attentions"
          : "main",
      });
    }
    return this.instance;
  }
}

export class SpeechToTextFactory extends PipelineFactory {
  static task: PipelineType = "automatic-speech-recognition";
  static model: Models = SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN;
  static quantized: boolean = false;

  constructor(tokenizer: WhisperTokenizer, model: Models, quantized: boolean) {
    super({ tokenizer, model, quantized });
  }
}
