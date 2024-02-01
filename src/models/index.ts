// dependency
import { pipeline, env, } from "@xenova/transformers";

// types
import type { PipelineType, WhisperTokenizer } from "@xenova/transformers";
import { type ModelLoader, type Models, MessageStatus, SpeechToTextModels, MessageType } from "@/types";

// scripts
import { LoadSpeechToTextModel } from "./ModelManager";

// Disable local models
env.allowLocalModels = false;
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

  // make sure model is loaded once. Singleton
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


// Speech to text class 
export class SpeechToTextFactory extends PipelineFactory {
  static task: PipelineType = "automatic-speech-recognition";
  static model: Models = SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN;
  static quantized: boolean = false;
  constructor(tokenizer: WhisperTokenizer, model: Models, quantized: boolean) {
    super({ tokenizer, model, quantized });
  }
}

self.addEventListener("message", async (event) => {
  self.postMessage({
    status: MessageStatus.INITIALIZE,
    messageType: MessageType.MODEL_MESSAGE_START
  });
  await loadModels(event?.data as ModelLoader)
  self.postMessage({
    status: MessageStatus.COMPLETED,
    messageType: MessageType.MODEL_MESSAGE_START
  });
});

const loadModels = async (model: ModelLoader) => {
  const speechToTextModel = await LoadSpeechToTextModel(model)
  self.postMessage({
    status: MessageStatus.COMPLETED,
    messageType: MessageType.MODEL_MESSAGE_START
  });
  console.log(speechToTextModel)
}

