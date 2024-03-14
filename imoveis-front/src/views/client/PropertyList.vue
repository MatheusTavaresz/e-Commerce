<template>
  <div>
    <h1>Propriedades em {{ $route.params.city }}</h1>
    <h2 v-if="$route.params.bairro">Filtrado por bairro: {{ $route.params.bairro }}</h2>
  </div>
</template>