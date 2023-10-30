<script setup lang="ts">
const { path } = useRoute()

const { data } = (await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})) as { data: any }

definePageMeta({
  middleware: ['scroll']
})

// 目錄
const activeTocId = ref<string>('')
const nuxtContent = ref(null)

const observer = ref<IntersectionObserver | null | undefined>(null)
const observerOptions = reactive({
  root: nuxtContent.value,
  threshold: 1,
  rootMargin: '0px 0px -100px 0px'
})

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id') as string
      const element = document.getElementById(`toc-${id}`)
      if (entry.isIntersecting) {
        element?.classList.add('toc-active')
        element?.classList.remove('dark:text-gray-100')
      } else {
        element?.classList.remove('toc-active')
        element?.classList.add('dark:text-gray-100')
      }
    })
  }, observerOptions)

  setTimeout(() => {
    const allHElements = document.querySelectorAll('.article h2[id], .article h3[id]')
    allHElements.forEach((section) => {
      observer.value?.observe(section)
    })
  }, 500)
})

onUnmounted(() => {
  observer.value?.disconnect()
})

// let lastActiveElement: Element | null = null

// const updateId = (newId: string) => {
//   // 移除上一個活動元素的高亮，如果有的話
//   if (lastActiveElement) {
//     lastActiveElement.classList.remove('toc-active')
//     lastActiveElement.classList.add('dark:text-gray-100')
//     // 取消對之前元素的觀察，然後重新觀察
//     observer.value?.unobserve(lastActiveElement)
//     observer.value?.observe(lastActiveElement)
//   }

//   // 更新當前活動元素
//   activeTocId.value = newId
//   const element = document.getElementById(`toc-${newId}`)
//   if (element) {
//     element.classList.add('toc-active')
//     element.classList.remove('dark:text-gray-100')
//     lastActiveElement = element
//   }
// }

const updateId = (newId: string) => {
  activeTocId.value = newId
  // const element = document.getElementById(`toc-${newId}`)
  // element?.classList.add('toc-active')
  // element?.classList.remove('dark:text-gray-100')
}
</script>

<template>
  <section
    class="h-fit flex-col-reverse items-start justify-center gap-16 pb-24 pt-12 xl:flex xl:flex-row"
  >
    <div v-if="data" class="grid-cols-12 xl:grid">
      <article class="article col-span-9">
        <ContentRenderer
          ref="nuxtContent"
          :value="data!"
          class="prose mx-auto dark:prose-invert prose-headings:pt-14 prose-headings:no-underline prose-h1:pt-0 prose-h1:text-center prose-a:border-b-2 prose-a:border-b-gray-700 prose-a:pb-[2px] prose-a:no-underline prose-pre:bg-zinc-100 prose-th:border prose-th:border-gray-600 prose-th:p-2 prose-td:border prose-td:border-gray-600 prose-td:p-2 prose-pre:dark:bg-gray-900"
        />
        <div v-if="data.tags.length > 0" class="mt-12 flex justify-center">
          <span
            v-for="tag in data!.tags"
            :key="tag"
            class="mb-4 mr-3 inline-block whitespace-nowrap rounded-lg bg-gray-600 px-4 py-2 text-sm font-semibold text-gray-100 duration-300 last:mr-0 hover:bg-opacity-90"
          >
            # {{ tag }}
          </span>
        </div>
      </article>
      <div class="col-span-3 lg:mx-4 lg:pt-20">
        <div
          class="sticky right-0 top-20 order-last hidden border-l border-l-gray-700 px-6 opacity-80 xl:inline-block"
        >
          <h2 class="mb-4 text-lg font-medium dark:text-gray-200">目錄</h2>
          <TableOfContents :active-toc-id="activeTocId!" @update-active-id="updateId" />
        </div>
      </div>
    </div>
    <div v-else vclass="mx-auto">
      <p class="text-xl dark:text-gray-200">目前還沒有文章</p>
    </div>
  </section>
</template>
<style scoped></style>
