<script setup lang="ts">
const { path } = useRoute()
// const slug = useRoute().params.slug.toString().replace(/,/g, '/')

const { data } = (await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})) as { data: any }

definePageMeta({
  middleware: ['scroll']
})

// 目錄 (old)
// const currentId = ref('')

// const setActive = (id: string) => {
//   currentId.value = id
// }

// type TextNode = {
//   type: 'text'
//   value: string
// }

// type ElementNode = {
//   type: 'element'
//   tag: string
//   props: {
//     [key: string]: any
//   }
//   children: TextNode[]
// }

// type ContentItem = {
//   id: string
//   title: string
//   depth: number
// }

// const toc = computed(() => {
//   if (!data.value) {
//     return []
//   }
//   const items = data.value.body?.children
//   if (!items) {
//     return []
//   }

//   const toc: ContentItem[] = []
//   const tags = ['h2', 'h3', 'h4', 'h5', 'h6']
//   items.forEach((item: ElementNode) => {
//     if (tags.includes(item.tag)) {
//       toc.push({
//         id: item.props.id,
//         title: item.props.id.toString().replace(/-/g, ' '),
//         depth: Number(item.tag.replace(/h/g, ''))
//       })
//     }
//   })
//   return toc
// })

// 目錄(new)
const activeTocId = ref<string>('')
const nuxtContent = ref(null)

const observer: Ref<IntersectionObserver | null | undefined> = ref(null)
const observerOptions = reactive({
  root: nuxtContent.value,
  threshold: 1
})

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id') as string
      if (entry.isIntersecting) {
        activeTocId.value = id
      }
    })
  }, observerOptions)

  document.querySelectorAll('.article h2[id], .article h3[id]').forEach((section) => {
    observer.value?.observe(section)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const updateId = (newId: string) => {
  activeTocId.value = newId
  observer.value?.disconnect()
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
          class="prose mx-auto dark:prose-invert prose-headings:pt-16 prose-headings:no-underline prose-h1:pt-0 prose-h1:text-center prose-a:border-b-2 prose-a:border-b-gray-700 prose-a:pb-[2px] prose-a:no-underline prose-pre:bg-zinc-100 prose-th:border prose-th:border-gray-600 prose-th:p-2 prose-td:border prose-td:border-gray-600 prose-td:p-2 prose-pre:dark:bg-gray-900"
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
      <!-- <nav class="col-span-3 lg:mx-4 lg:px-4 lg:pt-20">
        <div
          class="sticky right-0 top-20 order-last hidden border-l border-l-gray-700 px-6 opacity-80 xl:inline-block"
        >
          <h2 class="mb-4 text-xl font-medium dark:text-gray-200">目錄</h2>
          <ul class="space-y-2 dark:text-gray-100">
            <li v-for="item in toc" :key="item.id">
              <NuxtLink
                class="line-clamp-1 font-medium uppercase"
                :to="`#${item.id}`"
                :class="{
                  'text-emerald-600 dark:text-emerald-400': currentId === item.id
                }"
                @click="setActive(item.id)"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav> -->
      <div class="col-span-3 lg:mx-4 lg:pt-20">
        <div
          class="sticky right-0 top-20 order-last hidden border-l border-l-gray-700 px-6 opacity-80 xl:inline-block"
        >
          <h2 class="mb-4 text-lg font-medium dark:text-gray-200">Table Of Contents</h2>
          <TableOfContents :active-toc-id="activeTocId!" @update-active-id="updateId" />
        </div>
      </div>
    </div>
    <div v-else vclass="mx-auto">
      <p>目前還沒有文章</p>
    </div>
  </section>
</template>
<style scoped></style>
