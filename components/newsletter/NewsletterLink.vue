<script lang="ts" setup>
const props = defineProps<{
  buttonLink: string
  buttonText: string
}>()

const newsletterLink = useClassementLink(props.buttonLink)
</script>

<template>
  <ClassementLink part="classement" :button-link="newsletterLink" :button-text="buttonText" target="_blank" />
</template>
