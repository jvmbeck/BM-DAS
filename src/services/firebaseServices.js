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
    /* get(child(dbRef, `/perguntas/`)).then((snapshot) => {
            if (snapshot.exists()) {

                appStore.perguntas.push(snapshot.val())
                console.log(perguntas[0]);

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
 */
  },

  async salvaRespostaNoBanco(resultado) {
    if (localStorage.getItem("id") == null) {
      const resposta = await push(respostaRef, "oi")
      localStorage.setItem("id", resposta.key);
    }
    const idUsuario = localStorage.getItem("id");
    console.log(idUsuario);
    const userRef = ref(database, '/resultados/' + idUsuario + "/" + services.getData());

    set(userRef, {
      resposta: resultado,
      data: services.getData(),
    });



    /* console.log(newPostRef);
        const postId = newPostRef.key;
        localStorage.setItem("id", postId) */
  },
};

export default firebaseServices;
