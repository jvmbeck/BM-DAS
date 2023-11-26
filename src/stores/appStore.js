import { defineStore } from 'pinia';


export const useAppStore = defineStore('appStore', {
  state: () => ({ perguntas: [], respostas: [] }),

})

export const appStore = useAppStore();