<script setup lang="ts">
defineProps<{ noteTags: string[] }>()
</script>

<template>
  <ul v-if="noteTags.length > 0" class="flex gap-4">
    <li
      v-for="(tag, index) in noteTags"
      :key="index"
      class="inline-flex items-center justify-center rounded border border-blue-300 bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-gray-700 dark:text-blue-400"
    >
      # {{ tag }}
    </li>
  </ul>
</template>

<style scoped></style>
