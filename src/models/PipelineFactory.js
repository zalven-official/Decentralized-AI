/* eslint-disable camelcase */
import { pipeline, env } from "@xenova/transformers";

env.allowLocalModels = false;

export class PipelineFactory {
  static task = null;
  static model = null;
  static quantized = null;
  static instance = null;

  constructor(tokenizer, model, quantized) {
    this.tokenizer = tokenizer;
    this.model = model;
    this.quantized = quantized;
  }

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, {
        quantized: this.quantized,
        progress_callback,

        // For medium models, we need to load the `no_attentions` revision to avoid running out of memory
        revision: this.model.includes("medium") ? "no_attentions" : "main"
      });
    }

    return this.instance;
  }
}


// Chatbot


// FaceDetection


// FacialRecognition


// Forecasting


// ImageToText


// ObjectDetection


// PredictiveText


// SpeechRecognition


// SpeechToSpeech


// SpeechToText
class SpeechToTextPipelineFactory extends PipelineFactory {
  static task = "automatic-speech-recognition";
  static model = null;
  static quantized = null;
}


// TextToImage


// TextToSpeech


// TextToText
