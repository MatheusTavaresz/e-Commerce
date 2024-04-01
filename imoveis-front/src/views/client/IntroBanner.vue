<template>
  <div class="bg-[#0F2433] h-[70vh] relative overflow-hidden flex">
  <img src="../../assets/cover.jpg" class="h-full pl-[5.5vh]"/>
  <img :src="currentImage" class="transition-all duration-500 ease-out p-2.5 w-full" />
  </div>
  <div class="h-full bg-slate-200 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <h3 class="text-center text-3xl font-semibold mb-4">Vantagens de usar nossa plataforma</h3>
      <div class="mb-8">
        <div class="mb-4 flex items-start">
          <img src='../../assets/icons8-sea-50.png' class="w-[50px] mt-3 h-[100%]">
          <div class="ml-3">
            <h4 class="text-lg font-semibold mb-2">Exposição Premium à Beira-Mar</h4>
            <p class="text-gray-700">Dê destaque aos seus imóveis com nossa plataforma especializada em propriedades perto do mar. Alcance um público qualificado e interessado em investir em imóveis com vistas deslumbrantes e acesso privilegiado ao litoral.</p>
          </div>
        </div>
        <div class="mb-4 flex items-start">
          <img src='../../assets/icons8-360-96.png' class="w-[50px] mt-3 h-[100%]">
          <div class="ml-3">
            <h4 class="text-lg font-semibold mb-2">Visualização 360 Imersiva</h4>
            <p class="text-gray-700">Proporcione uma experiência única aos potenciais compradores com nossa opção de visualização 360. Permita que eles explorem cada detalhe dos seus imóveis de forma virtual, oferecendo uma visão completa e realista antes mesmo da visita presencial.</p>
          </div>
        </div>
        <div class="mb-4 flex items-start">
          <img src='../../assets/icons8-distance-64.png' class="w-[50px] mt-3 h-[100%]">
          <div class="ml-3">
            <h4 class="text-lg font-semibold mb-2">Distância entre Pontos Turísticos</h4>
            <p class="text-gray-700">Destaque a localização privilegiada dos seus imóveis em relação aos principais pontos turísticos da região. Forneça informações precisas sobre a distância até praias, parques, restaurantes e outras atrações locais, destacando o potencial de lazer e entretenimento para os futuros proprietários.</p>
          </div>
        </div>
        <div class="mb-4 flex items-start">
          <img src='../../assets/icons8-street-view-64.png' class="w-[50px] mt-3 h-[100%]">
          <div class="ml-3">
            <h4 class="text-lg font-semibold mb-2">Integração ao Google Street View</h4>
            <p class="text-gray-700">Aproxime os potenciais compradores da experiência real de estar no local com nossa integração ao Google Street View. Permita que eles façam um tour virtual pelas redondezas dos seus imóveis, explorando o ambiente e visualizando a vizinhança de forma interativa.</p>
          </div>
        </div>
        <div class="mb-4 flex items-start">
          <img src='../../assets/icons8-international-64.png' class="w-[50px] mt-3 h-[100%]">
          <div class="ml-3">
            <h4 class="text-lg font-semibold mb-2">Alcance Nacional e Internacional</h4>
            <p class="text-gray-700">Amplie o alcance da sua marca e dos seus imóveis para além das fronteiras locais. Aproveite nossa presença online para atrair potenciais compradores não apenas a nível local, mas também nacional e internacional, aumentando suas oportunidades de negócio.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex bg-slate-200 place-content-center">
    <router-link :to="{name: 'catalog'}">
      <button class="m-3 bg-[#0F2433] text-white w-full h-10 px-5 text-center text-md font-semibold">Explorar</button>
    </router-link>
    </div>
</template>


<script>
import Catalog from '../client/Catalog.vue'
export default {
  data() {
    return {
      imagens: [
      'https://mediaim.expedia.com/destination/9/ccd812a1d2418566e45d3a7d4adb6660.jpg',
        'https://aronda.com.br/wp-content/uploads/2017/11/Aronda-Florianopolis-Avenida-Beira-Mar-Norte.jpg', 
      ],
      currentIndex: 0,
      timer: null
    }
  },
  computed: {
    currentImage() {
      return this.imagens[this.currentIndex]
    },
  },
  mounted() {
    this.startCarousel()
  },
  methods: {
    startCarousel() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imagens.length
      }, 5000)
    },
  stopCarousel(){
    clearInterval(this.timer)
    }
  },
  beforeDestroy() {
    this.stopCarousel();
  },
}
</script>