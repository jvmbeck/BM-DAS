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
    console.log(appStore.perguntas[0][idx]);
    return appStore.perguntas[0][idx];

  },

  getTamanhoLista() {
    return appStore.perguntas[0].length
  },

  calculaResposta() {
    var resultado = 0;
    for (let i = 0; i < appStore.respostas.length; i++) {
      resultado = resultado + appStore.respostas[i];
    }
    return resultado
  },
  calculaDepressao(val) {
    let pontuacao = ''
    if (val <= 4) {
      pontuacao = 'Normal'
    } else if (val <= 6) {
      pontuacao = 'Leve'
    } else if (val <= 10) {
      pontuacao = 'Moderado'
    } else if (val <= 13) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },
  calculaAnsiedade(val) {
    let pontuacao = ''
    if (val <= 3) {
      pontuacao = 'Normal'
    } else if (val <= 5) {
      pontuacao = 'Leve'
    } else if (val <= 7) {
      pontuacao = 'Moderado'
    } else if (val <= 9) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },
  calculaEstresse(val) {
    let pontuacao = ''

    if (val <= 7) {
      pontuacao = 'Normal'
    } else if (val <= 9) {
      pontuacao = 'Leve'
    } else if (val <= 12) {
      pontuacao = 'Moderado'
    } else if (val <= 16) {
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