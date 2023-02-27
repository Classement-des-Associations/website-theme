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
      newsletterSubscriptionLink: 'https://example.com'
    },
  }
})
