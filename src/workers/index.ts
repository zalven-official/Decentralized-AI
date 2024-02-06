import { message } from './messages';
self.addEventListener("message", async (event: MessageEvent) => {
  return message(event);
});