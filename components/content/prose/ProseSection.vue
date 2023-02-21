<script lang="ts" setup>
defineProps<{
  sectionClass?: string,
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <Prose class="mx-auto">
      <ContentSlot :use="$slots.content" unwrap="p" />
    </Prose>
  </BaseSection>
</template>
