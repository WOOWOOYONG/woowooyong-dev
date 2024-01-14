<script setup lang="ts">
interface TocLinkBase {
  id: string
  depth: number
  text: string
}

interface TocH3Link extends TocLinkBase {}

interface TocH2Link extends TocLinkBase {
  children?: TocH3Link[]
}

interface TocProps {
  activeTocId: string | null
  tocLinks: TocH2Link[]
}

const props = defineProps<TocProps>()

const router = useRouter()
const emits = defineEmits(['updateActiveId'])

const sliderHeight = useState('sliderHeight', () => 0)
const sliderTop = useState('sliderTop', () => 0)
const tocLinksH2: Ref<Array<HTMLElement>> = ref([])
const tocLinksH3: Ref<Array<HTMLElement>> = ref([])

const onClick = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    router.push({ hash: `#${id}` })
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    emits('updateActiveId', id)
  }
}

watchDebounced(
  () => props.activeTocId,
  (newActiveTocId) => {
    const h2Link = tocLinksH2.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)
    const h3Link = tocLinksH3.value.find((el: HTMLElement) => el.id === `toc-${newActiveTocId}`)

    if (h2Link) {
      sliderHeight.value = h2Link.offsetHeight
      sliderTop.value = h2Link.offsetTop - 100
    } else if (h3Link) {
      sliderHeight.value = h3Link.offsetHeight
      sliderTop.value = h3Link.offsetTop - 100
    }
  },
  { debounce: 200, immediate: true }
)
</script>

<template>
  <nav class="mt-4 flex">
    <ul class="ml-0">
      <li
        v-for="{ id, text, children } in tocLinks"
        :id="`toc-${id}`"
        :key="id"
        ref="tocLinksH2"
        class="mb-2 ml-0 cursor-pointer list-none last:mb-0"
        :class="
          id === activeTocId
            ? 'font-bold text-emerald-600 dark:text-emerald-400'
            : 'dark:text-gray-100'
        "
        @click="onClick(id)"
      >
        {{ text }}
        <ul v-if="children" class="my-2 ml-3">
          <li
            v-for="{ id: childId, text: childText } in children"
            :id="`toc-${childId}`"
            :key="childId"
            ref="tocLinksH3"
            class="mb-2 ml-3 cursor-pointer list-none text-sm last:mb-0"
            :class="
              childId === activeTocId
                ? 'font-bold text-emerald-600 dark:text-emerald-400'
                : 'dark:text-gray-100'
            "
            @click.stop="onClick(childId)"
          >
            {{ childText }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
