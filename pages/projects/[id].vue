<script setup lang="ts">
definePageMeta({
  middleware: ['scroll']
})

const { path } = useRoute()

const { data } = (await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})) as { data: any }
</script>

<template>
  <div>
    <main>
      <article v-if="data" class="pb-24 pt-12">
        <ContentRenderer
          ref="nuxtContent"
          :value="data!"
          class="prose mx-auto max-w-[90ch] dark:prose-invert prose-headings:pt-16 prose-headings:no-underline prose-h1:pt-0 prose-h1:text-center prose-a:border-b-2 prose-a:border-b-gray-700 prose-a:pb-[2px] prose-a:no-underline prose-pre:bg-zinc-100 prose-th:border prose-th:border-gray-600 prose-th:p-2 prose-td:border prose-td:border-gray-600 prose-td:p-2 prose-pre:dark:bg-gray-900"
        />
      </article>
      <p v-else class="mt-20 text-center text-2xl font-semibold dark:text-gray-100">
        這裡還沒有東西...
      </p>
    </main>
  </div>
</template>

<style scoped></style>
