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
    <section class="container flex flex-col items-center justify-center gap-3 pt-4">
      <h2 class="mb-10 mt-8 text-center text-3xl font-medium dark:text-gray-200 md:mb-20">
        歡迎來到我的基地
      </h2>
      <div ref="myCard" class="card-shadow rounded-md" :style="{ transform: cardTransform }">
        <div
          class="personal-card rounded-md bg-[#f7f7f7] px-3 py-3 dark:bg-[#101722] dark:text-gray-200 md:flex-row md:px-10"
        >
          <ul class="flex w-full items-center justify-end gap-2">
            <li>
              <NuxtImg format="webp" src="/icons/tailwind.svg" alt="tailwind-icon" class="w-10" />
            </li>
            <li><NuxtImg format="webp" src="/icons/nuxt.svg" alt="nuxt-icon" class="w-10" /></li>
            <li><NuxtImg format="webp" src="/icons/vue.svg" alt="vue-icon" class="w-8" /></li>
          </ul>
          <div class="flex flex-col items-center gap-2 md:flex-row md:gap-8">
            <div class="mb-4 flex flex-col items-center gap-4 md:mb-10">
              <div>
                <NuxtImg format="webp" src="/Me.jpg" alt="avatar" class="h-36 w-36 rounded-full" />
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
                喜歡動手實作，享受累積經驗值升等的過程<br />
                以成為前端工程師為目標努力中......
              </p>
              <p class="">目前主要開發工具：Vue生態系</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.card-shadow {
  box-shadow: 0 4px 12px 3px rgb(150, 150, 150), 0 4px 15px 3px #fcfdfe;
  transition: transform 0.5s ease;
  background-clip: padding-box;
}

.dark .card-shadow {
  box-shadow: 0 4px 8px 3px #bcbcbc, 0 4px 15px 3px #b6b6b6;
}
</style>
