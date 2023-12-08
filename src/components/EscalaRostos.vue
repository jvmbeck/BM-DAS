<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 flex flex-center">{{ pergunta }}</div>
      <div class="q-pa-md escala-resposta">
        <h4 class="escala-esq">Pouco</h4>
        <q-rating
          class="opcoes"
          v-model="resposta"
          :max="4"
          size="5.5em"
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
        this.resposta = 0;
      }
    },
    resposta(val, oldVal) {
      switch (val) {
        case 0:
          this.cores = ["green-7", "light-green-5", "amber-6", "deep-orange-5"];
          break;

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
.my-card {
  width: 100%;
  min-width: 700px;
  max-width: 900px;
  margin-top: 5%;
  border: 0px;
}

.escala-resposta {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.opcoes {
  display: flex;
  flex-direction: row;
}

.escala-esq {
  color: green;
}

.escala-dir {
  color: red;
}

@media (max-width: 1200px) {
  .my-card {
    width: 80%;
    min-width: 300px;
    max-width: 300px;
  }

  .escala-resposta {
    flex-direction: column-reverse;
  }

  .opcoes {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
