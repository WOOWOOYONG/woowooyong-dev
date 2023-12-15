<script setup>
useSeoMeta({
  title: 'WOOWOOYONG',
  ogTitle: 'WOOWOOYONG-個人網站',
  description: '歡迎來到我的開發基地',
  ogDescription: '歡迎來到我的開發基地'
})
const count = await queryContent('notes').count()
</script>

<template>
  <div>
    <div class="px-10 py-6">
      <AboutMe />
    </div>
    <h3>目前共有 {{ count }} 篇筆記</h3>
  </div>
</template>

<style scoped></style>
