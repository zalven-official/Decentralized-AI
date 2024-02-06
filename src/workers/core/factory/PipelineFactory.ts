// dependencies
import { pipeline, env } from "@xenova/transformers";

// types
import type { PipelineType, WhisperTokenizer } from "@xenova/transformers";
import { type Models } from "@/types";

env.allowLocalModels = false;

interface PipelineFactoryOptions {
  tokenizer: WhisperTokenizer;
  model: Models;
  quantized: boolean;
  progress_callback?: (progress: number) => void;
}

export class PipelineFactory {
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
        revision: this.model?.includes("medium")
          ? "no_attentions"
          : "main",
      });
    }
    return this.instance;
  }
}
