<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent(path).findOne()
})

definePageMeta({
  middleware: ['scroll']
})

useSeoMeta({
  title: data.value?.title,
  ogTitle: data.value?.title,
  description: data.value?.description,
  ogDescription: data.value?.description
})

// 目錄
const activeTocId = ref<string | null>(null)
const nuxtContent = ref(null)

const observer = ref<IntersectionObserver | null | undefined>(null)
const observerOptions = reactive({
  root: nuxtContent.value,
  threshold: 1,
  rootMargin: '0px 0px -70% 0px'
})

onMounted(() => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    const visibleHeadings: IntersectionObserverEntry[] = []

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleHeadings.push(entry)
      }
    })
    if (visibleHeadings.length > 0) {
      // 對可見的標題進行排序，選擇最接近頂部的那個
      const sortedByTop = visibleHeadings.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      )
      const id = sortedByTop[0].target.getAttribute('id')
      activeTocId.value = id
    }
  }

  observer.value = new IntersectionObserver(callback, observerOptions)

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

const updateId = (newId: string) => {
  activeTocId.value = newId
}
</script>

<template>
  <div>
    <section
      class="h-fit flex-col-reverse items-start justify-center gap-16 pb-28 pt-12 xl:flex xl:flex-row"
    >
      <div v-if="data" class="grid-cols-12 gap-8 xl:grid">
        <article class="article col-span-9">
          <ContentRenderer
            ref="nuxtContent"
            :value="data!"
            class="prose mx-auto max-w-[80ch] dark:prose-invert prose-headings:pt-14 prose-headings:no-underline prose-h1:pt-0 prose-h1:text-center prose-a:border-b-2 prose-a:border-b-gray-700 prose-a:pb-[2px] prose-a:no-underline prose-pre:bg-zinc-100 prose-th:border prose-th:border-gray-600 prose-th:p-2 prose-td:border prose-td:border-gray-600 prose-td:p-2 prose-pre:dark:bg-gray-900"
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
            v-if="data.body.toc"
            class="sticky right-0 top-20 order-last hidden border-l border-l-gray-700 px-6 opacity-80 xl:inline-block"
          >
            <h2 class="mb-4 text-lg font-medium dark:text-gray-200">目錄</h2>
            <TableOfContents
              :active-toc-id="activeTocId!"
              :toc-links="data.body.toc?.links"
              @update-active-id="updateId"
            />
          </div>
        </div>
      </div>
      <div v-else vclass="mx-auto">
        <p class="text-xl dark:text-gray-200">目前還沒有文章</p>
      </div>
    </section>
    <section v-if="data" class="mx-auto mb-48 max-w-[65ch]">
      <MsgBoard />
    </section>
  </div>
</template>
