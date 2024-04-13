<template>
  <q-page class="flex flex-center">
    <div style="text-align: center">
      <h2 v-show="existeID">Bem vindo de volta</h2>
      <img alt="Quasar logo" src="~assets/brasaoBM.jpg" class="logo" />
      <br />
      <div class="text-h2 titulo">BM - DAS</div>
      <br />
      <q-btn
        id="btnIniciar"
        label="Iniciar"
        @click="btnIniciar"
        rounded
        size="35px"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import firebaseServices from "../services/firebaseServices";
import { useQuasar, QSpinnerPuff } from "quasar";
import { onBeforeUnmount } from "vue";

export default defineComponent({
  name: "IndexPage",

  created() {
    firebaseServices.getPerguntas();
    this.respondeuHoje = firebaseServices.getRespostaHoje();
    this.result = firebaseServices.getRespostasAntigas();

    const $q = useQuasar();

    //função da tela de carregamento
    onBeforeUnmount(() => {
      if (this.timer !== void 0) {
        clearTimeout(this.timer);
        $q.loading.hide();
      }
    });

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
      timer: 0,
    };
  },

  methods: {
    btnIniciar() {
      this.respondeuHoje = firebaseServices.getRespostaHoje();
      if (this.respondeuHoje) {
        this.notif();
      } else {
        this.loading();
        if (this.existeID) {
          this.$router.push("/teste");
        } else {
          this.$router.push("/iniciar");
        }
      }
    },

    notif() {
      this.$q.notify({
        message: "Você já respondeu o teste hoje. Tente novamente amanhã. :)",
        color: "purple",
      });
    },

    loading() {
      this.$q.loading.show({
        spinner: QSpinnerPuff,
        spinnerColor: "yellow",
        spinnerSize: "20em",
        boxClass: "bg-grey-2 text-grey-9 ",
        message: "Carregando perguntas",
        backgroundColor: "blue-grey",
        messageColor: "black",
        customClass: "text-subtitle1",
      });

      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 3000);
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
