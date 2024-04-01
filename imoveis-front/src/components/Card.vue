<script>
import { ref, onMounted } from 'vue';
import axiosClient from '/axiosClient.js';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    andar: {
      type: Number,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    tipoImovel: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: "Conferir"
    },
    imagem: {
      type: String,
      required: true
    }
  },
  methods: {
    handleButtonClick() {
      this.$emit('button-click');
    }
  }
}

const aparment = ref([]);

onMounted(async () => {
  try {
    const response = await axiosClient.get('/api/catalog');
    const data = response.data;
    console.log(data);
    apartment.value = data.map(imovel => ({
      _id: imovel._id,
      nomeDoCondominio: imovel.nomeDoCondominio,
      cidade: imovel.cidade,
      bairro: imovel.bairro,
      tipoDeImovel: imovel.tipoDeImovel,
      areaTotal: imovel.areaTotal,
      imagem: imovel.imagem,
      andar: imovel.andar
    }));

    const uniqueCities = [...new Set(data.map(item => item.cidade))];
    const uniqueBairros = [...new Set(data.map(item => item.bairro))];

    cities.value = uniqueCities;
    bairros.value = uniqueBairros;

    console.log(uniqueCities);
    console.log(uniqueBairros);
  } catch (error) {
    console.error('Erro ao fazer requisição:', error);
  }
});

</script>

<template>
  <div class="bg-white border shadow-slate-300 shadow-md m-4">
    <div class="p-4 bg-cover w-full md:w-[390px] h-[250px] md:h-[500px] cursor-pointer">
      <div class="mb-5 bg-slate-200 opacity-60 flex flex-col md:mt-[50%] hover:opacity-100 transition-opacity">
        <h3 class="text-lg text-center font-semibold">{{ title }}</h3>
        <span class="card-border"><p class="m-2"><strong>Cidade: </strong>{{ cidade }}</p></span>
        <span class="card-border"><p class="m-2"><strong>Bairro: </strong>{{ bairro }}</p></span>
        <span class="card-border"><p class="m-2"><strong>Andar: </strong>{{ andar }}</p></span>
        <span class="card-border"><p class="m-2"><strong>Tipo de Imóvel: </strong>{{ tipoImovel }}</p></span>
        <router-link 
        v-for="item in aparment"
        :key="item._id"
        :to="{ name: 'apartment', params: { nomeDoCondominio: item.nomeDoCondominio, andar: item.andar }}">
        {{ item.nomeDoCondominio }} - Andar {{ item.andar }}
</router-link>
      </div>
   </div>
  </div>
</template>

<style>
p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.card-border{ 
  border-color: greenyellow;
  border-left-width: 3px;
  border-left-style: inherit;
  margin-bottom: 5px;
}
</style>

