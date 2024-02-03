import { messageManager } from './messages'

self.addEventListener("message", async (event: MessageEvent) => {
  self.postMessage(await messageManager(event));
})