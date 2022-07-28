<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { TestEmit } from '@akashi/app-vue'

const VueButton = defineAsyncComponent(() => import('@app-vue/Button'))
const VueFooter = defineAsyncComponent(() => import('@app-vue/Footer'))
</script>

<template>
  base-layer
  <TestEmit foo="base" />
  <VueButton />
  <VueFooter />
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
