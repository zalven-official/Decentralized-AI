
export enum MessageStatus {
  INITIALIZE = "initialize",
  INITIATE = "initiate",
  DOWNLOAD = "download",
  PROGRESS = "progress",
  DONE = "done",
  READ = "ready",
  COMPLETED = "completed",
  FAILED = "failed"
}

export enum MessageType {
  MODEL_MESSAGE_START = 'model-message-start',
  MODEL_MESSAGE_END = 'model-message-end',
  MODEL_PROCESSING = 'model-processing',
  MODEL_LOADED = 'model-loaded',
  MODEL_ERROR = 'model-error'
}

export interface DTOResponse {
  messageType: MessageType;
  status: MessageStatus;
}

export interface DTOModelMessageStart extends DTOResponse { }

export interface DTOModelMessageEnd extends DTOResponse { }

export interface DTOModelMessageProcessing extends DTOResponse { }

export interface DTOModelMessageLoaded extends DTOResponse { }

export interface DTOModelMessageError extends DTOResponse { }
