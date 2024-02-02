
import message from './messages'
self.addEventListener("message", async (event: MessageEvent) => {
  self.postMessage(await message(event));
})