<template>
  <q-page class="fundo flex flex-center" style="background-color: bisque">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6" style="text-align: center">
          Tabela de Resultados
        </div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Pontuação</th>
            <th class="text-right">Depressão</th>
            <th class="text-right">Ansiedade</th>
            <th class="text-right">Estresse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Normal</td>
            <td class="text-right">0 -> 4</td>
            <td class="text-right">0 -> 3</td>
            <td class="text-right">0 -> 7</td>
          </tr>
          <tr>
            <td class="text-left">Leve</td>
            <td class="text-right">5 -> 6</td>
            <td class="text-right">5 -> 5</td>
            <td class="text-right">8 -> 9</td>
          </tr>
          <tr>
            <td class="text-left">Moderado</td>
            <td class="text-right">7 -> 10</td>
            <td class="text-right">6 -> 7</td>
            <td class="text-right">10 -> 12</td>
          </tr>
          <tr>
            <td class="text-left">Forte</td>
            <td class="text-right">11 -> 13</td>
            <td class="text-right">8 -> 9</td>
            <td class="text-right">13 -> 16</td>
          </tr>
          <tr>
            <td class="text-left">Extremamente grave</td>
            <td class="text-right">14+</td>
            <td class="text-right">10+</td>
            <td class="text-right">17+</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>

    <div class="resultados">
      <q-card dark bordered class="bg-grey-9 card-resultado">
        <q-card-section>
          <div class="text-h6">Depressão</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-grey-9 card-resultado">
        <q-card-section>
          <div class="text-h6">Ansiedade</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card dark bordered class="bg-grey-9 card-resultado">
        <q-card-section>
          <div class="text-h6">Estresse</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import { ref } from "vue";

export default defineComponent({
  name: "TabelaPontuacao",

  setup() {
    return {
      lorem: "resultado",
    };
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 1000px;
}
.fundo {
  height: 100%;
}

.resultados {
  display: flex;
  flex-direction: row;
  padding: 5%;
  justify-content: space-between;
}

.card-resultado {
  width: 100%;
  min-width: 300px;
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
}

#q-app {
  min-height: 95vh;
  display: flex;
}
.q-pa-md {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
