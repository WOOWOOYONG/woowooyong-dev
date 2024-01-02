<script setup lang="ts">
const navigation = [
  { name: 'Notes', link: '/notes', desc: '筆記列表', id: 1 },
  { name: 'Project', link: '/projects', desc: '專案列表', id: 2 }
]

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 640px)')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// 編譯後被直接替換為 0 或 1，效能優化
const enum DIRECTION {
  UP,
  DOWN
}

const offset = ref(0)
const direction = ref<DIRECTION>()

const onScroll = () => (offset.value = window.scrollY)

useEventListener('scroll', onScroll, {
  capture: false,
  passive: true
})

watch(offset, (value, oldValue) => {
  if (isDesktop.value) {
    direction.value = value > oldValue ? DIRECTION.DOWN : DIRECTION.UP
  } else {
    direction.value = DIRECTION.UP
  }
})
</script>

<template>
  <header
    class="top-0 z-50 w-full border-slate-900/10 bg-zinc-100 backdrop-blur transition-transform duration-500 dark:bg-slate-700 sm:sticky"
    :class="{
      '-translate-y-full': direction === DIRECTION.DOWN && isDesktop
    }"
  >
    <ClientOnly>
      <nav class="shadow-sm">
        <div
          class="container flex items-center justify-between gap-4 px-4 py-2 text-gray-600 sm:px-10 lg:py-4"
        >
          <NuxtLink to="/" class="home-btn relative font-bold" title="home">
            <Icon
              name="heroicons-outline:home"
              class="h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
            />
          </NuxtLink>
          <!-- Desktop Menu -->
          <ClientOnly>
            <Transition name="menu">
              <ul v-if="isDesktop" class="hidden items-center gap-10 sm:flex sm:gap-5">
                <li v-for="item in navigation" :key="item.id">
                  <NuxtLink
                    :to="item.link"
                    class="nav-link p-2 font-bold text-gray-600 dark:text-gray-300"
                    :title="item.desc"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://github.com/WOOWOOYONG" target="_blank" title="GitHub">
                    <Icon
                      name="carbon:logo-github"
                      class="h-6 w-6 text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                    />
                  </NuxtLink>
                </li>
                <li class="my-2 font-bold sm:my-0">
                  <ThemeBtn />
                </li>
              </ul>
            </Transition>
          </ClientOnly>
          <!-- Hamburger Button for Mobile -->
          <div v-if="!isDesktop">
            <NuxtLink
              to="https://github.com/WOOWOOYONG"
              target="_blank"
              class="mr-4"
              title="GitHub"
            >
              <Icon
                name="carbon:logo-github"
                class="h-6 w-6 text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
              />
            </NuxtLink>
            <ThemeBtn />
            <button class="ml-6 p-2" type="button" title="toggleButton" @click="toggleMenu">
              <Icon name="ri:menu-5-fill" size="24" class="dark:text-gray-300" />
            </button>
          </div>
        </div>
      </nav>
      <!-- Mobile Menu -->
      <div
        v-show="!isDesktop && isOpen"
        class="border-t border-gray-600 bg-zinc-300 shadow-sm dark:bg-slate-700"
      >
        <ul class="container flex flex-col items-center gap-6 py-4">
          <li
            v-for="item in navigation"
            :key="item.id"
            class="border-b border-gray-600 font-bold text-gray-600 dark:border-b-gray-400 dark:text-gray-300"
          >
            <NuxtLink :to="item.link" class="nav-link" :title="item.desc" @click="isOpen = false">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </ClientOnly>
  </header>
</template>

<style scoped>
.nav-link:hover {
  @apply rounded-md text-emerald-600 duration-300 ease-in-out dark:hover:text-emerald-400;
}
.router-link-active {
  @apply text-emerald-600 dark:text-emerald-400;
}
.home-btn::before {
  border-radius: 100%;
  content: '';
  height: 7px;
  position: absolute;
  right: -7px;
  top: 0;
  width: 7px;
  background-color: transparent;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}
.home-btn:hover::before {
  @apply bg-emerald-600 opacity-100 dark:bg-emerald-400;
}
</style>
