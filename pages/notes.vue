<script setup>
// fetchContentNavigation 回傳值比較簡潔
// const { data: blogNav } = await useAsyncData('navigation', () => {
//   return fetchContentNavigation(queryContent('/'))
// })

definePageMeta({
  middleware: ['scroll']
})

const { data: notesList } = await useAsyncData('notesList', () => {
  return queryContent('notes').sort({ date: -1 }).find()
})
</script>

<template>
  <div class="mx-auto flex max-w-[500px] flex-col">
    <ul>
      <li
        v-for="(note, index) in notesList"
        :key="index"
        class="my-8 border-b border-slate-600 py-4 dark:text-gray-200"
      >
        <NuxtLink
          :to="note._path"
          class="block text-2xl font-bold duration-300 hover:-translate-x-1"
        >
          {{ note.title }}
        </NuxtLink>
        <p class="my-2 line-clamp-1 opacity-70">
          {{ note.description }}
        </p>
        <div class="flex gap-4">
          <span
            v-for="(tag, index) in note.tags"
            :key="index"
            class="rounded bg-zinc-300 p-1 text-sm dark:bg-gray-600 dark:text-slate-100"
            ># {{ tag }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
