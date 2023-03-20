<script lang="ts" setup>
const prose = useProse()
</script>

<template>
  <div
    :class="prose"
  >
    <slot />
  </div>
</template>
