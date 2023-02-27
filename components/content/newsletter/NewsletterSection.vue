<script lang="ts" setup>
const props = defineProps<{
  buttonText: string
  sectionClass?: string
  visible?: boolean
}>()

const observer = ref<IntersectionObserver>()
const root = ref<Element | null>(null)
const slideIn = ref(props.visible || false)

const observerCallback = (entries: IntersectionObserverEntry[]) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      slideIn.value = true
    }
  })

onBeforeMount(() => {
  if (props.visible) { return }
  observer.value = new IntersectionObserver(observerCallback)
})

onMounted(() => root.value && observer.value?.observe(root.value))

onBeforeUnmount(() => observer.value?.disconnect())
</script>

<template>
  <BaseSection class="relative transition duration-700"
    :class="[!slideIn ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0', sectionClass]">
    <div ref="root">
      <Newsletter :button-text="buttonText">
        <template #title>
          <ContentSlot :use="$slots.title" unwrap="p" />
        </template>
        <template #subtitle>
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </template>
      </Newsletter>
    </div>
  </BaseSection>
</template>
