<template>
  <q-page class="flex flex-center">
    <div style="text-align: center">
      <h2 v-show="existeID">Bem vindo de volta</h2>
      <img alt="Quasar logo" src="~assets/logo-driver-life.svg" class="logo" />
      <br />
      <div class="text-h2 titulo">Drive Life</div>
      <br />
      <q-btn
        id="btnIniciar"
        label="Iniciar"
        @click="btnIniciar"
        rounded
        size="35px"
      ></q-btn>
      {{ result }}
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebaseServices from "../services/firebaseServices";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "IndexPage",

  created() {
    this.respondeuHoje = firebaseServices.getRespostaHoje();
    this.result = firebaseServices.getRespostasAntigas();

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
      result: [],
    };
  },

  methods: {
    btnIniciar() {
      this.respondeuHoje = firebaseServices.getRespostaHoje();
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

<style scoped>
.logo {
  height: 200px;
  width: 200px;
}

.titulo {
  padding-top: 6%;
  padding-bottom: 6%;
}
</style>
