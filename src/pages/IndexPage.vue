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
      <q-btn
        label="Iniciar"
        @click="existeID ? $router.push('/teste') : $router.push('/iniciar')"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebaseServices from "../services/firebaseServices";
import { push } from "firebase/database";

export default defineComponent({
  name: "IndexPage",

  created() {
    firebaseServices.getPerguntas();
    if (localStorage.getItem("id")) {
      this.existeID = true;
    }
    firebaseServices.getResposta();
  },
  data() {
    return {
      existeID: false,
    };
  },

  methods: {},
});
</script>
