<template>
  <q-page class="flex flex-center fundo" style="background-color: bisque">
    <TabelaPontuacao></TabelaPontuacao>

    <h5>Seu resultado: {{ resultado }}</h5>

    <div class="resultados">
      <q-card dark bordered class="bg-grey-9 card-resultado">
        <q-card-section>
          <div class="text-h6">Depressão</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ resultadoDepressao }}
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-grey-9 card-resultado">
        <q-card-section>
          <div class="text-h6">Ansiedade</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ resultadoAnsiedade }}
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-grey-9 card-resultado">
        <q-card-section>
          <div class="text-h6">Estresse</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ resultadoEstresse }}
        </q-card-section>
      </q-card>
    </div></q-page
  >
</template>

<script>
import TabelaPontuacao from "src/components/TabelaPontuacao.vue";
import services from "src/services/services";
import { appStore } from "src/stores/appStore";

export default {
  name: "ResultadoPage",

  components: {
    TabelaPontuacao,
  },

  data() {
    return {
      resultado: [],
      resultadoDepressao: "",
      resultadoAnsiedade: "",
      resultadoEstresse: "",
    };
  },

  created() {
    this.resultado = services.calculaResposta();
    this.resultadoDepressao = services.calculaDepressao(this.resultado);
    this.resultadoAnsiedade = services.calculaAnsiedade(this.resultado);
    this.resultadoEstresse = services.calculaEstresse(this.resultado);
  },
};
</script>

<style scoped>
.fundo {
  display: flex;
  flex-direction: column;
}
.resultados {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-resultado {
  width: 100%;
  min-width: 300px;
  text-align: center;
}
</style>
