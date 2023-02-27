<script setup lang="ts">
import type { Part } from '../../../types'

const props = defineProps<{
  part?: Part,
  withGraphics?: boolean
}>()

const colors = useColorsByPart(props.part)
</script>

<template>
  <section class="py-20 md:py-44 relative overflow-hidden">
    <template v-if="withGraphics">
      <GraphicsTriangles class="hidden blog:md:block blog:absolute blog:-left-32 blog:bottom-20" />
      <GraphicsRoundDots class="hidden blog:md:block blog:absolute blog:top-4 blog:-right-4" />
    </template>

    <div class="flex flex-col justify-center items-center gap-8 text-center">
      <h1 class="text-3xl md:text-5xl md:leading-snug font-bold blog:text-black transition ease-in"
        :class="part ? [colors.backgroundGradient, 'text-transparent bg-clip-text'] : 'text-black'">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <p v-if="$slots.subtitle" class="max-w-3xl text-lg font-medium">
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </p>
    </div>

    <template v-if="$slots.actions">
      <div class="mt-16 flex flex-row justify-center items-center space-x-4 md:space-x-6">
        <ContentSlot :use="$slots.actions" unwrap="p" />
      </div>
    </template>
  </section>
</template>
