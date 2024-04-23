<template>
  <q-page class="flex-center flex">
    <q-card class="card q-pa-sm">
      <q-card-section>
        <div class="text-h4 text-center">
          <strong>Termo de Consentimento para Coleta de Informações</strong>
        </div>
      </q-card-section>
      <q-separator />

      <q-card-section class="q-pt-none">
        <q-scroll-area class="text-subtitle1 text-justify" style="height: 300px">
          <br />

          A DriveLife agradece sua participação no protótipo de coleta de informações. Este termo de consentimento tem o
          objetivo de esclarecer os detalhes relacionados à coleta de dados, garantindo transparência e segurança quanto
          ao uso das informações fornecidas. <br />
          <strong>1. Objetivo da Coleta de Informações:</strong>
          <br />
          A coleta de dados durante o uso do protótipo tem como propósito a melhoria contínua dos serviços oferecidos
          pela DriveLife. As respostas e informações compartilhadas serão utilizadas estritamente para fins de análise
          interna, desenvolvimento e aprimoramento dos recursos oferecidos. <br />
          <strong>2. Responsabilidade e Privacidade dos Dados:</strong>
          <br />
          A DriveLife se compromete a ser responsável pela coleta e armazenamento seguro dos dados fornecidos. As
          respostas serão tratadas de forma estritamente anônima, sem qualquer associação com informações pessoais
          identificáveis. serão tratadas de forma estritamente anônima, sem qualquer associação com informações pessoais
          identificáveis.
          <br />
          <strong>3. Anonimato das Respostas: </strong>
          <br />
          Suas respostas serão agregadas aos dados coletados, mantendo total anonimato. Não haverá divulgação pública de
          informações individuais ou identificáveis sem seu consentimento expresso. <br />
          <strong>4. Direito de Retirada e Confidencialidade:</strong>
          <br />
          Você tem o direito de interromper sua participação a qualquer momento, sem penalidades ou prejuízos. Além
          disso, a DriveLife garantirá a confidencialidade das informações coletadas, adotando medidas de segurança
          adequadas para proteger seus dados contra acesso não autorizado.
          <br />
          <!--
          <strong>5. Uso das informações:</strong>
          <br />
          As informações coletadas poderão ser compartilhadas com os setores de saúde e de informática da corporação
          sempre na forma estratificada e agrupada, sempre tomando o cuidado de anonimizar o dado individual de cada
          participante. O BM-DAS nunca fornecerá seus dados de forma individual e para usos que não os fins de pesquisa
          acadêmica. <br />
          -->
          <br />
          Ao concordar com este termo de consentimento, você autoriza a DriveLife a coletar e utilizar suas informações
          de acordo com os termos estipulados acima, para os fins exclusivos de aprimoramento do protótipo.
        </q-scroll-area>
      </q-card-section>
      <q-separator />
      <q-card-actions align="between">
        <q-checkbox v-model="concordo" label="Concordo com os termos de uso do app" />
        <q-btn label="Continuar" :disable="!concordo" to="/teste"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import firebaseServices from "src/services/firebaseServices";

export default {
  name: "IniciarPage",

  created() {
    firebaseServices.criaUsuario();
  },
  data() {
    return {
      concordo: false,
    };
  },
};
</script>

<style scoped>
.fundo {
  display: flex;
  align-items: center;
}

.card {
  width: 90%;
  max-width: 1000px;
  height: 90%;
  max-height: 1200px;
}

.contrato {
  display: flex;
  align-items: center;
}
</style>
