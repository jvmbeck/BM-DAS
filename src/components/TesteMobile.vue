<template>
  <q-page id="divFundo" class="fundo" style="transition: background-color 1s">
    <q-linear-progress
      stripe
      rounded
      size="15px"
      :value="valorBarra"
      color="red"
      class="q-mt-sm"
    />
    <EscalaRostos
      :pergunta="pergunta"
      @selecionado="selecionado"
    ></EscalaRostos>

    <q-page-sticky position="bottom-left" :offset="[25, 25]">
      <q-btn
        fab
        icon="arrow_circle_left"
        color="red"
        @click="perguntaAnterior"
      />
    </q-page-sticky>

    <q-page-sticky position="bottom-right" :offset="[25, 25]">
      <q-btn
        fab
        icon="arrow_circle_right"
        color="red"
        @click="perguntaProxima"
        v-show="visivelProximo"
      />
      <q-btn
        fab
        icon="input"
        color="blue"
        to="/resultados"
        v-show="visivelResultado"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import services from "../services/services";
import EscalaRostos from "src/components/EscalaRostos.vue";

export default {
  name: "TesteMobile",

  components: { EscalaRostos },

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
      if (this.idx <= 1) {
        this.visivelAnterior = false;
      }
      if (this.idx > 0) {
        this.idx--;
        this.visivelProximo = true;
        this.visivelResultado = false;
      }
      this.pergunta = services.getPergunta(this.idx);
      this.moveBarra();
    },
    perguntaProxima() {
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
      this.moveBarra();
    },
    moveBarra() {
      var tamPercent = 100 / services.getTamanhoLista();
      this.valorBarra = Math.ceil(tamPercent * (this.idx + 1)) / 100;
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
</style>
