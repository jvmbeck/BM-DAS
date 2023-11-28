<template>
  <q-page
    id="divFundo"
    class="fundo flex flex-center"
    style="transition: background-color 1s"
  >
    <EscalaRadio :pergunta="pergunta" @selecionado="selecionado"></EscalaRadio>

    <EscalaCheckbox
      :pergunta="pergunta"
      @selecionado="selecionado"
    ></EscalaCheckbox>

    <EscalaSlider
      :pergunta="pergunta"
      @selecionado="selecionado"
    ></EscalaSlider>

    <div class="perguntas">
      <q-btn
        class="on-left"
        label="anterior"
        :style="visivelAnterior ? 'visibility: visible' : 'visibility: hidden'"
        @click="perguntaAnterior"
      ></q-btn>
      <q-btn
        id="btnProximo"
        class="on-right"
        label="próxima"
        v-show="visivelProximo"
        @click="perguntaProxima"
      ></q-btn>
      <q-btn
        class="on-right"
        label="resultados"
        v-show="visivelResultado"
        to="/resultados"
      ></q-btn>
    </div>

    <q-circular-progress
      show-value
      font-size="12px"
      :value="valorBarra"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ valorBarra }}%
    </q-circular-progress>
  </q-page>
</template>

<script>
import services from "../services/services";
import EscalaSlider from "src/components/EscalaSlider.vue";
import EscalaCheckbox from "src/components/EscalaCheckbox.vue";
import EscalaRadio from "src/components/EscalaRadio.vue";

export default {
  name: "TestePage",

  components: {
    EscalaSlider,
    EscalaCheckbox,
    EscalaRadio,
  },
  data() {
    return {
      visivelAnterior: false,
      visivelProximo: true,
      visivelResultado: false,
      resposta: 0,
      idx: 0,
      valorBarra: 0,
      pergunta: "",
    };
  },

  created() {
    this.pergunta = this.pergunta = services.getPergunta(this.idx);
  },

  methods: {
    perguntaAnterior() {
      this.moveBarra();
      if (this.idx <= 1) {
        this.visivelAnterior = false;
      }
      if (this.idx > 0) {
        this.idx--;
        this.visivelProximo = true;
        this.visivelResultado = false;
      }
      this.pergunta = services.getPergunta(this.idx);
    },
    perguntaProxima() {
      this.moveBarra();
      if (this.idx >= services.getTamanhoLista() - 1) {
        this.visivelProximo = false;
        this.visivelResultado = true;
      }
      if (this.idx < services.getTamanhoLista() - 1) {
        this.idx++;
        this.pergunta = services.getPergunta(this.idx);
        this.visivelAnterior = true;
        document.getElementById("btnProximo").disabled = true;
      }
      services.salvaResposta(this.resposta, this.idx);
      this.limpaTela();
    },
    moveBarra() {
      var tamPercent = 100 / services.getTamanhoLista();
      this.valorBarra = Math.ceil(tamPercent * (this.idx + 1));
    },
    selecionado(valor) {
      services.salvaResposta(valor, this.idx);
      document.getElementById("btnProximo").disabled = false;

      switch (valor) {
        case 0:
          document.getElementById("divFundo").style.backgroundColor =
            "LimeGreen";

          break;
        case 1:
          document.getElementById("divFundo").style.backgroundColor =
            "LightGreen";

          break;

        case 2:
          document.getElementById("divFundo").style.backgroundColor = "Khaki";

          break;

        case 3:
          document.getElementById("divFundo").style.backgroundColor =
            "SandyBrown";

          break;
        default:
          document.getElementById("divFundo").style.backgroundColor =
            "Lightgray";

          break;
      }
    },
    limpaTela() {
      document.getElementById("divFundo").style.backgroundColor = "SeaShell";
      this.resposta = 0;
    },
  },
};
</script>

<style scoped>
.fundo {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}

.my-card {
  width: 100%;
  min-width: 500px;
  max-width: 700px;
}
.perguntas {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.escala-resposta {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}

.escala-esq {
  color: green;
  margin-right: 5%;
}

.escala-dir {
  color: red;
  margin-left: 5%;
}
</style>
