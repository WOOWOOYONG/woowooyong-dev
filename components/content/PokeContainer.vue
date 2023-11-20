<script setup>
import PokeCard from './PokeCard.vue'

const pokemon = ref([])

const getMyPoke = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    pokemon.value.push(data)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="rounded border border-gray-700 bg-slate-300 p-6 dark:bg-slate-500">
    <p class="m-0 font-bold">Container 元件</p>
    <div class="my-2 flex gap-4">
      <p class="m-0">取得API資料放入UI元件</p>
      <button
        type="button"
        class="rounded bg-emerald-700 px-1 text-sm text-white transition-all hover:scale-105"
        @click="getMyPoke"
      >
        Fetch
      </button>
    </div>

    <PokeCard :pokemon="pokemon" />
  </div>
</template>
