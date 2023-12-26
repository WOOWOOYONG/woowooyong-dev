<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    default: '/'
  }
})
</script>
<template>
  <img :src="imgSrc" alt="note-img" loading="lazy" />
</template>
