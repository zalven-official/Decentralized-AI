import { defineStore } from 'pinia';
import type { DTOResponse, DTOModelMessageStart, DTOModelMessageEnd, DTOModelMessageProcessing, DTOModelMessageLoaded } from '@/types'

export const messageStore = defineStore('message', () => {

  const modelMessageStart = (data: DTOModelMessageStart) => {
    console.log('modelMessageStart', data)
  }

  const modelMessageEnd = (data: DTOModelMessageEnd) => {
    console.log('modelMessageEnd', data)

  }

  const modelMessageProcessing = (data: DTOModelMessageProcessing) => {
    console.log('modelMessageProcessing', data)

  }

  const modelMessageLoaded = (data: DTOModelMessageProcessing) => {
    console.log('modelMessageLoaded', data)

  }


  return {
    modelMessageStart,
    modelMessageEnd,
    modelMessageProcessing,
    modelMessageLoaded,
  };
});