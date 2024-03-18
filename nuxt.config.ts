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
  ],
  runtimeConfig: {
    mongodbUrl: process.env.MONGODB_URI,
  },
  nitro: {
    plugins: ['@/server/index.ts'],
  },
  devtools: { enabled: true }
})
