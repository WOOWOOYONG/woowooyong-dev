<script setup lang="ts">
definePageMeta({
  middleware: ['scroll']
})

useSeoMeta({
  title: 'WOOWOOYONG-我的筆記',
  ogTitle: 'WOOWOOYONG-我的筆記',
  description: '我的一些心得筆記',
  ogDescription: '我的一些心得筆記'
})

const displayRange = ref({
  end: 4
})

const { data: notesList } = await useAsyncData('notesList', () => {
  return queryContent('notes')
    .only(['title', 'description', 'date', 'tags', '_path'])
    .sort({ date: -1 })
    .find()
})

const loadMore = () => {
  displayRange.value.end += 5
}

const count = await queryContent('notes').count()
</script>

<template>
  <div>
    <h2 class="title">一些心得筆記</h2>
    <section class="px-3 pb-24 xl:grid xl:grid-cols-12 xl:px-0">
      <aside class="pt-12 sm:col-span-3">
        <CategoryTag />
        <p class="mt-10 font-medium dark:text-gray-200">目前共有 {{ count }} 篇筆記</p>
      </aside>
      <div class="sm:col-span-7 xl:pr-52">
        <ul>
          <li
            v-for="(note, index) in notesList"
            v-show="index < displayRange.end"
            :key="note._path"
            class="my-8 border-b border-slate-600 py-4 dark:text-gray-200"
          >
            <NuxtLink
              :to="note._path"
              class="block text-2xl font-bold duration-300 hover:-translate-x-1"
              :title="note.title"
            >
              {{ note.title }}
            </NuxtLink>
            <p class="my-2 line-clamp-1 opacity-70">
              {{ note.description }}
            </p>
            <div class="mb-4 flex items-center gap-2">
              <span class="pb-1"><Icon name="material-symbols:calendar-today-rounded" /></span>
              <span class="">{{ note.date }}</span>
            </div>

            <div class="flex gap-4">
              <span
                v-for="(tag, index) in note.tags"
                :key="index"
                class="inline-flex items-center justify-center rounded border border-blue-300 bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-gray-700 dark:text-blue-400"
                ># {{ tag }}</span
              >
            </div>
          </li>
        </ul>
        <div class="mt-10 flex justify-center">
          <button
            v-if="displayRange.end <= count"
            type="button"
            class="cursor-pointer rounded-lg border-2 bg-gray-800 px-3 py-2 text-gray-200 transition-transform hover:scale-105 hover:text-gray-200 dark:border-gray-200 dark:text-gray-200"
            @click="loadMore"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
