import { defineStore } from 'pinia';


export const useAppStore = defineStore('appStore', {
  state: () => ({ perguntas: [], respostas: [], depressao: 0, ansiedade: 0, estresse: 0 }),

})

export const appStore = useAppStore();