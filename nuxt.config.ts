export default defineNuxtConfig({
  css: [
    '@/assets/scss/fonts.scss',
    '@/assets/scss/global.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  modules: [
    '@pinia/nuxt',
    'nuxt-server-utils',
    '@sidebase/nuxt-auth'
  ],

  runtimeConfig: {
    mongodbUrl: process.env.MONGODB_URI,
    authSecret: process.env.AUTH_SECRET,
  },

  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  },

  nitro: {
    plugins: [
      '@/server/index.ts',
      '@/server/seed.ts'
    ],
  },

  app: {
    head: {
      title: 'Погнали'
    }
  },

  devtools: { enabled: true }
})
