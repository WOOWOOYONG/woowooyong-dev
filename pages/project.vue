<script setup lang="ts">
const projectList = [
  {
    name: '小島聊癒所',
    description: '',
    id: 1,
    link: 'https://island-of-healing.vercel.app/'
  },
  {
    name: 'HouseHotel-旅館訂房',
    description: '',
    id: 2,
    link: 'https://teamrocket12th.github.io/House-Hotel-Trio/#/'
  },
  {
    name: 'WOWOROOM 床具電商平台',
    description: '',
    id: 3,
    link: 'https://tsaaiiiii.github.io/WOWOROOM-OnlineShop/'
  }
]
</script>

<template>
  <section class="pb-24 pt-12">
    <ul class="grid xl:grid-cols-3 xl:justify-items-center">
      <li
        v-for="project in projectList"
        :key="project.id"
        class="border-themeBorder max-w-[400px] overflow-hidden rounded-lg border"
      >
        <img alt="" class="border-themeBorder border-b object-cover" />
        <div class="p-3">
          <p class="font-bold">{{ project.name }}</p>
          <a
            class="underline opacity-60 duration-200 hover:opacity-80"
            :href="project.link"
            target="_blank"
            >前往查看</a
          >
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
