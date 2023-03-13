<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="my-4">
    <h1>Category {{ route.params.id }}</h1>
    <div class="flex flex-row gap-4">
      <BaseNuxtLink button-link="/" button-text="Return to home" type="primary" />
      <BaseNuxtLink button-link="/" button-text="Return to home" type="primary" outline />
    </div>
  </div>
</template>
