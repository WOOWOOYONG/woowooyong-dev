<script setup lang="ts">
const myCard = ref<HTMLElement | null>(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(myCard)

const cardTransform = computed(() => {
  const MAX_ROTATION = 6

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)
  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
  <div>
    <section class="container flex flex-col items-center justify-center gap-10 pt-10">
      <h2 class="my-2 text-center text-2xl font-medium dark:text-gray-200">歡迎來到我的基地</h2>
      <div
        ref="myCard"
        :style="{ transform: cardTransform }"
        class="personal-card rounded-md border-8 border-zinc-300 bg-slate-100 p-6 dark:border-stone-400 dark:bg-slate-700 dark:text-gray-200"
      >
        <div class="mb-10 flex flex-col items-center gap-4">
          <ul class="flex w-full items-center justify-end gap-2">
            <li><NuxtImg format="webp" src="/icons/tailwind.svg" alt="vue-icon" class="w-10" /></li>
            <li><NuxtImg format="webp" src="/icons/nuxt.svg" alt="vue-icon" class="w-10" /></li>
            <li><NuxtImg format="webp" src="/icons/vue.svg" alt="vue-icon" class="w-8" /></li>
          </ul>
          <div>
            <NuxtImg format="webp" src="/Me.jpg" alt="avatar" class="h-40 w-40 rounded-full" />
          </div>
          <div>
            <h1 class="mb-2 text-center text-xl font-medium">YONG</h1>
            <div class="flex items-center justify-center gap-4">
              <p class="font-semibold text-gray-600 dark:text-gray-200">Front-End Developer</p>
            </div>
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

<style scoped>
.personal-card {
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
}
/* .container {
  perspective: 1000px;
} */
</style>
