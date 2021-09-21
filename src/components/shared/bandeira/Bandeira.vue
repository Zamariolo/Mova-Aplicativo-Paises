<template>

    <v-layout row wrap justify-center>
        <img class="bandeira" v-for="pais of paises" v-bind:key="pais.name" 
            v-bind:src="pais.flag" v-bind:alt="pais.name" v-on:click="retornaCodigoPais(pais.alpha3Code)">
    </v-layout>

</template>

<script>

    export default {

        props: ['paises'],

        data() {
                return {
            }
        },


        methods: {

            async requestAPI(url)
            { 
                return (await this.axios.get(url)).data;
            },

            retornaCodigoPais(codigoPais)
            {
                // Envia o codigo iso639-1 do pais selecionado para o componente pai
                this.$emit('paisSelecionado', codigoPais);
            },


            /*
            async abrirInfoPais(codigoPais)
            {
                // Descr: Obtem os dados do pais selecionado e o retorna em formato object
                // Input: codigo do pais em alpha3Code
                // Output: object contendo os dados do pais selecionado
                let filtros = '?fields=flag;name;capital;region;subregion;population;languages;borders;translations';
                let dadosPais = {};

                let url = 'https://restcountries.eu/rest/v2/alpha/' + codigoPais + filtros;
                // dadosPais = await this.requestAPI(url);
                // this.$emit('paisSelecionado', dadosPais);
            }*/

        },
        
    }

</script>

<style scoped>

.pai-bandeira {
}

.bandeira {
  height: 181px !important;
  width: 316px !important;
  object-fit: cover;
  cursor: pointer;
  margin: 10px;
  transition: all .2s ease-in-out; 
  text-align: center;
}

.bandeira:hover { transform: scale(1.1); }  

</style>