// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  nitro: {
    preset: 'static',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    'nuxt-svgo',
    'vue-yandex-maps/nuxt',
    '@nuxt/image',
  ],
  alias: {
    '@img': '/assets/img',
    '@ui': '/components/ui',
    '@sections': '/components/sections',
    '@utils': '/utils',
  },
  app: {
    head: {
      title: 'Smuzi Dance | Студия танцев',
      meta: [
        { name: 'description', content: 'Студия танцев' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/scss/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/scss/_variables.scss" as *;
          @use "@/assets/scss/_mixins.scss" as *;
        `,
        },
      },
    },
  },
  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
      },
      {
        name: 'Unbounded',
        provider: 'google',
        weights: [700, 800],
        styles: ['normal'],
      },
    ],
  },
  svgo: {
    autoImportPath: '@/assets/images/',
    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              inlineStyles: {
                onlyMatchedOnce: false,
              },
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  yandexMaps: {
    apikey: 'a0e1a480-a0c1-4592-be5d-a00d4257adfd',
  },
})