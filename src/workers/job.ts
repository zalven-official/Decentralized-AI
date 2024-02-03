import { MessageChannels, BroadcastChannels } from "@/types";

export default function createJob(message: MessageChannels, data: Object = {}): Job {
  const worker = new Worker(new URL('../workers/index.ts', import.meta.url), { type: 'module' });
  return new Job(worker, message, data);
}

interface Job {
  worker: Worker;
  promise: Promise<any>;
  message: MessageChannels;
  listeners: Record<MessageChannels | BroadcastChannels, (value?: any) => void>;
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
}

class Job {

  constructor(worker: Worker, message: MessageChannels, data: Object = {}) {
    this.listeners = {};
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
    const { message, broadcast } = event.data;

    if (this.listeners[message]) {
      this.listeners[message](event);
    }

    if (this.listeners[broadcast]) {
      this.listeners[broadcast](event);
    }
  };

  then(callback: (value: MessageEvent) => void): this {
    this.listeners[this.message] = callback;
    return this;
  }

  listen(event: BroadcastChannels, callback: (value?: any) => void): this {
    this.listeners[event] = callback;
    return this;
  }

  catch(callback: (error: Error) => void): this {
    this.promise = this.promise.catch(callback).finally(() => this.worker.terminate());
    return this;
  }

  finally(callback: () => void): this {
    this.promise = this.promise.finally(callback);
    return this;
  }
}
