<template>
  <q-page class="flex flex-center">
    <div style="text-align: center">
      <img
        alt="Quasar logo"
        src="~assets/logo-driver-life.svg"
        style="width: 200px; height: 200px"
      />
      <br />
      <h1>Drive Life</h1>
      <br />
      <q-btn label="Iniciar" to="/iniciar"></q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebaseServices from "../services/firebaseServices";

export default defineComponent({
  name: "IndexPage",

  created() {
    firebaseServices.getPerguntas();
  },

  methods: {},
});
</script>
