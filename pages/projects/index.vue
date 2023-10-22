<script setup lang="ts">
definePageMeta({
  middleware: ['scroll']
})

useSeoMeta({
  title: 'WOOWOOYONG-我的專案',
  ogTitle: 'WOOWOOYONG-我的專案',
  description: '我的專案和練習作品',
  ogDescription: '我的專案和練習作品'
})

const projectList = [
  {
    name: '小島聊癒所 / 療癒文章平台',
    imgName: 'island-cover.png',
    description: '內容訂閱平台，以心靈成長、療癒類文章為主',
    id: 1,
    link: 'https://islandofhealing2023.rocket-coding.com/',
    tags: ['Nuxt3', 'TypeScript', 'Pinia', 'Tailwind', 'Pusher']
  },
  {
    name: 'HouseHotel-旅館訂房',
    imgName: 'hotel-cover.png',
    description: '協作練習，使用V-Calendar串接API，提供房間預約服務',
    id: 2,
    link: 'https://teamrocket12th.github.io/House-Hotel-Trio/#/',
    tags: ['Vue3', 'V-Calendar', 'Tailwind', 'Vee Validate', 'axios']
  },
  {
    name: 'WOWOROOM 床具電商平台',
    imgName: 'wowowroom-cover.png',
    description: '協作練習，購物車CRUD，使用BEM統一CSS命名規則',
    id: 3,
    link: 'https://tsaaiiiii.github.io/WOWOROOM-OnlineShop/',
    tags: ['JavaScript', 'Sass', 'BEM', 'axios']
  },
  {
    name: 'My PokeDex',
    imgName: 'pokedex-cover.png',
    description: '練習使用TypeScript串接API，可依照地區分類瀏覽',
    id: 4,
    link: 'https://woowooyong.github.io/Practice6-Pokedex/index.html',
    tags: ['TypeScript', 'PokeAPI', 'Lazy-Loading']
  }
]
</script>

<template>
  <div>
    <h2 class="title">專案與練習作品</h2>
    <section class="pb-24 pt-12">
      <ProjectCard :project-list="projectList" />
    </section>
  </div>
</template>

<style scoped></style>
