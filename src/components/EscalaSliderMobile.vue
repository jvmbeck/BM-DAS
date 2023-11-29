<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 flex flex-center">{{ pergunta }}</div>
      <div class="escala-resposta">
        <h4 class="escala-esq">Pouco</h4>

        <q-slider
          v-model="resposta"
          :min="1"
          :max="4"
          selection-color="green"
          track-size="12px"
          thumb-size="30px"
          vertical
          reverse
          @change="selecionado(resposta)"
        />

        <h4 class="escala-dir">Muito</h4>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "EscalaSliderMobile",

  emits: ["selecionado"],
  props: {
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

@media (max-width: 1200px) {
  .my-card {
    width: 80%;
    min-width: 300px;
    max-width: 300px;
  }

  .escala-resposta {
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>
