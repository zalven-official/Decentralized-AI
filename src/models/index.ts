import { type ModelLoader, ModelLoaderStatus, } from "@/types";
import { LoadSpeechToTextModel } from "./ModelManager";

self.addEventListener("message", async (event) => {
  self.postMessage({ status: ModelLoaderStatus.INITIALIZE });
  await loadModels(event?.data as ModelLoader)
  self.postMessage({ status: ModelLoaderStatus.COMPLETED });
});

const loadModels = async (model: ModelLoader) => {
  LoadSpeechToTextModel(model)
}
