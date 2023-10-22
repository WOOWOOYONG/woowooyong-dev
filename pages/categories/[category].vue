<script setup lang="ts">
const route = useRoute()

const category = computed(() => {
  return route.params.category
})

const { data: notes } = await useAsyncData('category', () =>
  queryContent('/notes')
    .where({ category: { $contains: category.value } })
    .find()
)
</script>

<template>
  <div>
    <h2 class="title">關於 {{ route.params.category }} 的筆記</h2>
    <section class="px-3 pb-24 sm:px-0 xl:grid xl:grid-cols-12">
      <aside class="pt-12 sm:col-span-3">
        <CategoryTag />
      </aside>
      <div class="sm:col-span-7 xl:pr-52">
        <ul v-if="notes!.length > 0">
          <li
            v-for="(note, index) in notes"
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
            <div class="mb-4 flex items-center gap-2">
              <span class="pb-1"><Icon name="material-symbols:calendar-today-rounded" /></span>
              <span class="">{{ note.date }}</span>
            </div>

            <div class="flex gap-4">
              <span
                v-for="(tag, index) in note.tags"
                :key="index"
                class="rounded bg-slate-300 px-2 py-1 text-sm dark:bg-gray-600 dark:text-slate-100"
                ># {{ tag }}</span
              >
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
