import { defineStore } from 'pinia';


export const useAppStore = defineStore('appStore', {
  state: () => ({ respostas: [], perguntas: [] }),

})

export const appStore = useAppStore();