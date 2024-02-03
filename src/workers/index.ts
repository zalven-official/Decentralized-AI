import type { MessageChannels } from '@/types';
import { messageManager } from './messages';


self.addEventListener("message", async (event: MessageEvent) => {
  const message = event.data?.message as MessageChannels;
  const value = await messageManager(event);
  self.postMessage({ message, value });
});