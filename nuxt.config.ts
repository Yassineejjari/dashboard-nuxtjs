// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { 
      title: 'accueil',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    '@/assets/scss/app.scss'
  ],
  devtools: { enabled: true }
})


