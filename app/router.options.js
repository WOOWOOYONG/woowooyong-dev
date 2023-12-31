export default {
  scrollBehavior(to, _, savedPosition) {
    const nuxtApp = useNuxtApp()

    // 記錄之前的位置
    if (savedPosition) {
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce('page:finish', () => {
          setTimeout(() => {
            resolve(savedPosition)
          }, 50)
        })
      })
    }

    // 點擊目錄標題
    if (to.hash) {
      setTimeout(() => {
        const heading = document.querySelector(to.hash)

        return window.scrollTo({
          top: heading.offsetTop - 80,
          behavior: 'smooth'
        })
      })
    }
  }
}
