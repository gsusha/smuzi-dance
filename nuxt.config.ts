// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon'
  ],
  alias: {
    '@img': '/assets/img',
    '@ui': '/components/ui',
    '@sections': '/components/sections',
    '@utils': '/utils'
  },
  app: {
    head: {
      title: 'Smuzi Dance',
      meta: [
        { name: 'description', content: 'Студия танцев' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  css: ['@/assets/scss/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/scss/_variables.scss" as *;
          @use "@/assets/scss/_mixins.scss" as *;
        `
        }
      }
    }
  }
})
