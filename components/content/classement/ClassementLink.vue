<script lang="ts" setup>
import { Part } from '../../../types'

defineProps<{
  buttonLink: string
  buttonText: string
  part: Part
}>()

const useClass = function (part: Part) {
  switch (part) {
    case 'classement':
      return 'before:from-primary-base before:to-primary-variation-1 border-gradient-br-associations-white'
    case 'partenaires':
      return 'before:from-accent-purple before:to-accent-blue border-gradient-br-partenaires-white'
    case 'tour-asso':
      return 'before:from-primary-base before:to-accent-purple border-gradient-br-tour-asso-white'
    default:
      return ''
  }
}
</script>

<template>
  <BaseNuxtLink
    :button-link="buttonLink"
    :button-text="buttonText"
    class="relative gradient-border-2 before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r  before:blur-md before:z-[-1]"
    :class="useClass(part)"
  />
</template>
