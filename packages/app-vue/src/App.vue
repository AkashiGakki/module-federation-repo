<script setup lang="ts">
import TestEmit from './components/TestEmit.vue'

const handleEmit = (ev?: any) => {
  console.log('ev:', ev)
}
</script>

<template>
  app-vue
  <TestEmit foo="bar" @change="handleEmit" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
