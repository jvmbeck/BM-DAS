<template>
  <q-page class="flex flex-center">
    <div style="text-align: center">
      <h2 v-show="existeID">Bem vindo de volta</h2>
      <img
        alt="Quasar logo"
        src="~assets/logo-driver-life.svg"
        style="width: 200px; height: 200px"
      />
      <br />
      <h1>Drive Life</h1>
      <br />
      <q-btn id="btnIniciar" label="Iniciar" @click="btnIniciar"></q-btn>
      <q-btn id="btnTeste" label="Teste" to="/teste"></q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebaseServices from "../services/firebaseServices";
import { push } from "firebase/database";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "IndexPage",

  created() {
    this.respondeuHoje = firebaseServices.getRespostaHoje();

    const $q = useQuasar();

    firebaseServices.getPerguntas();
    if (localStorage.getItem("id")) {
      this.existeID = true;
    }
  },
  data() {
    return {
      existeID: false,
      alert: false,
      respondeuHoje: false,
    };
  },

  methods: {
    btnIniciar() {
      this.respondeuHoje = firebaseServices.getRespostaHoje();
      console.log(this.respondeuHoje);
      if (this.respondeuHoje) {
        this.$q.notify({
          message: "Você já respondeu o teste hoje. Tente novamente amanhã. :)",
          color: "purple",
        });
        document.getElementById("btnIniciar").disabled = true;
      } else {
        if (localStorage.getItem("id")) {
          this.$router.push("/teste");
        } else {
          this.$router.push("/iniciar");
        }
      }
    },
  },
});
</script>
