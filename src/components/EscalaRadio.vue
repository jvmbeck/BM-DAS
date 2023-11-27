<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 flex flex-center">{{ pergunta }}</div>
      <div class="q-gutter-sm escala-resposta">
        <h4 class="escala-esq">Pouco</h4>

        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          val="0"
          color="green"
          @update:model-value="selecionado"
        />
        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          val="1"
          color="lightGreen"
          @update:model-value="selecionado"
        />
        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          val="2"
          color="yellow"
          @update:model-value="selecionado"
        />
        <q-radio
          keep-color
          size="xl"
          v-model="resposta"
          val="3"
          color="red"
          @update:model-value="selecionado"
        />
        <h4 class="escala-dir">Muito</h4>
      </div>
      <div class="q-px-sm q-mt-sm">
        Your selection is: <strong>{{ resposta }}</strong>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "EscalaRadio",

  emits: ["selecionado"],
  props: {
    valor: { type: Number, required: false },
    pergunta: String,
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
