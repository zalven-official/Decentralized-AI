import type { PipelineType, WhisperTokenizer } from "@xenova/transformers";
import { PipelineFactory } from "./factory/PipelineFactory";
import { SpeechToTextModels, type Models, BroadcastChannels } from "@/types";
import { broadcast } from "../messages";

// Speech to text class 
class SpeechToTextFactory extends PipelineFactory {

  static task: PipelineType = "automatic-speech-recognition";
  static model: Models = SpeechToTextModels.DISTIL_WHISPER_MEDIUM_EN;
  static quantized: boolean = false;
  constructor(tokenizer: WhisperTokenizer, model: Models, quantized: boolean) {
    super({ tokenizer, model, quantized });
  }

  public static async set(model: Models, quantized: boolean): Promise<typeof SpeechToTextFactory> {
    const p = SpeechToTextFactory;
    if (p.model !== model || p.quantized !== quantized) {
      p.model = model;
      p.quantized = quantized;
      if (p.instance !== null) {
        (await p.getInstance()).dispose();
        p.instance = null;
      }
    }
    return p;
  }
}

export const speechToText = async (event: MessageEvent) => {
  try {
    const data = event.data;
    const p = await SpeechToTextFactory.set(data.model as Models, data.quantized);
    const transcriber = await p.getInstance((data: any) => {
      broadcast(BroadcastChannels.MODEL_PROCESSING, data);
    });

    const time_precision =
      transcriber.processor.feature_extractor.config.chunk_length /
      transcriber.model.config.max_source_positions;

    // Storage for chunks to be processed. Initialise with an empty chunk.
    const chunks_to_process = [
      {
        tokens: [],
        finalised: false,
      },
    ];

    console.log({ time_precision, chunks_to_process });
    return {
      success: true, message: `finished downloading model`
    };
  } catch (error) {
    return { success: false, message: `error downloading speech to text model` };
  }
};