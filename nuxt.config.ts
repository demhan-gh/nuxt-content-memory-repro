export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },

  compatibilityDate: '2024-04-03',
})