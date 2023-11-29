<template>
  <q-page id="divFundo" class="fundo" style="transition: background-color 1s">
    <EscalaRostos
      :pergunta="pergunta"
      @selecionado="selecionado"
    ></EscalaRostos>

    <EscalaRadio :pergunta="pergunta" @selecionado="selecionado"></EscalaRadio>

    <EscalaSlider
      :pergunta="pergunta"
      @selecionado="selecionado"
      v-show="desktop"
    ></EscalaSlider>

    <EscalaSliderMobile
      :pergunta="pergunta"
      @selecionado="selecionado"
      v-show="!desktop"
    ></EscalaSliderMobile>

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
import EscalaRostos from "src/components/EscalaRostos.vue";
import EscalaRadio from "src/components/EscalaRadio.vue";
import EscalaSliderMobile from "src/components/EscalaSliderMobile.vue";

export default {
  name: "TestePage",

  components: {
    EscalaSlider,
    EscalaSliderMobile,
    //EscalaCheckbox,
    EscalaRostos,
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
      desktop: true,
    };
  },

  created() {
    this.pergunta = this.pergunta = services.getPergunta(this.idx);
    if (window.innerWidth < 1000) {
      this.desktop = false;
    }
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
        case 1:
          document.getElementById("divFundo").style.backgroundColor =
            "LimeGreen";

          break;
        case 2:
          document.getElementById("divFundo").style.backgroundColor =
            "LightGreen";

          break;

        case 3:
          document.getElementById("divFundo").style.backgroundColor = "Khaki";

          break;

        case 4:
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
  align-items: center;
}

.perguntas {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
