/* eslint-disable */ // --> OFF

import { appStore } from '../stores/appStore';

const services = {
  salvaResposta(valor, idx) {
    if (appStore.respostas[idx] != null) {
      appStore.respostas[idx] = valor;
    } else {
      appStore.respostas.push(valor)
    }
  },

  getData() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`
    return currentDate
  },

  getPergunta(idx) {
    return appStore.perguntas[0][idx];
  },

  getTamanhoLista() {
    return appStore.perguntas[0].length
  },

  calculaResposta() {
    for (let idx = 0; idx < this.getTamanhoLista(); idx++) {
      if (idx == 0 || idx == 5 || idx == 7 || idx == 10 || idx == 11 || idx == 13 || idx == 17) {
        appStore.estresse += appStore.respostas[idx];
        console.log("valor de estresse :" + appStore.estresse);
      } else if (idx == 1 || idx == 3 || idx == 6 || idx == 8 || idx == 14 || idx == 18 || idx == 19) {
        appStore.ansiedade += appStore.respostas[idx];
        console.log("valor de ansiedade: " + appStore.ansiedade);
      } else if (idx == 2 || idx == 4 || idx == 9 || idx == 12 || idx == 15 || idx == 16 || idx == 20) {
        appStore.depressao += appStore.respostas[idx];
        console.log("valor de depressao: " + appStore.depressao);
      }
    }
  },
  calculaDepressao() {
    let pontuacao = ''
    if (appStore.depressao <= 4) {
      pontuacao = 'Normal'
    } else if (appStore.depressao <= 6) {
      pontuacao = 'Leve'
    } else if (appStore.depressao <= 10) {
      pontuacao = 'Moderado'
    } else if (appStore.depressao <= 13) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },
  calculaAnsiedade() {
    let pontuacao = ''
    if (appStore.ansiedade <= 3) {
      pontuacao = 'Normal'
    } else if (appStore.ansiedade <= 5) {
      pontuacao = 'Leve'
    } else if (appStore.ansiedade <= 7) {
      pontuacao = 'Moderado'
    } else if (appStore.ansiedade <= 9) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },
  calculaEstresse() {
    let pontuacao = ''
    if (appStore.estresse <= 7) {
      pontuacao = 'Normal'
    } else if (appStore.estresse <= 9) {
      pontuacao = 'Leve'
    } else if (appStore.estresse <= 12) {
      pontuacao = 'Moderado'
    } else if (appStore.estresse <= 16) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },

}

/* 
const perguntas = [
    "Achei difícil me acalmar",
    "Senti minha boca seca",
    "Não consegui sentir nenhum sentimento positivo",
    "Tive dificuldade em respirar mesmo sem ter feito nenhum esforço físico (ex. respiração ofegante, falta de ar)",
    "Achei difícil ter vontade de fazer as coisas",
    "Reagi de forma exagerada às situações",
    "Senti tremores (ex. nas mãos)",
    "Me senti nervoso",
    "Me preocupei com situações em que eu pudesse entrar em pânico e perder o controle",
    "Senti que não tinha nada a desejar",
    "Me senti agitado",
    "Achei difícil relaxar",
    "Me senti triste e sem ânimo",
    "Fui intolerante/impaciente com as coisas que me impediam de continuar o que eu estava fazendo",
    "Senti que ia entrar em pânico",
    "Não consegui me entusiasmar com nada",
    "Senti que não tinha valor como pessoa",
    "Senti que estava um pouco emotivo/sensível demais",
    "Sabia que meu coração estava alterado mesmo não tendo feito nenhum esforço físico (ex. aumento da frequência cardíaca, descompasso no ritmo cardíaco)",
    "Senti medo sem motivo",
    "Senti que a vida não tinha sentido"
] */
export default services;