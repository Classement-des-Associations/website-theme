<script lang="ts" setup>
defineProps<{
  buttonText: string
}>()

const newsletterLink = useClassementLink('newsletter')
</script>

<template>
  <ClassementLink part="classement" :button-link="newsletterLink" :button-text="buttonText" target="_blank" />
</template>
