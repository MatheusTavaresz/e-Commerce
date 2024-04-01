<template>
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Procurar por propriedades" />
    <div class="flex-col gap-1">
      <h1>Procurar por cidade</h1>
      <router-link :to="{ name: 'byCities', params: {city: city}}" v-for="city in cities" :key="city">
       <button class="border border-gray-300 min-w-24"> {{ city }}</button>
      </router-link>
    </div>

  <p class="text-center title">Catálogo</p>
  <div class="flex flex-wrap justify-center border-rounded-md">
    <Card 
      :style="{ 'background-image': 'url(' + imovel.imagem +')', 'background-size': 'cover'}"
      v-for="imovel in catalog" :key="imovel._id"
      :imagem="imovel.imagem"
      :title="imovel.nomeDoCondominio" 
      :cidade="imovel.cidade"
      :andar="imovel.andar"
      :bairro="imovel.bairro"
      :tipoImovel="imovel.tipoDeImovel"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '/axiosClient.js';
import Card from '../../components/Card.vue';

const cities = ref([]);
const bairros = ref([]);
const catalog = ref([]);

onMounted(async () => {
  try {
    const response = await axiosClient.get('/api/catalog');
    const data = response.data;
    console.log(data);
    catalog.value = data.map(imovel => ({
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

<style>
p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.title{
  font-size: 20px;
  font-weight: 300;
}
</style>