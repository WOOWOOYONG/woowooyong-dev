<script setup lang="ts">
const categories = ['Nuxt', 'Vue', 'Web', 'JavaScript', 'TypeScript', 'Alogorithm']
</script>

<template>
  <div>
    <ul class="flex flex-wrap items-center gap-3 sm:items-start sm:gap-5 xl:flex-col">
      <li v-for="(tag, index) in categories" :key="index">
        <NuxtLink
          :to="`/categories/${tag}`"
          class="inline-block rounded bg-slate-300 px-2.5 py-1 transition-all hover:scale-110 dark:bg-gray-600 dark:text-slate-100"
          ># {{ tag }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
