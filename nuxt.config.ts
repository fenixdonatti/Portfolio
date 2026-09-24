import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/image'],
  nitro: {
    compressPublicAssets: true,
  },
  image: {
    format: ['webp', 'avif', 'png', 'jpg', 'jpeg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  routeRules: {
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
  },
  runtimeConfig: {
    public: {
      mixpanelToken: process.env.NUXT_PUBLIC_MIXPANEL_TOKEN || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'Fênix Rodrigues Pedro | Desenvolvedor de Software',
      meta: [
        { name: 'description', content: 'Portfólio de Fênix Rodrigues Pedro, desenvolvedor de software focado em Java, Spring Boot, TypeScript, Vue e Nuxt.' },
        { name: 'author', content: 'Fênix Rodrigues Pedro' },
        { name: 'theme-color', content: '#f3f1eb' },
        { property: 'og:title', content: 'Fênix Rodrigues Pedro | Desenvolvedor de Software' },
        { property: 'og:description', content: 'Desenvolvedor de software focado em criar soluções digitais claras, rápidas e confiáveis.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:image', content: '/images/pucrs.png' },
        { property: 'og:image:alt', content: 'Portfólio de Fênix Rodrigues Pedro' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Fênix Rodrigues Pedro | Desenvolvedor de Software' },
        { name: 'twitter:description', content: 'Portfólio de Fênix Rodrigues Pedro, desenvolvedor de software.' },
        { name: 'twitter:image', content: '/images/pucrs.png' },
        { name: 'twitter:image:alt', content: 'Portfólio de Fênix Rodrigues Pedro' },
      ],
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})