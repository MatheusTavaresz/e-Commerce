<template>
  <pre>{{ catalog }}</pre>
</template>

<script setup>
import {computed} from 'vue';
import store from '../store';

const catalog = computed(() => store.state.properties )
</script>