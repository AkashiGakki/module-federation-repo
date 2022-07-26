<script setup lang="ts">
import { defineProps, defineEmits, onMounted } from 'vue'

const props = defineProps({
  foo: String,
})

console.log('foo:', props.foo)

const emit = defineEmits(['change', 'delete'])

onMounted(() => emit('change', { test: 'emit' }))
</script>

<template>
  <div></div>
</template>


<style scoped>
</style>