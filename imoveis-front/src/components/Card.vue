<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    
    </div>
    <div class="card-body">
      <p><strong>Cidade: </strong>{{ cidade }}</p>
      <p><strong>Bairro: </strong>{{ bairro }}</p>
      <p><strong>Tipo de Imovel: </strong>{{ tipoImovel }}</p>
    </div>
    <div class="card-footer">
      <button @click="handleButtonClick">{{ buttonText }}</button>
    </div>
  </div>
</template>

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
      default: "Click me"
    }
  },
  methods: {
    handleButtonClick() {
      this.$emit('button-click');
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.card-header {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}

.card-body {
  padding: 20px;
}

.card-footer {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}
</style>
