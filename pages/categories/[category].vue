<script setup lang="ts">
const route = useRoute()

definePageMeta({
  pageTransition: false,
  key: (route) => route.fullPath
})

const category = route.params.category as string
</script>

<template>
  <div>
    <h2 class="title">關於 {{ route.params.category }} 的筆記</h2>
    <section class="px-3 pb-24 sm:px-0 xl:grid xl:grid-cols-12">
      <aside class="pt-12 sm:col-span-3">
        <CategoryTag />
      </aside>
      <div class="sm:col-span-7 xl:pr-52">
        <ClientOnly>
          <ContentList
            path="/notes"
            :query="{
              only: ['title', 'category', 'date', 'description', 'tags', '_path'],
              where: [
                {
                  category: {
                    $contains: category
                  }
                }
              ],
              $sensitivity: 'base'
            }"
          >
            <!-- Default list slot -->
            <template #default="{ list }">
              <ul class="article-list">
                <li
                  v-for="note in list"
                  :key="note._path"
                  class="my-8 border-b border-slate-600 py-4 dark:text-gray-200"
                >
                  <div>
                    <NuxtLink :to="note._path">
                      <h3 class="block text-2xl font-bold duration-300 hover:-translate-x-1">
                        {{ note.title }}
                      </h3>
                    </NuxtLink>
                    <p class="my-2 line-clamp-1 opacity-70">{{ note.description }}</p>
                    <div class="mb-4 flex items-center gap-2">
                      <span class="pb-1"
                        ><Icon name="material-symbols:calendar-today-rounded"
                      /></span>
                      <span class="">{{ note.date }}</span>
                    </div>
                    <ul class="flex gap-4">
                      <li
                        v-for="(tag, n) in note.tags"
                        :key="n"
                        class="inline-flex items-center justify-center rounded border border-blue-300 bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-gray-700 dark:text-blue-400"
                      >
                        {{ tag }}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </template>

            <!-- Not found slot to display message when no content us is found -->
            <template #not-found>
              <p>目前沒有文章</p>
            </template>
          </ContentList>
        </ClientOnly>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
