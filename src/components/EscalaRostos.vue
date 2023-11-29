<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 flex flex-center">{{ pergunta }}</div>
      <div class="q-pa-md escala-resposta">
        <h4 class="escala-esq">Pouco</h4>
        <q-rating
          v-model="resposta"
          :max="4"
          size="4.5em"
          color="grey"
          :color-selected="cores"
          :icon="icons"
          @update:model-value="selecionado"
        />
        <h4 class="escala-dir">Muito</h4>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "EscalaRostos",
  emits: ["selecionado"],
  props: { pergunta: String },

  watch: {
    pergunta(val, oldVal) {
      if (val != oldVal) {
        this.resposta = null;
      }
    },
    resposta(val, oldVal) {
      switch (val) {
        case 1:
          this.cores = ["green-7", "green-7", "green-7", "green-7"];

          break;

        case 2:
          this.cores = [
            "light-green-5",
            "light-green-5",
            "light-green-5",
            "light-green-5",
          ];
          break;

        case 3:
          this.cores = ["amber-6", "amber-6", "amber-6", "amber-6"];
          break;

        case 4:
          this.cores = [
            "deep-orange-5",
            "deep-orange-5",
            "deep-orange-5",
            "deep-orange-5",
          ];
          break;

        default:
          break;
      }
    },
  },

  data() {
    return {
      resposta: 0,
      icons: [
        "sentiment_very_satisfied",
        "sentiment_satisfied",
        "sentiment_dissatisfied",
        "sentiment_very_dissatisfied",
      ],
      cores: ["green-7", "light-green-5", "amber-6", "deep-orange-5"],
    };
  },

  methods: {
    selecionado(valor) {
      this.$emit("selecionado", valor);
    },
  },
};
</script>

<style scoped>
.escala-resposta {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.escala-esq {
  color: green;
}

.escala-dir {
  color: red;
}
</style>
