import { dbRef, respostaRef, database, perguntasRef } from "../key/configKey";
import { child, get, onValue, push, ref } from "firebase/database";
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

  salvaRespostaNoBanco(resultado) {
    if (localStorage.getItem("id") != null) {
      push(respostaRef, {
        resposta: resultado,
        data: services.getData(),
      })
        .then((resposta) => {
          console.log(resposta.key);
          localStorage.setItem("id", resposta.key);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const idUsuario = localStorage.getItem("id");
      console.log(idUsuario);
      const userRef = respostaRef.child(idUsuario);
      userRef.set({
        resposta: resultado,
        data: services.getData(),
      });
    }

    /* console.log(newPostRef);
        const postId = newPostRef.key;
        localStorage.setItem("id", postId) */
  },
};

export default firebaseServices;
