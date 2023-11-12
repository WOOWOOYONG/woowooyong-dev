<script setup lang="ts">
const currentCount = ref(0)

const incrementCount = () => {
  currentCount.value++
}
const decreasement = () => {
  currentCount.value--
}
</script>

<template>
  <main class="rounded border-2 border-slate-700 p-4">
    <div class="mb-8 text-xl">
      Current Count : <span class="font-medium">{{ currentCount }}</span>
    </div>
    <div class="flex items-center gap-4">
      <button
        class="rounded-lg border-2 border-sky-700 px-3 py-1"
        type="button"
        @click="decreasement"
      >
        - 1
      </button>
      <button
        class="rounded-lg border-2 border-emerald-600 px-3 py-1"
        type="button"
        @click="incrementCount"
      >
        + 1
      </button>
    </div>
  </main>
</template>

<style scoped></style>
