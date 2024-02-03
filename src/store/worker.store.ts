import { defineStore } from 'pinia';
import { ref } from 'vue';
import { MessageChannels, BroadcastChannels } from '../types/index'


export const workerStore = defineStore('message', () => {
  const worker = ref()

  const createWorker = async () => {
    worker.value = new Worker(new URL('../workers/index.ts', import.meta.url), { type: "module" })
    worker.value.addEventListener("message", messageListener)
  }

  const messageListener = (event: MessageEvent) => {
    console.log(event)
  }

  const workerMessageHandler = async <T>(messageChannels: MessageChannels, data: any = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await worker.value.postMessage({ messageChannels, ...data });
        resolve(result);
      } catch (error) {
        reject(error)
      }
    })
    // return new Promise((resolve, reject) => {
    //   try {
    //     worker.value.addEventListener('message', (event: MessageEvent<T>) => {
    //       const data = event.data;
    //       resolve(data);
    //     });
    //     worker.value.postMessage({ messageChannels, ...data });
    //   } catch (error) {
    //     reject(error);
    //   }
    // });
  };

  const workerBroadcastHandler = (broadcastChannels: BroadcastChannels) => {

  }

  return {
    createWorker,
    workerMessageHandler,
    workerBroadcastHandler
  }
});

