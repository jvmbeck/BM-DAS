<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 flex flex-center">{{ pergunta }}</div>
      <div class="q-pa-md escala-resposta">
        <h4 class="escala-esq">Pouco</h4>

        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          :val="1"
          color="green"
          @update:model-value="selecionado(resposta)"
        />
        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          :val="2"
          color="light-green-5"
          @update:model-value="selecionado(resposta)"
        />
        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          :val="3"
          color="yellow"
          @update:model-value="selecionado(resposta)"
        />
        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          :val="4"
          color="red"
          @update:model-value="selecionado(resposta)"
        />
        <h4 class="escala-dir">Muito</h4>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "EscalaRadio",

  emits: ["selecionado"],
  props: {
    pergunta: String,
  },
  data() {
    return {
      resposta: 0,
      op1: 1,
      op2: 2,
      op3: 3,
      op4: 4,
    };
  },

  watch: {
    pergunta(val, oldVal) {
      if (val != oldVal) {
        this.resposta = null;
      }
    },
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
