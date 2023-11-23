<template>
  <q-page class="fundo flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{ pergunta }}</div>
        <div class="q-gutter-sm">
          <q-radio
            keep-color
            v-model="resposta"
            val="0"
            label="Teal"
            color="teal"
          />
          <q-radio
            keep-color
            v-model="resposta"
            val="1"
            label="Orange"
            color="orange"
          />
          <q-radio
            keep-color
            v-model="resposta"
            val="2"
            label="Red"
            color="red"
          />
          <q-radio
            keep-color
            v-model="resposta"
            val="3"
            label="Cyan"
            color="cyan"
          />
        </div>
        <div class="q-px-sm q-mt-sm">
          Your selection is: <strong>{{ resposta }}</strong>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{ pergunta }}</div>
        <div class="q-pa-md">
          <q-rating
            v-model="resposta"
            size="4.5em"
            icon="img:https://cdn.quasar.dev/logo-v2/svg/logo.svg"
          />
        </div>
        <div class="q-px-sm q-mt-sm">
          Your selection is: <strong>{{ resposta }}</strong>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{ pergunta }}</div>
        <q-slider v-model="resposta" marker-labels :min="0" :max="3" />
        <div class="q-px-sm q-mt-sm">
          Your selection is: <strong>{{ resposta }}</strong>
        </div>
      </q-card-section>
    </q-card>

    <div class="perguntas">
      <q-btn
        class="on-left"
        label="anteroior"
        @click="perguntaAnterior"
      ></q-btn>
      <q-btn class="on-right" label="próxima" @click="perguntaProxima"></q-btn>
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
import { ref } from "vue";
import services from "../services/services";

export default {
  name: "TestePage",

  setup() {},

  data() {
    return {
      pergunta: "perguntateste",
      resposta: ref(3),
      idx: 0,
      valorBarra: 0,
    };
  },

  methods: {
    perguntaAnterior() {
      /*  if (this.idx <= 1) {
        this.visivelAnterior = false;
      } */
      if (this.idx > 0) {
        this.idx--;
      }
      this.moveBarra();

      this.pergunta = services.getPergunta(this.idx);
    },
    perguntaProxima() {
      this.moveBarra();
      if (this.idx < services.getTamanhoLista() - 1) {
        this.idx++;
        this.pergunta = services.getPergunta(this.idx);
      }
    },
    moveBarra() {
      var tamPercent = 100 / services.getTamanhoLista();
      this.valorBarra = Math.ceil(tamPercent * (this.idx + 1));
    },
  },
};
</script>

<style>
.fundo {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}

.perguntas {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
