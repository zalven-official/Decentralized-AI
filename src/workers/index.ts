import { message } from './messages';
import storage from './storage';
self.addEventListener("message", async (event: MessageEvent) => {


  return message(event);
});