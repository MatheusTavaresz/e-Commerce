<template>
  <div class="flex p-8 justify-center">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Procurar por propriedades" />

    <div class="flex gap-1">
      <router-link :to="{ name: 'byCities', params: {city}}" v-for="city in cities" :key="city">
       <button class="border border-gray-300 min-w-24"> {{ city }}</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '/axiosClient.js'

const catalog = computed(() => store.state.properties);
const cities = ["Governador Celso Ramos", "Florianopolis"];

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data)
})

</script>
