import { dbRef, respostaRef, database, perguntasRef } from "../key/configKey";
import { child, get, set, onValue, push, ref } from "firebase/database";
import { appStore } from "..//stores/appStore";
import services from "./services";

const firebaseServices = {
  getPerguntas() {
    onValue(perguntasRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Buscou as perguntas");
        appStore.perguntas.push(data)
      } else {
        console.log("No data available");

      }
    });
  },

  getRespostaHoje() {
    var existe = false;
    const idUsuario = localStorage.getItem("id");
    const referenciaResposta = ref(database, '/resultados/' + idUsuario + "/" + services.getData() + "/");
    onValue(referenciaResposta, (snapshot) => {
      if (snapshot.exists()) {
        existe = true;
      } else {
        existe = false;
      }
    });
    return existe;
  },

  getRespostasAntigas() {
    const idUsuario = localStorage.getItem("id");
    const refDatas = ref(database, '/resultados/' + idUsuario + "/");
    onValue(refDatas, (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        var result = snapshot.val()
        return result
      }
    })
  },

  async criaUsuario() {
    if (localStorage.getItem("id") == null) {
      const resposta = await push(respostaRef, "chave")
      localStorage.setItem("id", resposta.key);
      console.log("Criou usuario: " + resposta.key);
    }
  },

  async salvaRespostaNoBanco(resultado) {
    const idUsuario = localStorage.getItem("id");
    const userRef = ref(database, '/resultados/' + idUsuario + "/" + services.getData());
    set(userRef, {
      resposta: resultado,
    });

  },
};

export default firebaseServices;
