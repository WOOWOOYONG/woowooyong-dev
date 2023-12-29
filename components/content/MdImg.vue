<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    default: '/'
  },
  width: {
    type: String,
    default: 'w-full'
  }
})
</script>
<template>
  <img :src="imgSrc" alt="note-img" loading="lazy" class="mx-auto mt-12" :class="width" />
</template>
