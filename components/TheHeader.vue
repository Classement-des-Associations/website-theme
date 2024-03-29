<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

defineProps<{
  logo: {
    srTitle: string,
    rightClickUrl: string,
  },
  srNavigationTitle: string,
  dialog: {
    srNavigationTitle: string,
    srDialogButtonTitle: {
      open: string,
      close: string,
    }
  }
}>()

const { navigation } = useContent()

const linkClass = 'py-4 px-5 flex flex-row gap-2 items-center hover:text-primary-base transition ease-in'
</script>

<template>
  <BaseSection is="header" class="py-4 flex flex-row justify-between">
    <div class="flex flex-row space-x-8 justify-center items-center">
      <NuxtLink to="/" @click.right.prevent="navigateTo(logo.rightClickUrl, {external: logo.rightClickUrl.startsWith('http')})">
        <span class="sr-only">{{ logo.srTitle }}</span>
        <LogosClassementShort
          aria-hidden="true"
          class="h-[40px] w-[40px] md:h-[50px] md:w-[50px] text-black hover:text-primary-base motion-safe:transition-all motion-safe:duration-300"
        />
      </NuxtLink>
      <nav aria-labelledby="primary-nav" class="hidden lg:block text-sm leading-[1.125rem]">
        <span id="primary-nav" class="sr-only">{{ srNavigationTitle }}</span>
        <ul class="flex flex-row justify-center font-medium">
          <template v-for="item in navigation" :key="item._path">
            <template v-if="item.dropdown">
              <li>
                <Menu v-slot="{ close }" as="div" class="relative">
                  <MenuButton :class="linkClass">
                    <span>
                      {{ item.title }}
                    </span>
                    <Icon name="heroicons:chevron-down" class="inline-block w-4 h-4" />
                  </MenuButton>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      as="ul"
                      class="z-20 absolute left-4 top-12 p-1 origin-top-right rounded-md bg-white blog:bg-primary-variation-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <template v-for="child in item.children" :key="child._path">
                        <MenuItem as="li">
                          <NuxtLink
                            class="flex flex-row items-center py-2 px-4 whitespace-nowrap hover:text-primary-base transition ease-in"
                            active-class="active-header"
                            :to="child.externalLink ?? child._path"
                            :rel="child.rel"
                            @click="close()"
                          >
                            <Icon :name="child.icon" class="inline-block w-4 h-4 mr-2" />
                            {{ child.title }}
                          </NuxtLink>
                        </MenuItem>
                      </template>
                    </MenuItems>
                  </transition>
                </Menu>
              </li>
            </template>
            <template v-else-if="item.for === 'header'">
              <li>
                <NuxtLink :class="linkClass" active-class="active-header" :to="item.externalLink ?? item._path" :rel="item.rel">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </template>
          </template>
        </ul>
      </nav>
    </div>
    <div class="lg:hidden flex flex-row items-center">
      <TheHeaderDialog :sr-navigation-title="dialog.srNavigationTitle" :sr-dialog-button-title="dialog.srDialogButtonTitle" />
    </div>
  </BaseSection>
</template>
