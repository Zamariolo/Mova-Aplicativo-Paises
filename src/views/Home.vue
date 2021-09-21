<template>
  <div class="corpo">
    <painel-barra-pesquisa
      v-on:retornandoPaisesFiltrados="recebePaisesFiltrados"
    ></painel-barra-pesquisa>

    <v-btn
      color="#6D2080"
      dark
      fixed
      right
      bottom
      fab
      class="btn_limpaBusca"
      v-show="itemQuantity"
      v-on:click="limparResultados"
      >Limpar</v-btn
    >

    <div class="painel-lista-paises">
      <bandeira
        v-bind:paises="bandeirasMostrar"
        v-on:paisSelecionado="abreInfoPais"
      ></bandeira>
    </div>

    <div class="painel-pagination" v-show="showPagination">
      <v-pagination
        v-model="page"
        :length="pagesQuantity"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import BarraPesquisa from "../components/shared/barraPesquisa/BarraPesquisa.vue";
import Bandeira from "../components/shared/bandeira/Bandeira.vue";

export default {
  name: "Home",

  components: {
    "painel-barra-pesquisa": BarraPesquisa,
    bandeira: Bandeira,
  },

  data() {
    return {
      // Pagination
      page: 1,
      perPage: 12,

      // Valores selecionados nos autocompletes
      tipoFiltroSelecionado: "",
      filtroSelecionado: "",

      // Valores para serem mostrados
      paisesFiltrados: [],
    };
  },

  computed: {
    itemQuantity() {
      // Retorna a quantidade de items para serem mostrados
      return this.paisesFiltrados.length;
    },

    pagesQuantity() {
      // Retorna a quantidade de paginas necessarias para a pagination
      return Math.ceil(this.itemQuantity / this.perPage);
    },

    bandeirasMostrar() {
      return this.paisesFiltrados.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },

    showPagination() {
      // Se tiver mais de uma pagina, entao mostra o elemento de pagination
      return this.pagesQuantity > 1 ? true : false;
    },
  },

  methods: {
    recebePaisesFiltrados(paisesFiltrados_resposta) {
      // Descr: Recebe os paises filtrados do componente barra de pesquisa para exibicao na tela
      this.paisesFiltrados = paisesFiltrados_resposta;
    },

    limparResultados() {
      // Descr: Limpa todos os resultados e bandeiras
      this.paisesFiltrados = [];
    },

    abreInfoPais(codigoPais) {
      // Abre a tela e carrega informacoes
      this.$router.push({ path: `/info/${codigoPais}` });
    },
  },
};
</script>

<style>
/* Resultados */

.btn_limpaBusca {
  font-size: 12px !important;
}

.painel-lista-paises {
  width: 90%;
  margin: 0% auto;
  margin-top: 30px;
  align-items: center;
  display: flex;
  justify-content: space-around;
}

/* Pagination */
.painel-pagination {
  margin: 30px;
}
</style>
