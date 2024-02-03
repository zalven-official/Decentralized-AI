import { defineStore } from 'pinia';
// import { ref } from 'vue';
// import { MessageChannels, BroadcastChannels } from '../types/index';


export const workerStore = defineStore('message', () => {


  //   const messageListener = (event: MessageEvent) => {
  //     console.log(event);
  //   };

  //   const workerMessageHandler = async (messageChannels: MessageChannels, data: any = {}) => {
  //     // return new Promise(async (resolve, reject) => {
  //     //   try {
  //     //     const worker = new Worker(new URL('../workers/index.ts', import.meta.url), { type: "module" });
  //     //     worker.addEventListener("message", messageListener);
  //     //     worker.postMessage({ messageChannels, ...data });
  //     //   } catch (error) {
  //     //     reject(error);
  //     //   }
  //     // });


  //     // return new Promise((resolve, reject) => {
  //     //   try {
  //     //     worker.value.addEventListener('message', (event: MessageEvent<T>) => {
  //     //       const data = event.data;
  //     //       resolve(data);
  //     //     });
  //     //     worker.value.postMessage({ messageChannels, ...data });
  //     //   } catch (error) {
  //     //     reject(error);
  //     //   }
  //     // });
  //   };

  //   const workerBroadcastHandler = (broadcastChannels: BroadcastChannels) => {

  //   };

  //   return {
  //     workerMessageHandler,
  //     workerBroadcastHandler
  //   };
});

