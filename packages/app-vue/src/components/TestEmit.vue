<script setup lang="ts">
import { defineEmits, defineProps, onMounted } from 'vue'

const props = defineProps({
  foo: String,
})

const emit = defineEmits(['change', 'delete'])

console.log('foo:', props.foo)

onMounted(() => emit('change', { test: 'emit' }))
</script>

<template>
  <div />
</template>

<style scoped>
</style>
