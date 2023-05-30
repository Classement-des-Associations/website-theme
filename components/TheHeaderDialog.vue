<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue'

defineProps<{
  srNavigationTitle: string,
  srDialogButtonTitle: {
    open: string,
    close: string,
  },
}>()

const isOpen = ref(false)

function setIsOpen (value: boolean) {
  isOpen.value = value
}

function openModal () {
  setIsOpen(true)
}

function closeModal () {
  setIsOpen(false)
}

const { navigation } = useContent()
</script>

<template>
  <button @click="openModal">
    <span class="sr-only">{{ srDialogButtonTitle.open }} </span>
    <Icon name="heroicons:bars-3-20-solid" class="w-8 h-8" />
  </button>
  <ClientOnly>
    <Dialog :open="isOpen" @close="setIsOpen">
      <DialogPanel class="absolute z-20 inset-0 bg-accent-purple text-white">
        <DialogTitle class="sr-only">
          {{ srNavigationTitle }}
        </DialogTitle>
        <div class="flex flex-row justify-between px-4 pt-4">
          <LogosClassementShort class="h-[40px] w-[40px]" />
          <button @click="closeModal">
            <span class="sr-only">{{ srDialogButtonTitle.close }} </span>
            <Icon name="heroicons:x-mark-20-solid" class="w-8 h-8" />
          </button>
        </div>
        <nav aria-labelledby="primary-nav-mobile" class="mt-14 ml-4">
          <span id="primary-nav-mobile" class="sr-only">{{ srNavigationTitle }} </span>
          <ul class="space-y-10 text-lg font-semibold">
            <template v-for="item in navigation" :key="item._path">
              <li v-if="item.dropdown">
                <div>
                  {{ item.title }}
                </div>
                <ul class="ml-4 mt-4 font-normal">
                  <li v-for="child in item.children" :key="child._path">
                    <NuxtLink :to="child.externalLink ?? child._path" :rel="child.rel" active-class="underline underline-offset-4" @click="closeModal">
                      {{ child.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li v-if="item.for === 'header'">
                <NuxtLink :to="item.externalLink ?? item._path" :rel="item.rel" active-class="underline underline-offset-4" @click="closeModal">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </nav>
      </DialogPanel>
    </Dialog>
  </ClientOnly>
</template>
