<script lang="ts" setup>
import { Part } from '../../../types'

defineProps<{
  buttonLink: string
  buttonText: string
  part?: Part
  dimmed?: boolean
}>()

const useClass = function (part?: Part, dimmed?: boolean) {
  if (dimmed) {
    const buttonClass: {[key in Part]: string} = {
      classement: 'before:from-primary-base before:to-primary-variation-1 border-gradient-br-associations-light-white',
      partenaires: 'before:from-accent-purple before:to-accent-blue border-gradient-br-partenaires-light-white',
      'tour-asso': 'before:from-primary-base before:to-accent-purple border-gradient-br-tour-asso-light-white',
      discovery: '',
      'ceremonie-finale': '',
      concours: '',
      blog: ''
    }

    return part ? buttonClass[part] : ''
  }

  const buttonClass: {[key in Part]: string} = {
    classement: 'before:from-primary-base before:to-primary-variation-1 border-gradient-br-associations-white',
    partenaires: 'before:from-accent-purple before:to-accent-blue border-gradient-br-partenaires-white',
    'tour-asso': 'before:from-primary-base before:to-accent-purple border-gradient-br-tour-asso-white',
    discovery: '',
    'ceremonie-finale': '',
    concours: '',
    blog: ''
  }

  return part ? buttonClass[part] : ''
}
</script>

<template>
  <BaseNuxtLink
    :button-link="buttonLink"
    :button-text="buttonText"
    class="relative gradient-border-2 before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r  before:blur-md before:z-[-1]"
    :class="useClass(part, dimmed)"
  />
</template>
