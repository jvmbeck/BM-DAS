<template>
  <q-page class="flex-center flex">
    <q-card class="card q-pa-sm">
      <q-card-section>
        <div class="text-h3 text-center">Termos de Uso</div>
      </q-card-section>
      <q-separator />

      <q-card-section class="q-pt-none">
        <q-scroll-area class="text-center" style="height: 300px">
          <div v-for="n in 100" :key="n" class="q-py-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-scroll-area>
      </q-card-section>
      <q-separator />
      <q-card-action>
        <div>
          <q-checkbox
            v-model="concordo"
            label="Concordo com os termos de uso do app"
          />
        </div>

        <q-btn label="Continuar" :disable="!concordo" to="/teste"></q-btn>
      </q-card-action>
    </q-card>
  </q-page>
</template>

<script>
import firebaseServices from "src/services/firebaseServices";

export default {
  name: "IniciarPage",

  created() {
    firebaseServices.criaUsuario();
  },
  data() {
    return {
      concordo: false,
    };
  },
};
</script>

<style scoped>
.fundo {
  display: flex;
  align-items: center;
}
.card {
  width: 90%;
  max-width: 1000px;
  height: 90%;
  max-height: 1200px;
}

.contrato {
  display: flex;
  align-items: center;
}
</style>
