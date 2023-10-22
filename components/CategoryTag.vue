<script setup lang="ts">
const categories = ['JavaScript', 'Nuxt', 'Vue', 'TypeScript', 'Web']
</script>

<template>
  <div>
    <ul class="flex flex-wrap items-center gap-3 sm:flex-col sm:items-start">
      <li v-for="(tag, index) in categories" :key="index">
        <NuxtLink
          :to="`/categories/${tag}`"
          class="inline-block rounded-lg bg-slate-500 px-3 py-2 font-medium text-gray-100 transition-all hover:scale-105"
          ># {{ tag }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
