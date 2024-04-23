<template>
  <q-page class="flex flex-center fundo">
    <h5 class="text-h4">Resultados</h5>


    <h5></h5>

    <div class="resultados">
      <q-card dark bordered class="card-resultado" style="background-color: #555347;">
        <q-card-section>
          <div class="text-subtitle2">Depressão</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div class="text-h4">{{ resultadoDepressao }}</div>
        </q-card-section>
      </q-card>
      <q-card dark bordered class="card-resultado" style=" background-color: #555347">
        <q-card-section>
          <div class="text-subtitle2">Ansiedade</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div class="text-h4">{{ resultadoAnsiedade }}</div>
        </q-card-section>
      </q-card>
      <q-card dark bordered class="card-resultado" style="background-color: #555347;">
        <q-card-section>
          <div class="text-subtitle2">Estresse</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div class="text-h4">{{ resultadoEstresse }}</div>
        </q-card-section>
      </q-card>
    </div></q-page
  >
</template>

<script>
import firebaseServices from "src/services/firebaseServices";
import services from "src/services/services";

export default {
  name: "ResultadoPage",

  data() {
    return {
      resultado: 0,
      resultadoDepressao: "",
      resultadoAnsiedade: "",
      resultadoEstresse: "",
      desktop: true,
    };
  },

  created() {
    if (window.innerWidth < 1200) {
      this.desktop = false;
    }
    services.calculaResposta();
    this.resultadoDepressao = services.calculaDepressao();
    this.resultadoAnsiedade = services.calculaAnsiedade();
    this.resultadoEstresse = services.calculaEstresse();
    firebaseServices.salvaRespostaNoBanco();
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

@media (max-width: 1200px) {
  .resultados {
    flex-direction: column;
  }
}
</style>
