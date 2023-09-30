<script setup lang="ts">
const navigation = [
  { name: 'Notes', link: '/notes', desc: '筆記列表' },
  { name: 'Project', link: '/project', desc: '專案列表' }
]

const isOpen = ref(false)
const isDesktop = useMediaQuery('(min-width: 640px)')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// const pageWidth = ref()
// const menuStatus = ref(false)
// const toggleMenu = () => {
//   if (window.innerWidth < 640) {
//     menuStatus.value = !menuStatus.value
//   }
// }
// const handleResize = () => {
//   pageWidth.value = window.innerWidth
//   if (pageWidth.value >= 640) {
//     menuStatus.value = true
//   } else {
//     menuStatus.value = false
//   }
// }
// if (process.client) {
//   window.addEventListener('resize', handleResize)
// }

// onMounted(() => {
//   const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
//   const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

//   if (themeFromLocalStorage) {
//     setTheme(themeFromLocalStorage)
//   } else {
//     setTheme(isDarkModePreferred ? 'dark' : 'light')
//   }

//   handleResize()
// })
</script>

<template>
  <header
    class="top-0 z-50 w-full border-slate-900/10 bg-zinc-100 backdrop-blur dark:bg-slate-700 sm:sticky"
  >
    <nav class="shadow-sm">
      <div class="container flex justify-between gap-4 px-10 py-4 text-gray-600">
        <NuxtLink to="/" class="my-link font-bold">
          <Icon
            name="heroicons-outline:home"
            class="h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
          />
        </NuxtLink>
        <!-- Desktop Menu -->
        <ClientOnly>
          <Transition name="menu">
            <ul v-if="isDesktop" class="hidden items-center gap-10 sm:flex sm:gap-5">
              <li v-for="(item, index) in navigation" :key="index">
                <NuxtLink
                  :to="item.link"
                  class="nav-link p-2 font-bold text-gray-600 dark:text-gray-300"
                  :title="item.desc"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
              <li class="my-2 font-bold sm:my-0">
                <ThemeBtn />
              </li>
            </ul>
          </Transition>
        </ClientOnly>
        <!-- Hamburger Button for Mobile -->
        <button class="p-2 sm:hidden" type="button" @click="toggleMenu">
          <Icon name="ri:menu-5-fill" size="24" class="dark:text-gray-300" />
        </button>
      </div>
    </nav>
    <!-- Mobile Menu -->
    <div
      v-if="!isDesktop && isOpen"
      class="border-t border-gray-600 bg-zinc-300 shadow-sm dark:bg-slate-700"
    >
      <ul class="container flex flex-col items-center gap-6 py-4">
        <li
          v-for="(item, index) in navigation"
          :key="index"
          class="border-b border-gray-600 font-bold text-gray-600 dark:border-b-gray-400 dark:text-gray-300"
        >
          <NuxtLink :to="item.link" class="nav-link" :title="item.desc" @click="isOpen = false">
            {{ item.name }}
          </NuxtLink>
        </li>
        <li class="my-2 font-bold sm:my-0" @click="isOpen = false">
          <ThemeBtn />
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.nav-link:hover {
  @apply rounded-md bg-slate-100 duration-300 ease-in-out dark:bg-slate-600;
}
.router-link-active {
  @apply text-emerald-600 dark:text-emerald-400;
}
</style>
