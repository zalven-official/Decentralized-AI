import { MessageChannels, BroadcastChannels } from "@/types";

export default function createJob(message: MessageChannels, data: Object = {}): Job {
  const worker = new Worker(new URL('../workers/index.ts', import.meta.url), { type: 'module' });
  return new Job(worker, message, data);
}
type Listener = Record<MessageChannels | BroadcastChannels, (event?: MessageEvent) => void>
interface Job {

  worker: Worker;
  promise: Promise<any>;
  message: MessageChannels;
  resolve: (event?: MessageEvent) => void;
  reject: (error?: any) => void;
  main: (event?: MessageEvent) => void;
}

class Job {
  private listeners: Listener = {} as Listener;

  constructor(worker: Worker, message: MessageChannels, data: Object = {}) {
    this.listeners = {} as Listener;
    this.worker = worker;
    this.message = message;

    try {
      this.promise = new Promise((resolve, reject) => {
        this.worker.addEventListener('message', this.listener);
        this.worker.postMessage({ message, ...data });
        this.resolve = resolve;
        this.reject = reject;
      });
    } catch (error) {
      this.reject(error);
    }
  }

  private listener = (event: MessageEvent) => {
    const broadcast = event.data?.broadcast as BroadcastChannels;
    if (this.listeners[broadcast] && broadcast in BroadcastChannels) {
      this.listeners[broadcast](event);
    } else {
      this.main(event);
    }
  };

  then(callback: (event?: MessageEvent) => void): this {
    this.main = callback;
    return this;
  }

  listen(event: BroadcastChannels, callback: (event?: MessageEvent) => void): this {
    this.listeners[event] = callback;
    return this;
  }

  catch(callback: (error: Error) => void): this {
    this.promise = this.promise.catch(callback);
    this.worker.terminate();
    return this;
  }

  finally(callback: () => void): this {
    this.promise = this.promise.finally(callback);
    this.worker.terminate();
    return this;
  }
}
