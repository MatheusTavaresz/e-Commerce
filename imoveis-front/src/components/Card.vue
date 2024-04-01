<script>
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
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-1 focus:ring-green-300 font-medium rounded-sm text-sm px-5 py-2.5 m-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Conferir
        </button>
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

