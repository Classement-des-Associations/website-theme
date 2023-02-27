<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div>
    <h1>Category {{ route.params.id }}</h1>
  </div>
</template>
