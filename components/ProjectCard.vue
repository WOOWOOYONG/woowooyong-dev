<script setup lang="ts">
interface ProjectInfo {
  name: string
  imgName: string
  description: string
  id: number
  link: string
  tags: string[]
}

defineProps<{ projectList: ProjectInfo[] }>()
</script>

<template>
  <ul class="mb-2 grid gap-12 xl:grid-cols-2 xl:justify-items-center">
    <li
      v-for="project in projectList"
      :key="project.id"
      class="max-w-[480px] overflow-hidden rounded-lg"
    >
      <div>
        <img
          alt="project-cover"
          :src="`/images/${project.imgName}`"
          class="mb-4 w-full object-cover"
        />
      </div>

      <div class="px-4 pb-4">
        <NuxtLink
          target="_blank"
          :to="project.link"
          class="mb-4 block text-xl font-bold underline hover:text-indigo-900 dark:text-gray-100"
          >{{ project.name }}</NuxtLink
        >

        <p class="mb-6 text-gray-700 dark:text-gray-100">
          {{ project.description }}
        </p>
        <ul class="flex gap-3">
          <li
            v-for="(tag, index) in project.tags"
            :key="index"
            class="rounded bg-slate-700 px-2 py-1 text-sm text-gray-100"
          >
            #{{ tag }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
