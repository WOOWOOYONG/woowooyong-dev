<script setup lang="ts">
import Giscus from '@giscus/vue'

const colorMode = useColorMode()
const theme = computed(() => `${colorMode.value}`)
</script>

<template>
  <Giscus
    src="https://giscus.app/client.js"
    repo="WOOWOOYONG/woowooyong-dev"
    repo-id="R_kgDOKXqKAw"
    category="Announcements"
    category-id="DIC_kwDOKXqKA84CcZLR"
    mapping="pathname"
    strict="0"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="bottom"
    :theme="theme"
    lang="zh-TW"
    crossorigin="anonymous"
    loading="lazy"
  />
</template>

<style scoped></style>
