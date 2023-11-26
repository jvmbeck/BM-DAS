<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6" style="text-align: center">Tabela de Resultados</div>
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
          <td class="text-right">4 -> 5</td>
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
</style>
