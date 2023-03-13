<script lang="ts" setup>
defineProps<{
  is?: string;
  disableTwoColumns?: boolean;
}>()
</script>

<template>
  <component
    :is="is ?? 'ul'"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8 lg:gap-y-12"
    :class="{ 'md:grid-cols-2': !disableTwoColumns, 'md:grid-cols-3': disableTwoColumns }"
  >
    <slot />
  </component>
</template>
