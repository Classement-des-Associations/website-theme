<script setup lang="ts">
const props = defineProps<{
  buttonLink: string
  buttonText: string
  icon?: string
  rightIcon?: string
  small?: boolean
  type?: 'primary'
  outline?: boolean
}>()

const className = computed(() => {
  if (props.type === 'primary') {
    const defaultPrimaryClass = 'border-2 border-primary-base focus-visible:ring-primary-base hover:focus-visible:ring-primary-base/80'
    if (props.outline) {
      return [defaultPrimaryClass, 'bg-white text-black font-medium hover:bg-primary-base/10'].join(' ')
    } else {
      return [defaultPrimaryClass, 'bg-primary-base text-black font-medium hover:bg-primary-base/90 hover:border-primary-base/90'].join(' ')
    }
  }
})

const classementLink = useClassementLink(props.buttonLink)
</script>

<template>
  <NuxtLink
    :to="classementLink"
    class="inline-flex items-center justify-center focus:outline-none focus-visible:outline-none focus-visible:ring-offset-2 focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed transition duration-200"
    :class="[{
      'rounded-lg px-4 py-2 text-base': !small,
      'rounded-[0.25rem] px-[0.375rem] py-1 text-xs': small,
    }, className]"
  >
    <Icon v-if="icon" :name="icon" class="shrink-0 mr-2" />
    <span class="overflow-hidden whitespace-nowrap overflow-ellipsis">
      {{ buttonText }}
    </span>
    <Icon v-if="rightIcon" :name="rightIcon" class="shrink-0 w-4 h-4 ml-2" />
  </NuxtLink>
</template>
