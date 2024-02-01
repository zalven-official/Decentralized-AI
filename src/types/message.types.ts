
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
}

interface DTOResponse {
  messageType: MessageType;
  status: MessageStatus;
}

export interface DTOModelStart extends DTOResponse {

}

export interface DTOModelEnd extends DTOResponse { }

export interface DTOModelProcessing extends DTOResponse { }

export interface DTOModelLoaded extends DTOResponse { }
