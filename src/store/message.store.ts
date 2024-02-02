import { defineStore } from 'pinia';


export const messageStore = defineStore('message', () => {

  const messengerManager = (event: MessageEvent) => {
    console.log(event)
  }

  return { messengerManager }

});