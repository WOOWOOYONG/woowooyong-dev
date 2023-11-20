<script setup>
const { pokemon } = defineProps({
  pokemon: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="border border-gray-700 bg-gray-200 pb-20">
    <p class="p-2 font-bold">UI-展示元件</p>
    <section v-if="pokemon.length > 0">
      <template v-for="poke in pokemon" :key="poke.id">
        <div class="mx-20 mb-2 rounded border border-gray-600 shadow-sm">
          <p class="m-0 border-b border-gray-800 py-2 text-center text-xl font-bold">
            {{ poke.name }}
          </p>
          <div class="flex justify-center bg-stone-300">
            <img :src="poke.sprites.front_default" :alt="poke.name" class="m-0 w-28" />
          </div>
        </div>
      </template>
    </section>
    <section v-else class="flex items-center justify-center">
      <img src="/images/notes/guess.jpg" alt="我是誰？" class="breathing m-0 w-60" />
    </section>
  </div>
</template>
<style scoped>
@keyframes breathing {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

img.breathing {
  animation: breathing 3s ease-in-out infinite;
}
</style>
