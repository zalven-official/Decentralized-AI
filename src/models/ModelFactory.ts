import { pipeline, env, type PipelineType, type WhisperTokenizer } from "@xenova/transformers";
import { type Models, type ModelLoader, ModelLoaderStatus, SpeechToTextModels } from "@/types";


class PipelineFactory {
  public static task: PipelineType;
  public static model: Models;
  public static quantized: boolean;
  public static instance: any = null;
  public static tokenizer: WhisperTokenizer;

  constructor(tokenizer: WhisperTokenizer, model: Models, quantized: boolean) {
    PipelineFactory.tokenizer = tokenizer;
    PipelineFactory.model = model;
    PipelineFactory.quantized = quantized;
  }

  // Asynchronous method to get a singleton instance of the pipeline
  static async getInstance(progress_callback: any = null) {
    if (PipelineFactory.instance === null) {
      console.log(PipelineFactory.model)
      PipelineFactory.instance = pipeline(PipelineFactory.task, PipelineFactory.model, {
        quantized: PipelineFactory.quantized,
        progress_callback,
        revision: PipelineFactory.model.includes("medium") ? "no_attentions" : "main",
      });
    }
    return PipelineFactory.instance;
  }
}

export class SpeechToTextFactory extends PipelineFactory {
  public static task: PipelineType = "automatic-speech-recognition";
  public static model: Models = SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN;
  public static quantized: boolean = false;
}