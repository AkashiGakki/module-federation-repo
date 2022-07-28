<script setup lang="ts">
import { TestEmit } from '@akashi/app-vue'
</script>

<template>
  base-layer
  <TestEmit foo="base" />
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
