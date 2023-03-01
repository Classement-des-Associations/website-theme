// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { createResolver, logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using Website Theme v${version}`)

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],

  modules: [
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontaine'
  ],

  css: [
    resolve('./assets/css/app.css'),
    resolve('./assets/css/transitions.css')
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  content: {
    navigation: {
      fields: ['for', 'dropdown']
    }
  },

  runtimeConfig: {
    public: {
      newsletterSubscriptionLink: 'https://example.com'
    }
  }
})
