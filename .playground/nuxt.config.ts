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
})
