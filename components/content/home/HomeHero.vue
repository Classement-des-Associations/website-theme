<script setup lang="ts">
const props = defineProps<{
  sectionClass?: string
  topButtonText?: string
  topButtonLink?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}>()

const primaryLink = useClassementLink(props.primaryButtonLink)
const secondaryLink = useClassementLink(props.secondaryButtonLink)
</script>

<template>
  <BaseSection :class="sectionClass">
    <div class="flex flex-col md:flex-row">
      <div class="w-full flex flex-col items-center sm:items-start gap-y-8">
        <BaseNuxtLink
          v-if="topButtonLink && topButtonText"
          :button-link="topButtonLink"
          :button-text="topButtonText"
          class="bg-zinc-100 hover:bg-zinc-200"
          small
        />
        <h1 class="text-black text-center sm:text-start text-5xl md:text-7xl md:leading-snug font-bold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p class="text-black text-center sm:text-start text-2xl">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ClassementLink
            v-if="primaryLink && primaryButtonText"
            :button-link="primaryLink"
            :button-text="primaryButtonText"
            part="classement"
          />
          <BaseNuxtLink
            v-if="secondaryLink && secondaryButtonText"
            :button-link="secondaryLink"
            :button-text="secondaryButtonText"
            right-icon="heroicons:chevron-right"
          />
        </div>
      </div>
      <ContentSlot :use="$slots.extra" />
    </div>
  </BaseSection>
</template>
