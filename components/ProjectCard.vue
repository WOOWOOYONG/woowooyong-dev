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
  <ul class="mb-2 grid place-content-center gap-12 xl:grid-cols-2 xl:justify-items-center">
    <li
      v-for="project in projectList"
      :key="project.id"
      class="group max-w-[480px] overflow-hidden"
    >
      <div class="relative mb-4 overflow-hidden rounded-lg">
        <div class="h-[300px] rounded-lg group-hover:scale-105">
          <NuxtImg
            alt="project-cover"
            :src="`/images/projects/cover/${project.imgName}`"
            class="rounded-lg object-contain"
            fit="cover"
            width="480"
            height="300"
            loading="lazy"
          />
          <div
            class="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-10 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
          >
            <NuxtLink
              :to="`/projects/project${project.id}`"
              class="rounded-lg bg-gray-800 p-2 text-white"
              title="專案內容"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="px-4 pb-4">
        <NuxtLink
          target="_blank"
          :to="project.link"
          class="mb-4 block text-xl font-medium underline hover:text-indigo-900 dark:text-gray-100"
          :title="project.name"
          >{{ project.name }}</NuxtLink
        >

        <p class="mb-6 text-gray-700 dark:text-gray-100">
          {{ project.description }}
        </p>
        <ul class="flex flex-wrap gap-3">
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
