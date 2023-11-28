<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 flex flex-center">{{ pergunta }}</div>
      <div class="escala-resposta">
        <h4 class="escala-esq">Pouco</h4>

        <q-slider
          v-model="resposta"
          marker-labels
          :min="0"
          :max="3"
          selection-color="green"
          track-size="12px"
          thumb-size="30px"
          @change="selecionado(resposta)"
        />

        <h4 class="escala-dir">Muito</h4>
      </div>
      <div class="q-px-sm q-mt-sm">
        Resposta selecionada: <strong>{{ resposta }}</strong>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "EscalaSlider",

  emits: ["selecionado"],
  props: {
    valor: { type: Number, required: false },
    pergunta: String,
  },
  watch: {
    pergunta(val, oldVal) {
      if (val != oldVal) {
        this.resposta = null;
      }
    },
  },
  data() {
    return {
      resposta: 0,
    };
  },
  created() {
    this.resposta = this.valor;
  },
  methods: {
    selecionado(valor) {
      this.$emit("selecionado", valor);
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  min-width: 500px;
  max-width: 700px;
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
