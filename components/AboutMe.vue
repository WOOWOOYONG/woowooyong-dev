<script setup lang="ts"></script>

<template>
  <div>
    <section class="container flex items-center justify-center gap-10 pt-10">
      <div class="dark:text-gray-300">
        <div class="mb-10 flex flex-col items-center gap-4">
          <div>
            <img src="/swallows.jpeg" alt="avatar" class="h-32 w-32 rounded-full" />
          </div>
          <div>
            <h1 class="mb-2 text-center text-xl font-medium">YONG</h1>
            <div class="flex items-center justify-center gap-4">
              <p class="font-semibold text-gray-600 dark:text-gray-300">Front-End Developer</p>
              <NuxtLink to="https://github.com/WOOWOOYONG" target="_blank">
                <Icon
                  name="carbon:logo-github"
                  class="h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                />
              </NuxtLink>
            </div>
            <p class="my-2 text-center text-xl font-semibold">歡迎來到我的基地！</p>
          </div>
        </div>
        <div class="text-left text-lg">
          <p class="mb-2">關於我：</p>
          <p class="mb-4 leading-8">
            嚮往DIY的生活方式．樂於研究及探索新技術<br />
            喜歡動手實作，注重細節，享受累積經驗值升等的過程<br />
            以成為前端工程師為目標努力中......
          </p>
          <p class="">目前主要開發工具：Vue生態系</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
