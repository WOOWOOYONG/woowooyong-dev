<script setup lang="ts">
const categories = ['Nuxt', 'Vue', 'Web', 'JavaScript', 'TypeScript']
</script>

<template>
  <div>
    <ul class="flex flex-wrap items-center gap-3 sm:items-start sm:gap-5 xl:flex-col">
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
