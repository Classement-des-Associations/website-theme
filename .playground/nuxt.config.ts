export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true
  },

  content: {
    documentDriven: {
      trailingSlash: true
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Website theme',
      siteDescription: 'Welcome to the website theme!',
      language: 'fr-FR',
      trailingSlash: true
    }
  },
})
