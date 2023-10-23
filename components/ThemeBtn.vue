<script setup lang="ts">
const color = useColorMode()

const toggleDark = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="text-gray-500 transition-all hover:scale-105 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
    @click="toggleDark"
  >
    <Icon v-if="color.value === 'dark'" name="heroicons-outline:moon" class="h-6 w-6" />
    <Icon v-else name="heroicons-outline:sun" class="h-6 w-6" />
  </button>
</template>

<style scoped>
button {
  transition: color 0.2s ease, background-color 0.2s ease;
}
</style>
