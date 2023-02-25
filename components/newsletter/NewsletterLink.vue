<script lang="ts" setup>
defineProps<{
  buttonText: string
}>()

const newsletterLink = useRuntimeConfig().public.newsletterSubscriptionLink
</script>

<template>
  <ClassementLink part="classement" :button-link="newsletterLink" :button-text="buttonText" target="_blank" />
</template>
